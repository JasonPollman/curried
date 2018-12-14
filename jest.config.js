module.exports = {
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      lines: 99,
      statements: 99,
      functions: 99,
      branches: 99,
    },
  },
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'text-summary',
  ],
  collectCoverageFrom: [
    'packages/**/src/**/*.js',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
