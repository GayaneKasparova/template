module.exports = {
    verbose: true,
    testURL: 'http://localhost/',
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleNameMapper: {
        '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleDirectories: ['node_modules'],
    testPathIgnorePatterns: ['/node_modules/', '/.cache/'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json',
            diagnostics: {
                warnOnly: true,
            },
        },
    },
    collectCoverageFrom: ['**/*.{js,ts,tsx}', '!**/node_modules/**'],
}
