import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      semi: ["off"], // Disable semicolon errors
      "no-extra-semi": "warn", // Warn about unnecessary semicolons
      indent: ["warn", 2], // Warn if indentation is not 2 spaces
      "comma-spacing": ["warn", { before: false, after: true }], // Space after commas
      "space-before-function-paren": ["warn", "always"], // Space before function parentheses
      "object-curly-spacing": ["warn", "always"], // Enforce spacing inside braces
      "array-bracket-spacing": ["warn", "never"], // No spacing inside array brackets
    },
  }
);
