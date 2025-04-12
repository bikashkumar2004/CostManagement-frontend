// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ensures correct asset paths on Vercel
  build: {
    outDir: 'dist', // default, but good to be explicit
    emptyOutDir: true, // clears the folder before building
  },
});