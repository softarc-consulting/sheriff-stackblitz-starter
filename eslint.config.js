// @ts-check
const tseslint = require("typescript-eslint");
import sheriff from '@softarc/eslint-plugin-sheriff'
module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [sheriff.configs.all],
  },
);
