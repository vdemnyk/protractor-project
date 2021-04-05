exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['spec.js'],
    onPrepare: function(){
        console.log('Start of tests execution');
        browser.waitForAngularEnabled(false);
    },
    params: {
        appUrl: 'http://automationpractice.com/index.php',
        email: 'vik.demnyk@sharklasers.com',
        password: 'vik.demnyk',
        wrongPassword: 'vik.demnyk2'
    }
};