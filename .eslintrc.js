module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react', 
    '@typescript-eslint', 
    'prettier', 
    'import',
    'boundaries',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'boundaries/elements': [
      { 'type': 'common', 'pattern': './src/common/*' },
      { 'type': 'features', 'pattern': './src/features/*' },
      { 'type': 'app', 'pattern': './src/app' },
    ]
  },
  ignorePatterns: [
    '.eslintrc.js',
    '.prettierrc.js',
    'babel.config.js',
    'metro.config.js',
    'jest.config.js'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/style-prop-object': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-no-useless-fragment': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 2,
    'import/order': [2, {
      'newlines-between': 'always',
      alphabetize: { order: 'asc', caseInsensitive: true },
      pathGroups: [
        {
          pattern: '{react,react-native}',
          group: 'external',
          position: 'before',
        },
        {
          pattern: '@/**',
          group: 'external',
          position: 'after',
        },
      ],
      groups: [['builtin', 'external'], 'parent', 'sibling', 'index'],
      pathGroupsExcludedImportTypes: ['builtin'],
    }],
    'no-restricted-exports': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'boundaries/element-types': [2, {
      'default': 'disallow',
      'rules': [
        {
          'from': 'features',
          'allow': ['common'],
        },
        {
          'from': 'common',
          'allow': ['common'],
        },
        {
          'from': 'app',
          'allow': ['common', 'features', 'app'],
        },
      ]}
    ],

    'import/no-named-as-default-member': 0,

    'no-restricted-imports': [
      'error',
      {
        patterns: ['..*'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
