import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: '/LandingIngCivil', // Cambia esto al nombre de tu repositorio
  build: {
    outDir: './dist',
  },
});
