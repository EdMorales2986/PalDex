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
    include: ["src/**/*.test.tsx", "src/**/*.test.ts"],
    exclude: ["src/**/*.stories.tsx", "src/**/*.stories.ts"],
    globals: true,
    coverage: {
      include: [
        "src/components/atoms/**/*.tsx",
        "src/components/molecules/**/*.tsx",
      ],
      exclude: [
        "src/components/**/*index.tsx",
        "src/components/atoms/**/*.stories.tsx",
        "src/components/molecules/**/*.stories.tsx",
      ],
      provider: "v8",
      reporter: ["text"],
    },
  },
});
