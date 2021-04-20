let WebPage = require("../base/webPage");

let { WebButton } = require("../elemnets/button");
let { WebTextInput } = require("../elemnets/textInput");
let { WebView } = require("../elemnets/view");

let baseElementLocator = by.css('#login_form');
let emailFieldLocator = by.css('#email');
let passwordFieldLocator = by.css('#passwd');
let signinBtnLocator = by.css('#SubmitLogin');
let alertLocator = by.css('#center_column>.alert');


class LoginPage extends WebPage { // todo <- exted web page and remove waitForPageLoaded
    constructor() {
        super();
    }

    async typeEmail(value){
        await this.getEmailFieldElement().sendKeys(value);
    }

    async typePassword(value){
        await this.getPasswordFieldElement().sendKeys(value);
    }

    async navigateToAccount() {
        await this.getSigninBtnElement().click();
    }

    async alertIsVisible() {
        return await this.getAlertBlock().isDisplayed(); 
    }
    
    async checkAlertText() {
        return await this.getAlertBlock().getText();
    }

    getBaseElement() { // todo <- create a web view element class
        return new WebView(element(baseElementLocator));
    }
    
    getEmailFieldElement() { // todo <- create a text input element class
        return new WebTextInput(element(emailFieldLocator), "Email address field");
    }

    getPasswordFieldElement() {// todo <- create a text input element class 
        return new WebTextInput(element(passwordFieldLocator), "Password field");
    }

    getSigninBtnElement() {// todo <- link with button element class
        return new WebButton(element(signinBtnLocator), "Sign in Button");
    }   

    getAlertBlock() {// todo <- create a web view element class
        return new WebView(element(alertLocator), "Alert element");
    }
}

module.exports = new LoginPage();