import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js"; // ✅ Adds JavaScript rules
import prettier from "eslint-config-prettier"; // ✅ Adds Prettier support

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended, // ✅ Base JavaScript rules
  prettier, // ✅ Prettier formatting rules
  ...compat.extends("next/core-web-vitals"), // ✅ Next.js ESLint rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // ✅ Explicitly target JavaScript & TypeScript files
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off", // ✅ Useful for Next.js (React is auto-imported)
      "next/no-html-link-for-pages": "off", // ✅ Avoids unnecessary Next.js warnings
    },
  },
];

export default eslintConfig;
