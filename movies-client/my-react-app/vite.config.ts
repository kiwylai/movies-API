import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api/v1/movies": {
        target: process.env.api_base_url || "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
