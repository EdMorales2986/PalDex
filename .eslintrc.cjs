module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked", // plugin:@typescript-eslint/recommended
    "plugin:@typescript-eslint/stylistic-type-checked", // Watch for this...
    "plugin:storybook/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended", // Watch for this...
    "plugin:react/jsx-runtime", // Watch for this...
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  // Do i even need this...?
  // parserOptions: {
  //   ecmaVersion: "latest",
  //   sourceType: "module",
  //   project: ["./tsconfig.json", "./tsconfig.node.json"],
  //   tsconfigRootDir: __dirname,
  // },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
