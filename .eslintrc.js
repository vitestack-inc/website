module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "next",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
      "overrides": [
        {
          files: ['**/*.ts', '**/*.tsx'], 
          parser: '@typescript-eslint/parser',
          parserOptions: {
            project: './tsconfig.json',
          },
        },
        {
          env: {
            node: true,
          },
          files: [
            '.eslintrc.{js,cjs}',
          ],
          parserOptions: {
            sourceType: 'script',
          },
        },
      ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "projext": './tsconfig.json',
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // no unused variable
        "@typescript-eslint/no-unused-vars": "error",
        // no unused variable
        "@typescript-eslint/no-unused-expressions": "error",
        // react in jsx / tsx off
        "react/react-in-jsx-scope": "off",

    }
}
