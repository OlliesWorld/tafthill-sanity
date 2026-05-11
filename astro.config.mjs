import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: 'static',
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
    }
  },
  integrations: [
    tailwind({
      config: { path: './tailwind.config.cjs' },
      applyBaseStyles: false,
    }),
  ],
});