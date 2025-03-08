module.exports = {
    root: true,
    extends: '@react-native',
    rules: {
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
            node: {
                paths: ['src'],
            },
        },
    },
};
