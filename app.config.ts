import { defineConfig } from '@tanstack/start/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  deployment: {
    preset: 'node-server',
    static: false,
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
    plugins: () => [
      svgr({ include: '**/*.svg' }),
      vanillaExtractPlugin(),
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
});
