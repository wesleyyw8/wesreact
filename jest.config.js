module.exports = {
  verbose: true,
  'collectCoverageFrom': [
    'client/actions/actionCreators.js',
    'client/components/*-connectors.js',
    'client/reducers/**.*.js',
    '!**/node_modules/**'
  ]
};