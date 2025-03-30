import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";
import vueParser from "vue-eslint-parser";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

const compat = new FlatCompat();

export default tseslint.config(
  eslintConfigPrettier,
  ...compat.extends("plugin:vue/vue3-recommended", "prettier"),
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    ignores: [
      "**/.*", // すべての隠しファイル・ディレクトリ（例: .git, .vscode, .nuxt など）
      "**/node_modules", // node_modules フォルダを無視
      "./.nuxt", // Next.js のビルドフォルダを無視（例）
    ],
    rules: {
      "vue/valid-template-root": "off",
      "vue/no-multiple-template-root": "off",
    },
  },
  {
    languageOptions: {
      globals: {
        useError: "readonly",
        useState: "readonly",
        useFetch: "readonly",
        useNuxtApp: "readonly",
        useRoute: "readonly",
        definePageMeta: "readonly",
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: { parser: tseslint.parser },
    },
    rules: {
      // https://typescript-eslint.io/rules/naming-convention/
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["strictCamelCase", "UPPER_CASE"],
        },
        {
          selector: "function",
          format: ["strictCamelCase"],
        },
        {
          selector: "interface",
          format: ["StrictPascalCase"],
        },
        {
          selector: "typeAlias",
          format: ["StrictPascalCase"],
        },
        {
          selector: "enum",
          format: ["StrictPascalCase"],
        },
        {
          selector: "enumMember",
          format: ["UPPER_CASE"],
        },
        {
          selector: "method",
          format: ["strictCamelCase"],
        },
        {
          selector: "class",
          format: ["StrictPascalCase"],
        },
      ],
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,vue,ts}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true,
          },
        },
      ],
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    rules: {
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "always",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
      "vue/block-order": [
        "error",
        {
          order: ["template", "script[setup]", "style[scoped]"],
        },
      ],
      "vue/component-name-in-template-casing": [
        "error",
        "kebab-case",
        {
          registeredComponentsOnly: false,
        },
      ],
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off", // 必須ではない場合はオフに
      "vue/no-unused-vars": "warn",
    },
  }
);
