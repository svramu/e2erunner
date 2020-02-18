exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 3600000,
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