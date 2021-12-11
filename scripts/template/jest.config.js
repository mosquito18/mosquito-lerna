/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    ".*\\.less$": "<rootDir>/tests/styleMock.js"
  },
  transform: {
    "\\.[jt]sx?$": "babel-jest"
  }
};
