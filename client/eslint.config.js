import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { 
    languageOptions: { 
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    }, 
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "no-unused-vars": "warn",
      "comma-dangle": ["warn", {
        "objects": "only-multiline",
        "arrays": "only-multiline",
        "functions": "only-multiline",
      }],
      "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
      "space-before-function-paren": ["warn", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }],
      "keyword-spacing": ["error", {"before": true}],
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
