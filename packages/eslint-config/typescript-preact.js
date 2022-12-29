module.exports = {
    env: {
        browser: true,
    },
    extends: [
        './base-typescript',
        'eslint:recommended',
        'preact',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
};
