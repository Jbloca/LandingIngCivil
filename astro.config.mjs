import { defineConfig } from 'astro/config';

export default defineConfig({
  site: "https://jbloca.github.io/LandingIngCivil/",
  base: "/LandingIngCivil",  // Asegúrate de que tenga la barra diagonal al inicio
  output: 'static',
  build: {
    outDir: './dist',
  },
});
