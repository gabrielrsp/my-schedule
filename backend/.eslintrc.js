module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": "standard-with-typescript",
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "project": ["./tsconfig.json"],
    "tsconfigRootDir": __dirname,
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "ignorePatterns": [
    "dist/**",
    "typings.d.ts"
  ],
  "rules": {
    "comma-dangle": [
      "error",
      {
        "functions": "never",
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "exports": "always-multiline",
        "imports": "always-multiline"
      }
    ],
    "no-debugger": "warn",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "indent": "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "ignoredNodes": [
          "FunctionExpression > .params[decorators.length > 0]",
          "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
          "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"
        ]
      }
    ],
    "@typescript-eslint/promise-function-async": [
      "error",
      {
        "allowedPromiseNames": [
          "Thenable"
        ],
        "checkArrowFunctions": false,
        "checkFunctionDeclarations": true,
        "checkFunctionExpressions": true,
        "checkMethodDeclarations": true
      }
    ],
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "curly": [
      "off",
      "multi-line"
    ],    
  }
}
