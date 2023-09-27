import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@svgs': path.resolve(__dirname, 'svgs'),
      '@fonts': path.resolve(__dirname, 'fonts')
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        post: path.resolve(__dirname, 'post/index.html')
      }
    }
  }
});
