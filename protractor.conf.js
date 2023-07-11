exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  framework: "custom",
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  exclude: "./node_modules/**",
  specs: "./features/*.feature",

  cucumberOpts: {
    require: ['features/step-definitions/*.js', './hooks.js'],
    format: [require.resolve('cucumber-pretty')],
    tags: ["~disabled"],
    shardTestFiles: true,
    retry: 3
  },

  commonCapabilities: {
    "browserstack.user": process.env.BROWSERSTACK_USERNAME,
    "browserstack.key": process.env.BROWSERSTACK_ACCESS_KEY,
    "build": "CucumberTest",
    "project": "CI/CD Pipelines",
    "browserstack.networkLogs": true,
    "browserstack.debug": true,
    "resolution": "1920x1080",
    "browserstack.idleTimeout": 300,
    "browserstack.selenium_version": "3.141.59"
  },

  multiCapabilities: [{
    "os": "Windows",
    "os_version": "10",
    "browserName": "Edge",
    "browser_version": "latest"
  }, {
    "os": "Windows",
    "os_version": "10",
    "browserName": "Firefox",
    "browser_version": "latest"
  }, {
    "os": "Windows",
    "os_version": "10",
    "browserName": "Chrome",
    "browser_version": "latest"
  }],
};

exports.config.multiCapabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});