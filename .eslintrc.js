module.exports =  {
    parser:  "@typescript-eslint/parser",  // Specifies the ESLint parser
    extends:  [
        "plugin:@typescript-eslint/recommended",  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  "module",  // Allows for the use of imports
    },
    rules:  {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "comma-dangle": "warn",
        "eol-last": "warn",
        "quotes": ["error", "double", {"allowTemplateLiterals": true}],
        "semi": ["warn", "always"],
        "space-infix-ops": "error",
        "spaced-comment": ["warn", "always"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off"
    },
};
