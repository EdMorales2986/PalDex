/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const isTest = process.env.NODE_ENV === "test";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), !isTest && TanStackRouterVite()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    include: ["src/**/*.test.tsx", "src/**/*.test.ts"],
    globals: true,
    coverage: {
      include: ["src/tests/**/*.ts", "src/tests/**/*.tsx"],
      provider: "istanbul",
    },
  },
});
