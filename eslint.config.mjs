// @ts-check
import stylisticTs from '@stylistic/eslint-plugin-ts'
// import parserTs from '@typescript-eslint/parser'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  plugins: {
    '@stylistic/ts': stylisticTs,
  },
  // languageOptions: {
  //   parser: parserTs,
  // },
  rules: {
    '@stylistic/indent': ['error', 2],
    '@stylistic/no-tabs': ['error', { allowIndentationTabs: true }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
    // "prettier/prettier": "error", // Enforce Prettier formatting
    // ... add rules
  },
})
