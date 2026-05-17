import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import importX from 'eslint-plugin-import-x'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const qualityRules = {
  eqeqeq: ['error', 'always'],
  'no-var': 'error',
  'prefer-const': 'error',
  'no-console': 'warn',
  'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
}

const styleRules = {
  '@stylistic/semi': ['error', 'never'],
  '@stylistic/quotes': ['error', 'single'],
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/indent': ['error', 2],
  '@stylistic/eol-last': ['error', 'always'],
  '@stylistic/array-bracket-spacing': ['error', 'never'],
  '@stylistic/object-curly-spacing': ['error', 'never'],
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
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      '@stylistic': stylistic,
      'import-x': importX,
    },
    rules: {
      ...qualityRules,
      ...styleRules,
    },
  },
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    extends: [...tseslint.configs.recommended],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
)
