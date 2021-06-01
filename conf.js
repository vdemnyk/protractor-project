exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
      },
    specs: ['./spec/loginSpec.js','./spec/createAccountSpec.js','./spec/createAccountNegSpec.js','./spec/searchSpec.js', './spec/addToCartSpec.js', './spec/deleteFromCartSpec.js', './spec/contactSupportSpec.js'],
    onPrepare: function(){
        console.log('Start of tests execution');
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        beforeEach(function(){       
            browser.waitForAngularEnabled(false);  
            browser.manage().timeouts().implicitlyWait(15000);
            browser.driver.manage().window().maximize();    
        }); 
        jasmine.getEnv().afterEach(async function(){ 
            const png = await browser.takeScreenshot(); 
            allure.createAttachment('screenshot', Buffer.from(png,'base64'),'image/png'); 
            await browser.restart(); 
        }); 
    },
    params: {
        appUrl: 'http://automationpractice.com/index.php',
        email: 'vik.demnyk@sharklasers.com',
        password: 'vik.demnyk',
        wrongPassword: 'vik.demnyk2'
    }
};