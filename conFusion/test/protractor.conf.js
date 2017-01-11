exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    'e2e/*.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },

  // must use the same port number as the gulp watch is configured !!
  baseUrl: 'http://localhost:3001/',

  framework: 'jasmine',
    directConnect: true, // so no selenium required !

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
