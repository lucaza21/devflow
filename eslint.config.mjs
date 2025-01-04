import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

// Compatibilidad con configuraciones antiguas
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extiende configuraciones de ESLint
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      //"standard",
      "plugin:tailwindcss/recommended",
      "prettier",
    ],
    // Plugins en el formato correcto
    plugins: ["simple-import-sort"], // Usamos el nombre del plugin directamente en el array
    rules: {
      // Configuración de reglas de orden de imports
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
          ],
          "newlines-between": "always",
          pathGroups: [
            { pattern: "@app/**", group: "internal", position: "after" },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
    ignorePatterns: ["components/ui/**"],
    overrides: [
      {
        files: ["*.ts", "*.tsx"],
        rules: {
          "no-undef": "off",
        },
      },
    ],
  }),
];

export default eslintConfig;
