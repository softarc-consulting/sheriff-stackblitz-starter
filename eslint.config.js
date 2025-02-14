// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const sheriff = require('@softarc/eslint-plugin-sheriff');
const angular = require('angular-eslint');

module.exports = tseslint.config({
  files: ["**/*.ts"],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    ...angular.configs.tsRecommended,
    sheriff.configs.all
  ]}
);
