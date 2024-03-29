let config = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:vue/base",
    "plugin:vue/vue3-essential",
  ],
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars": "error",
    "vue/no-multiple-template-root": "warn",
    "vue/multi-word-component-names": "off",
  },
  globals: {
    test: true,
    vi: true,
  },
};

module.exports = config;
