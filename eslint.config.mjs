import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Запрещает использование типа 'any' (это одна из самых важных TypeScript-правил)
      '@typescript-eslint/no-explicit-any': 'warn',
      // Требует явно указывать возвращаемый тип для функций
      '@typescript-eslint/explicit-function-return-type': 'warn',
      // Запрещает "висячие" Promise, которые не обрабатываются
      // '@typescript-eslint/no-floating-promises': 'warn',
      //неиспользуемые переменные
      "@typescript-eslint/no-unused-vars": "warn",
      //неиспользуемые логи
      "no-console": "warn",

    }
  }
]);

export default eslintConfig;
