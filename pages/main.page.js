let baseElementLocator = by.css('#homeslider');
let loginBtnLocator = by.css('.login');

class MainPage {
    constructor() {
    }

    async open() {
        await browser.get(browser.params.appUrl);
    }

    async navigateToLogin() {
        await this.getLoginBtnElement().click();
    }

    async waitForPageLoaded() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getBaseElement()), 5000);
    }

    getBaseElement() {
        return element(baseElementLocator);
    }

    getLoginBtnElement() {
        return element(loginBtnLocator);
    }    
}

module.exports = new MainPage;