import { PassThrough } from 'node:stream';
import { isbot } from 'isbot';
import ReactDOMServer from 'react-dom/server';
import { renderAsset } from '@vinxi/react';
import type { AnyContext, AnyRouter } from '@tanstack/react-router';
import { StartServer } from '@tanstack/start/server';
import { transformStreamWithRouter } from './transformStreamWithRouter';
import { ColorModeProvider } from '~/app/models/contexts/color-mode.context';
import { getManifest } from 'vinxi/manifest';
import { renderStylesToNodeStream } from '@emotion/server';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import createTheme from '~/app/styles/create-theme';

export type StartHandler<TRouter extends AnyRouter> = (ctx: {
  request: Request;
  router: TRouter;
  responseHeaders: Headers;
}) => Promise<Response>;

type Router = AnyRouter & { context: AnyContext };

export const defaultStreamHandler: StartHandler<AnyRouter> = async ({ request, router, responseHeaders }) => {
  const clientManifest = getManifest('client');
  const assets = await clientManifest.inputs[clientManifest.handler].assets();
  router.update({
    context: {
      ...(router as Router)?.context,
      assets: (
        <>
          {assets.map((asset) => renderAsset(asset as any))}
          {import.meta.env.DEV ? (
            <script type="module" src={clientManifest.inputs[clientManifest.handler].output.path} />
          ) : null}
        </>
      ),
      // head: opts.head,
    },
  });
  const stream = await (async () => {
    console.log(
      typeof ReactDOMServer.renderToReadableStream === 'function',
      typeof ReactDOMServer.renderToPipeableStream === 'function',
    );
    if (typeof ReactDOMServer.renderToReadableStream === 'function') {
      const stream = await ReactDOMServer.renderToReadableStream(
        <ColorModeProvider initial="dark">
          <EmotionThemeProvider theme={createTheme('dark')}>
            <StartServer router={router} />
          </EmotionThemeProvider>
        </ColorModeProvider>,
        {
          signal: request.signal,
        },
      );

      if (isbot(request.headers.get('User-Agent'))) {
        await stream.allReady;
      }

      return stream;
    }

    if (typeof ReactDOMServer.renderToPipeableStream === 'function') {
      const passthrough = new PassThrough();

      const pipeable = ReactDOMServer.renderToPipeableStream(
        <ColorModeProvider initial="dark">
          <EmotionThemeProvider theme={createTheme('dark')}>
            <StartServer router={router} />
          </EmotionThemeProvider>
        </ColorModeProvider>,
        {
          ...(isbot(request.headers.get('User-Agent'))
            ? {
                onAllReady() {
                  pipeable.pipe(passthrough);
                },
              }
            : {
                onShellReady() {
                  pipeable.pipe(passthrough).pipe(renderStylesToNodeStream());
                },
                bootstrapModules: [clientManifest.inputs[clientManifest.handler].output.path],
                bootstrapScriptContent: `window.manifest = ${JSON.stringify(clientManifest?.json())}`,
              }),
          onShellError(err) {
            throw err;
          },
        },
      );

      return passthrough;
    }
  })();

  // Add our Router transform to the stream
  const transforms = [transformStreamWithRouter(router)];

  if (stream) {
    const transformedStream = transforms.reduce((stream, transform) => (stream as any).pipe(transform), stream);

    return new Response(transformedStream as BodyInit, {
      status: router.state.statusCode,
      headers: responseHeaders,
    });
  }

  throw new Error(
    'No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.',
  );
};
