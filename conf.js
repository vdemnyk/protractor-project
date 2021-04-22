exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
      },
    specs: ['./spec/loginSpec.js'],
    onPrepare: function(){
        console.log('Start of tests execution');
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(4000);
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
              allure.createAttachment('Screenshot', function () {
                return new Buffer(png, 'base64')
              }, 'image/png')();
              done();
            });
        });
    },
    params: {
        appUrl: 'http://automationpractice.com/index.php',
        email: 'vik.demnyk@sharklasers.com',
        password: 'vik.demnyk',
        wrongPassword: 'vik.demnyk2'
    }
};