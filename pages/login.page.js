let baseElementLocator = by.css('#login_form');
let emailFieldLocator = by.css('#email');
let passwordFieldLocator = by.css('#passwd');
let signinBtnLocator = by.css('#SubmitLogin');
let alertLocator = by.css('#center_column>.alert');

class LoginPage { // todo <- exted web page and remove waitForPageLoaded
    constructor() {
    }

    async waitForPageLoaded() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getBaseElement()), 5000);
    }

    async typeEmail(){
        await this.getEmailFieldElement().sendKeys(browser.params.email);
    }

    async typePassword(password){
        await this.getPasswordFieldElement().sendKeys(password);
    }

    async navigateToAccount() {
        await this.getSigninBtnElement().click();
    }

    async alertIsVisible() {
        await this.getAlertBlock().isDisplayed();
    }

    getBaseElement() { // todo <- create a web view element class
        return element(baseElementLocator);
    }
    
    getEmailFieldElement() { // todo <- create a text input element class
        return element(emailFieldLocator);
    }

    getPasswordFieldElement() {// todo <- create a text input element class 
        return element(passwordFieldLocator);
    }

    getSigninBtnElement() {// todo <- link with button element class
        return element(signinBtnLocator);
    }   

    getAlertBlock() {// todo <- create a web view element class
        return element(alertLocator);
    }
}

module.exports = new LoginPage();