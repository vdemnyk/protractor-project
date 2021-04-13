let baseElementLocator = by.css('#login_form');
let emailFieldLocator = by.css('#email');
let passwordFieldLocator = by.css('#passwd');
let signinBtnLocator = by.css('#SubmitLogin');
let alertLocator = by.css('#center_column>.alert');

class LoginPage {
    constructor() {
    }

    async waitForPageLoaded() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getBaseElement()), 5000);
    }

    async typeEmail(){
        await this.getEmailFieldElement.sendKeys(browser.params.email);
    }

    async typePassword(password){
        await this.getPasswordFieldElement.sendKeys(password);
    }

    async navigateToAccount() {
        await this.getSigninBtnElement().click();
    }

    async alertIsVisible() {
        await this.getAlertBlock().isPresent();
    }

    getBaseElement() {
        return element(baseElementLocator);
    }
    
    getEmailFieldElement() {
        return element(emailFieldLocator);
    }

    getPasswordFieldElement() {
        return element(passwordFieldLocator);
    }

    getSigninBtnElement() {
        return element(signinBtnLocator);
    }   

    getAlertBlock() {
        return element(alertLocator);
    }
}

module.exports = new LoginPage;