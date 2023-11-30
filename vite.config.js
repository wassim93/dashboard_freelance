import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true, // enable CSS source maps during development

    postcss: {
      plugins: [
        // Add any PostCSS plugins you need here
      ],
    },
  },
});
