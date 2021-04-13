let baseElementLocator = by.css('.info-account');
let signoutFieldLocator = by.css('.logout');

class AccountPage { // todo <- exted web page and remove waitForPageLoaded
    constructor() {
    }

    async waitForPageLoaded() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getBaseElement()), 5000);
    }

    async logout() {
        await this.getSignoutFieldLocator().click();
    }

    getBaseElement() {
        return element(baseElementLocator);
    }

    getSignoutFieldLocator() {
        return element(signoutFieldLocator);
    }
}

module.exports = new AccountPage();