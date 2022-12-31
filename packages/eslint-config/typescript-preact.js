module.exports = {
    env: {
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'preact',
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
            },
        ],
        'no-duplicate-imports': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: true,
        },
    },
};
