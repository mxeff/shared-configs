module.exports = {
    env: {
        browser: true,
        es2022: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    rules: {
        '@typescript-eslint/consistent-type-imports': 'error',
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
                groups: [
                    'index',
                    'sibling',
                    'parent',
                    'internal',
                    'external',
                    'builtin',
                    'object',
                    'type',
                ],
                'newlines-between': 'always',
                warnOnUnassignedImports: true,
            },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: true,
            node: true,
        },
    },
};
