module.exports = {
    extends: ['.eslintrc.js'],
    parserOptions: {
        // disable rules that depend on type information - these would slow down git committing too much, rather rely on PR branch builds for these
        project: null,
    },
    rules: {
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/tslint/config': 'off',
    },
}
