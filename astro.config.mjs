import { defineConfig } from 'astro/config';

export default defineConfig({
  site: "https://jbloca.github.io/LandingIngCivil/",
  base: "LandingIngCivil",
  output: 'static',
  build: {
    outDir: './dist',
  },
});