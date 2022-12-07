import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  envDir: '../',
  envPrefix: ['FES', 'SCOS', 'STORE'],
  build: {
    lib: {
      entry: '../server/render.ts',
      formats: ['iife'],
      name: 'storefront',
    },
    emptyOutDir: true,
    outDir: '../dist/server',
    ssr: '../server/render.ts',
  },
  ssr: {
    noExternal: true,
  },
});
