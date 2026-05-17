import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import importX from 'eslint-plugin-import-x'
import tseslint from 'typescript-eslint'

const styleRules = {
  '@stylistic/semi': ['error', 'never'],
  '@stylistic/quotes': ['error', 'single'],
  '@stylistic/comma-dangle': ['error', 'only-multiline'],
  '@stylistic/array-bracket-spacing': ['error', 'always', {
    singleValue: false,
    objectsInArrays: false,
    arraysInArrays: false,
  }],
  '@stylistic/object-curly-spacing': ['error', 'always'],
  'import-x/order': ['error', {
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    alphabetize: {
      order: 'asc',
      caseInsensitive: true,
    },
  }],
}

export default tseslint.config(
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    extends: [...tseslint.configs.recommended],
  },
  {
    plugins: {
      '@stylistic': stylistic,
      'import-x': importX,
    },
    rules: styleRules,
  },
)
