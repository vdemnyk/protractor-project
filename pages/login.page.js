let WebPage = require("../base/webPage");

let { WebButton } = require("../elemnets/button");
let { WebTextInput } = require("../elemnets/textInput");
let { WebView } = require("../elemnets/view");

let baseElementLocator = by.css('#login_form');
let emailFieldLocator = by.css('#email');
let passwordFieldLocator = by.css('#passwd');
let signinBtnLocator = by.css('#SubmitLogin');
let alertLocator = by.css('#center_column>.alert');


class LoginPage extends WebPage {
    constructor() {
        super();
    }

    async login(email, password) {
        await this.typeEmail(email);
        await this.typePassword(password);
        await this.clickSignIn();
    }

    async typeEmail(email){
        await this.getEmailFieldElement().sendKeys(email);
    }

    async typePassword(password){
        await this.getPasswordFieldElement().sendKeys(password);
    }

    async clickSignIn() {
        await this.getSigninBtnElement().click();
    }

    async alertIsVisible() {
        return await this.getAlertBlock().isDisplayed(); 
    }
    
    async checkAlertText() {
        return await this.getAlertBlock().getText();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "LoginPage Base");
    }
    
    getEmailFieldElement() {
        return new WebTextInput(element(emailFieldLocator), "Email address field");
    }

    getPasswordFieldElement() {
        return new WebTextInput(element(passwordFieldLocator), "Password field");
    }

    getSigninBtnElement() {
        return new WebButton(element(signinBtnLocator), "Sign in Button");
    }   

    getAlertBlock() {
        return new WebView(element(alertLocator), "Alert element");
    }
}

module.exports = new LoginPage();