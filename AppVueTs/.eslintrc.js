/* eslint-disable no-magic-numbers, max-lines, id-length */

/*
 * ESLint rules: https://eslint.org/docs/rules/
 * Typescript rules: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */

module.exports = {
    env: { node: true },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
    ],
    globals: {
        NeptingInterface: "readonly",
        PaxInterface: "readonly",
        VitajourInterface: "readonly",
        ZebraInterface: "readonly",
    },
    ignorePatterns: ["dist/"],
    overrides: [
        {
            extends: [
                "plugin:vue/essential",
                "eslint:recommended",
                "@vue/typescript/recommended",
                "@vue/prettier",
                "@vue/prettier/@typescript-eslint",
            ],
            files: ["*.ts", "*.vue"],
            parserOptions: { project: "./tsconfig.json" },
            rules: {
                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/array-type": [
                    "error",
                    { default: "array" },
                ],
                "@typescript-eslint/await-thenable": "error",
                "@typescript-eslint/ban-ts-comment": [
                    "error",
                    {
                        "ts-check": false,
                        "ts-expect-error": false,
                        "ts-ignore": true,
                        "ts-nocheck": true,
                    },
                ],
                "@typescript-eslint/ban-tslint-comment": "error",
                "@typescript-eslint/ban-types": "error",
                "@typescript-eslint/brace-style": "off",
                "@typescript-eslint/class-literal-property-style": [
                    "error",
                    "fields",
                ],
                "@typescript-eslint/comma-spacing": "off",
                "@typescript-eslint/consistent-type-assertions": [
                    "error",
                    {
                        assertionStyle: "as",
                        objectLiteralTypeAssertions: "never",
                    },
                ],
                "@typescript-eslint/consistent-type-definitions": [
                    "error",
                    "interface",
                ],
                "@typescript-eslint/default-param-last": "error",
                "@typescript-eslint/dot-notation": "error",
                "@typescript-eslint/explicit-function-return-type": [
                    "error",
                    {
                        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
                        allowExpressions: false,
                        allowHigherOrderFunctions: false,
                        allowTypedFunctionExpressions: false,
                    },
                ],
                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    { accessibility: "explicit" },
                ],
                "@typescript-eslint/explicit-module-boundary-types": [
                    "error",
                    {
                        allowArgumentsExplicitlyTypedAsAny: false,
                        allowDirectConstAssertionInArrowFunctions: false,
                        allowedNames: [],
                        allowHigherOrderFunctions: false,
                        allowTypedFunctionExpressions: false,
                    },
                ],
                "@typescript-eslint/func-call-spacing": "off",
                "@typescript-eslint/indent": "off",
                "@typescript-eslint/init-declarations": "error",
                "@typescript-eslint/keyword-spacing": "off",
                "@typescript-eslint/lines-between-class-members": [
                    "error",
                    "always",
                    { exceptAfterSingleLine: true },
                ],
                "@typescript-eslint/member-delimiter-style": "off",
                "@typescript-eslint/member-ordering": [
                    "error",
                    {
                        default: {
                            memberTypes: [
                                "signature",
                                "public-static-field",
                                "protected-static-field",
                                "private-static-field",
                                "public-decorated-field",
                                "protected-decorated-field",
                                "private-decorated-field",
                                "public-instance-field",
                                "protected-instance-field",
                                "private-instance-field",
                                "public-abstract-field",
                                "protected-abstract-field",
                                "private-abstract-field",
                                "public-field",
                                "protected-field",
                                "private-field",
                                "static-field",
                                "instance-field",
                                "abstract-field",
                                "decorated-field",
                                "field",
                                "public-constructor",
                                "protected-constructor",
                                "private-constructor",
                                "constructor",
                                "public-static-method",
                                "protected-static-method",
                                "private-static-method",
                                "public-decorated-method",
                                "protected-decorated-method",
                                "private-decorated-method",
                                "public-instance-method",
                                "protected-instance-method",
                                "private-instance-method",
                                "public-abstract-method",
                                "protected-abstract-method",
                                "private-abstract-method",
                                "public-method",
                                "protected-method",
                                "private-method",
                                "static-method",
                                "instance-method",
                                "abstract-method",
                                "decorated-method",
                                "method",
                            ],
                            order: "alphabetically",
                        },
                    },
                ],
                "@typescript-eslint/method-signature-style": [
                    "error",
                    "method",
                ],
                "@typescript-eslint/naming-convention": [
                    "error",
                    { format: ["camelCase"], selector: "default" },
                    {
                        format: ["camelCase"],
                        leadingUnderscore: "require",
                        modifiers: ["private"],
                        selector: "property",
                    },
                    {
                        format: ["PascalCase"],
                        prefix: ["is", "should", "has", "can", "did", "will"],
                        selector: "variable",
                        types: ["boolean"],
                    },
                    {
                        format: ["UPPER_CASE"],
                        modifiers: ["const"],
                        selector: "variable",
                        types: ["boolean", "string", "number"],
                        // TODO: types: ["string", "number"],
                    },
                    /*
                     * {
                     *     format: ["UPPER_CASE"],
                     *     modifiers: ["const"],
                     *     prefix: ["IS_", "SHOULD_", "HAS_", "CAN_", "DID_", "WILL_"],
                     *     selector: "variable",
                     *     types: ["boolean"],
                     * },
                     */
                    {
                        format: ["PascalCase"],
                        prefix: ["I"],
                        selector: "interface",
                    },
                    { format: ["PascalCase"], selector: "class" },
                    { format: ["PascalCase"], selector: "typeParameter" },
                    { format: ["PascalCase"], prefix: ["E"], selector: "enum" },
                    { format: ["PascalCase"], selector: "enumMember" },
                ],
                "@typescript-eslint/no-array-constructor": "error",
                "@typescript-eslint/no-base-to-string": "error",
                "@typescript-eslint/no-confusing-non-null-assertion": "error",
                "@typescript-eslint/no-dupe-class-members": "error",
                "@typescript-eslint/no-dynamic-delete": "error",
                "@typescript-eslint/no-empty-function": "error",
                "@typescript-eslint/no-empty-interface": [
                    "error",
                    { allowSingleExtends: true },
                ],
                "@typescript-eslint/no-explicit-any": [
                    "warn",
                    { fixToUnknown: false, ignoreRestArgs: false },
                ],
                "@typescript-eslint/no-extra-non-null-assertion": "error",
                "@typescript-eslint/no-extra-parens": "off",
                "@typescript-eslint/no-extra-semi": "off",
                "@typescript-eslint/no-extraneous-class": [
                    "error",
                    {
                        allowConstructorOnly: false,
                        allowEmpty: false,
                        allowStaticOnly: false,
                        allowWithDecorator: false,
                    },
                ],
                "@typescript-eslint/no-floating-promises": [
                    "error",
                    { ignoreIIFE: false, ignoreVoid: false },
                ],
                "@typescript-eslint/no-for-in-array": "error",
                "@typescript-eslint/no-implied-eval": "error",
                "@typescript-eslint/no-inferrable-types": "error",
                "@typescript-eslint/no-invalid-this": "error",
                "@typescript-eslint/no-invalid-void-type": [
                    "error",
                    { allowInGenericTypeArguments: ["Promise"] },
                ],
                "@typescript-eslint/no-loss-of-precision": "error",
                "@typescript-eslint/no-magic-numbers": [
                    "error",
                    {
                        detectObjects: true,
                        enforceConst: true,
                        ignore: [0, 1, -1],
                        ignoreEnums: true,
                        ignoreNumericLiteralTypes: false,
                        ignoreReadonlyClassProperties: false,
                    },
                ],
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-misused-promises": "error",
                "@typescript-eslint/no-namespace": "error",
                "@typescript-eslint/no-non-null-asserted-optional-chain":
                    "error",
                "@typescript-eslint/no-non-null-assertion": "error",
                "@typescript-eslint/no-parameter-properties": "error",
                "@typescript-eslint/no-require-imports": "error",
                "@typescript-eslint/no-this-alias": "error",
                "@typescript-eslint/no-throw-literal": "error",
                "@typescript-eslint/no-type-alias": "error",
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
                    "error",
                    {
                        allowComparingNullableBooleansToFalse: false,
                        allowComparingNullableBooleansToTrue: false,
                    },
                ],
                "@typescript-eslint/no-unnecessary-condition": "error",
                "@typescript-eslint/no-unnecessary-qualifier": "error",
                "@typescript-eslint/no-unnecessary-type-arguments": "error",
                "@typescript-eslint/no-unnecessary-type-assertion": "error",
                "@typescript-eslint/no-unsafe-assignment": "error",
                "@typescript-eslint/no-unsafe-call": "error",
                "@typescript-eslint/no-unsafe-member-access": "error",
                "@typescript-eslint/no-unsafe-return": "error",
                "@typescript-eslint/no-unused-expressions": "error",
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    { varsIgnorePattern: "_|(UNUSED)" },
                ],
                /*
                 * FIXME: Crash when enabled. Problem in v-note.vue
                 * "@typescript-eslint/no-unused-vars-experimental": [
                 *     "error",
                 *     {
                 *         ignoreArgsIfArgsAfterAreUsed: false,
                 *         ignoredNamesRegex: "",
                 *     },
                 * ],
                 */
                "@typescript-eslint/no-use-before-define": [
                    "error",
                    { enums: true, typedefs: true },
                ],
                "@typescript-eslint/no-useless-constructor": "error",
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/prefer-as-const": "error",
                "@typescript-eslint/prefer-enum-initializers": "error",
                "@typescript-eslint/prefer-for-of": "error",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/prefer-includes": "error",
                "@typescript-eslint/prefer-literal-enum-member": "error",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/prefer-nullish-coalescing": [
                    "error",
                    {
                        ignoreConditionalTests: false,
                        ignoreMixedLogicalExpressions: false,
                    },
                ],
                "@typescript-eslint/prefer-optional-chain": "error",
                "@typescript-eslint/prefer-readonly": "error",
                "@typescript-eslint/prefer-readonly-parameter-types": "off",
                "@typescript-eslint/prefer-reduce-type-parameter": "error",
                "@typescript-eslint/prefer-regexp-exec": "error",
                "@typescript-eslint/prefer-string-starts-ends-with": "error",
                "@typescript-eslint/prefer-ts-expect-error": "error",
                "@typescript-eslint/promise-function-async": "error",
                "@typescript-eslint/quotes": "off",
                "@typescript-eslint/require-array-sort-compare": "error",
                "@typescript-eslint/require-await": "error",
                "@typescript-eslint/restrict-plus-operands": [
                    "error",
                    { checkCompoundAssignments: true },
                ],
                "@typescript-eslint/restrict-template-expressions": [
                    "error",
                    {
                        allowAny: false,
                        allowBoolean: false,
                        allowNullish: false,
                        allowNumber: true,
                    },
                ],
                "@typescript-eslint/return-await": ["error", "in-try-catch"],
                "@typescript-eslint/semi": "off",
                "@typescript-eslint/space-before-function-paren": "off",
                "@typescript-eslint/strict-boolean-expressions": [
                    "error",
                    {
                        allowAny: false,
                        allowNullableBoolean: false,
                        allowNullableNumber: false,
                        allowNullableObject: true,
                        allowNullableString: false,
                        allowNumber: false,
                        allowString: false,
                    },
                ],
                "@typescript-eslint/switch-exhaustiveness-check": "error",
                "@typescript-eslint/triple-slash-reference": "error",
                "@typescript-eslint/type-annotation-spacing": "off",
                "@typescript-eslint/typedef": "off",
                "@typescript-eslint/unbound-method": "error",
                "@typescript-eslint/unified-signatures": "error",

                "no-magic-numbers": "off",
                "no-shadow": "off",
                "require-await": "off",
            },
        },
        {
            files: ["*.vue"],
            rules: {
                // TODO: Make the vue file the least custom as possible
                "class-methods-use-this": "off",
                "max-lines": ["error", 1000],
            },
        },
    ],
    parserOptions: { ecmaVersion: 2020 },
    root: true,
    rules: {
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "always"],
        "arrow-spacing": ["error", { after: true, before: true }],
        "block-scoped-var": "error",
        "camelcase": "error",
        "capitalized-comments": "warn",
        "class-methods-use-this": "error",
        "complexity": ["error", 10],
        "consistent-return": "error",
        "consistent-this": ["error", "that"],
        "constructor-super": "error",
        "curly": "error",
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eqeqeq": "error",
        "for-direction": "error",
        "func-name-matching": "warn",
        "func-names": "error",
        "func-style": ["error", "declaration", { allowArrowFunctions: true }],
        "generator-star-spacing": ["error", { after: false, before: true }],
        "getter-return": "error",
        "grouped-accessor-pairs": ["error", "getBeforeSet"],
        "guard-for-in": "error",
        "id-denylist": 0,
        "id-length": [
            "error",
            { exceptions: ["i", "j", "x", "y", "_"], max: 32, min: 2 },
        ],
        "id-match": "off",
        "init-declarations": "error",
        "line-comment-position": "warn",
        "lines-between-class-members": [
            "error",
            "always",
            { exceptAfterSingleLine: true },
        ],
        "max-classes-per-file": ["error", 1],
        "max-depth": ["error", 4],
        "max-lines": ["error", 200],
        "max-lines-per-function": [
            "error",
            { max: 25, skipBlankLines: true, skipComments: true },
        ],
        "max-nested-callbacks": ["error", 1],
        "max-params": ["error", 5],
        "max-statements": ["error", 20],
        "max-statements-per-line": ["error", { max: 1 }],
        "multiline-comment-style": ["warn", "starred-block"],
        "new-cap": [
            "error",
            {
                capIsNewExceptionPattern:
                    "(Action|Component|Model|Module|Mutation|Prop|Ref|State|Watch|Getter)",
            },
        ],
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "warn",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "error",
        "no-console": "off",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-constructor-return": "error",
        "no-continue": "warn",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-else-return": ["error", { allowElseIf: false }],
        "no-empty": "warn",
        "no-empty-character-class": "error",
        "no-empty-function": "error",
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "error",
        "no-extra-parens": "off",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-inline-comments": "warn",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-loss-of-precision": "error",
        "no-magic-numbers": [
            "error",
            { detectObjects: true, enforceConst: true, ignore: [0, 1, -1] },
        ],
        "no-misleading-character-class": "error",
        "no-multi-assign": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-plusplus": "error",
        "no-promise-executor-return": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-exports": "off",
        "no-restricted-globals": "error",
        "no-restricted-imports": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": [
            "error",
            "WithStatement",
            "BinaryExpression[operator='in']",
        ],
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-setter-return": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-ternary": "off",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-undefined": "warn",
        "no-underscore-dangle": ["warn", { allowAfterThis: true }],
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-unused-vars": ["error", { varsIgnorePattern: "_|(UNUSED)" }],
        "no-use-before-define": "error",
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": ["error", { enforceForClassMembers: true }],
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "warn",
        "no-with": "error",
        "object-shorthand": "error",
        "one-var": ["error", "never"],
        "operator-assignment": ["error", "always"],
        "padding-line-between-statements": 0,
        "prefer-arrow-callback": [
            "error",
            { allowNamedFunctions: false, allowUnboundThis: false },
        ],
        "prefer-const": "error",
        "prefer-destructuring": ["error", { array: false, object: true }],
        "prefer-exponentiation-operator": 0,
        "prefer-named-capture-group": "warn",
        "prefer-numeric-literals": "error",
        "prefer-object-spread": 0,
        "prefer-promise-reject-errors": ["error", { allowEmptyReject: false }],
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "radix": "error",
        "require-atomic-updates": "warn",
        "require-await": "error",
        "require-unicode-regexp": "off",
        "require-yield": "error",
        "rest-spread-spacing": ["error", "never"],
        "sort-imports": [
            "error",
            {
                allowSeparatedGroups: false,
                ignoreCase: true,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "single", "multiple"],
            },
        ],
        "sort-keys": [
            "error",
            "asc",
            { caseSensitive: false, minKeys: 2, natural: true },
        ],
        "sort-vars": ["error", { ignoreCase: false }],
        "spaced-comment": ["error", "always"],
        "strict": ["error", "global"],
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        "vars-on-top": "error",
        "wrap-iife": ["error", "inside"],
        "yield-star-spacing": ["error", { after: true, before: false }],
        "yoda": "error",
    },
};
