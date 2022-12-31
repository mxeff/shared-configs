module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
            },
        ],
    },
};
