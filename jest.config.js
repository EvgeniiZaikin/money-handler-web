module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'jest.tsconfig.json',
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js'],
  moduleNameMapper: {
    'components/(.*)': '<rootDir>/components/$1',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
};
