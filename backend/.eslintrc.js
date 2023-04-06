module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "overrides": [{
    "files": ".prettierrc",
    "options": { "parser": "json" }
  }],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "semi": ["warn", "always"],
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "no-multiple-empty-lines": "error",
  }
};
