module.exports = {
  verbose: true,
  'collectCoverageFrom': [
    'client/actions/actionCreators.js',
    'client/reducers/**',
    '!client/reducers/index.js'
  ],
  moduleNameMapper: {
    '^actions[/](.+)': '<rootDir>/client/actions/$1',
    '^actions': '<rootDir>/client/actions'
  }
};