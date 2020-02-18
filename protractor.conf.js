exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER: false,
  allScriptsTimeout: 500000,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 500000,
  },
  capabilities: {
    'directConnect': true,
    'browserName': 'chrome',
  },
  specs: ['e2erunner.js'],
  params: {
    xlsx: './sample-tests.xlsx',
    sheet: 1,
  },
};