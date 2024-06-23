module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-refresh', 'filenames', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      // Rule for .ts files
      files: ['**/*.ts'],
      rules: {
        // Enforce kebab-case for .ts files
        'filenames/match-regex': [
          2,
          '^[a-z]+(-[a-z]+)*$',
          {
            ignoreMiddleExtensions: true, // Ignore middle extensions in file names
          },
        ],
      },
    },
    {
      // Rule for .tsx files
      files: ['**/*.tsx'],
      rules: {
        // Enforce PascalCase for .tsx files
        'filenames/match-regex': [2, '^[A-Z][a-zA-Z0-9]*$', true],
      },
    },
  ],
};
