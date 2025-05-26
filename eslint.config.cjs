const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");
const parser = require("astro-eslint-parser");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",
        parserOptions: {},
    },

    extends: compat.extends(
        "eslint:recommended",
        "plugin:astro/recommended",
        "plugin:@typescript-eslint/recommended",

    ),

    rules: {
        semi: ["error", "always"],

        quotes: ["error", "double", {
            "allowTemplateLiterals": true,
        }],

        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-unused-expressions": "off"
    },
}, {
    files: ["**/*.astro"],

    languageOptions: {
        parser: parser,

        parserOptions: {
            parser: "@typescript-eslint/parser",
            extraFileExtensions: [".astro"],
        },
    },

    rules: {
        "@typescript-eslint/no-unused-vars": ["error", { 
            "varsIgnorePattern": "Props",
            "argsIgnorePattern": "Props"
        }]
    },
}, globalIgnores(["**/.vscode/", "**/dist/", ".astro/","**/node_modules/", "**/public/"])]);
