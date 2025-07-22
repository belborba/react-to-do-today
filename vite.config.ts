// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        replaceAttrValues: {
          "#000": "currentColor",
          "#fff": "currentColor",
          "#18181B": "currentColor",
        },
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "addAttributesToSVGElement",
              params: {
                attributes: [{ fill: "currentColor" }],
              },
            },
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  base: "/react-to-do-today/",
});
