import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import path from 'path';

export default defineConfig({
  plugins: [react(), wasm(), topLevelAwait()],
  server: {
    fs: {
      // Allow serving files from project root and specific files
      allow: [
        path.resolve(__dirname, '.'),
        "plutus.json",
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules'),
      ],
    },
  },
  resolve: {
    alias: {
      // Add any path aliases if needed
      '@': path.resolve(__dirname, './src'),
    },
  },
});
