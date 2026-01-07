import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/CVApplication-OdinProject/',
  plugins: [react()],
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
