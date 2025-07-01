/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__test__/**/*.test.ts'],
  testResultsProcessor: "jest-sonar-reporter",
  globals: {
    'ts-jest': {
      diagnostics: false,
      isolatedModules: true
    }
  }
};



// /** @type {import('ts-jest').JestConfigWithTsJest} */
// module.exports = {
//   verbose: true,
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   testMatch: ['<rootDir>/**/*.test.ts'],
// };