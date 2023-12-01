import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [react()],
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom"],
    },
    build: {
      sourcemap: true,
      outDir: "dist",
      assetsDir: "assets",
    },
    css: {
      devSourcemap: true,
      postcss: {
        plugins: [],
      },
    },
  });
};
