import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";
import * as dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "static/js",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (/eot|ttf|woff/i.test(extType)) {
            extType = "fonts/" + extType;
          }
          return `companies-static/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "companies-static/js/[name]-[hash].js",
        entryFileNames: "companies-static/js/[name]-[hash].js",
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    "process.env": process.env,
  },
});
