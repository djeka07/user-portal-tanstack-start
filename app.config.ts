import { defineConfig } from '@tanstack/start/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';
import vite from 'vite';

// export default defineConfig({
//   deployment: {
//     preset: 'node-server',
//     static: false,
//     prerender: false,
//   },
//   tsr: {
//     appDirectory: './src',
//     routesDirectory: './src/routes',
//     generatedRouteTree: './src/routeTree.gen.ts',
//   },
//   routers: {
//     client: { entry: './src/client.tsx' },
//     ssr: { entry: './src/ssr.tsx' },
//   },
//   vite: {
//     plugins: (...args) => [
//       svgr({ include: '**/*.svg' }),
//       vanillaExtractPlugin(),
//       tsConfigPaths({
//         projects: ['./tsconfig.json'],
//       }),
//     ],
//   },
// });

export default defineConfig({
  deployment: {
    preset: 'node-server',
  },
  tsr: {
    appDirectory: './src',
    routesDirectory: './src/routes',
    generatedRouteTree: './src/routeTree.gen.ts',
  },
  routers: {
    client: { entry: './src/client.tsx' },
    ssr: { entry: './src/ssr.tsx' },
  },
  vite: {
    ssr: {
      noExternal: ['@djeka07/ui', /\.css$/],
    },
    plugins: () =>
      [
        svgr({ include: '**/*.svg' }),
        vanillaExtractPlugin(),
        tsConfigPaths({
          projects: ['./tsconfig.json'],
        }),
      ] as vite.Plugin<any>[],
  },
});
