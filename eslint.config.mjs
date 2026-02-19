import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    plugins: ['vue', '@typescript-eslint', 'stylelint'],
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:stylelint/recommended' // Stylelintのルールも適用
    ],
    rules: {
      'indent': ['error', 2, { SwitchCase: 1 }], // スペース2つのインデント
      'no-console': 'off',
      'no-unused-vars': 'warn',
    },
    overrides: [
      {
        files: ['*.vue'],
        rules: {
          'vue/html-indent': ['error', 2],
          'indent': ['error', 2, { SwitchCase: 1 }]
        },
      },
    ],
  }
)
