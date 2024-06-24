/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import viteReact from "@vitejs/plugin-react"; Causes problems apperently because it acts like react...
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const isTest = process.env.NODE_ENV === "test";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteReact(), // Guide says to use this, but it's problematic and apparently not needed according to the example repo...
    !isTest && TanStackRouterVite(),
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    include: ["src/**/*.test.tsx", "src/**/*.test.ts"],
  },
});
