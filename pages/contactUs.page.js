let WebPage = require("../base/webPage");

let { WebButton } = require("../elements/button");
let { WebTextInput } = require("../elements/textInput");
let { WebView } = require("../elements/view");
let { WebSelect } = require("../elements/select");

let baseElementLocator = by.css('#uniform-id_contact');
let headingDropdownLocator = by.css('#id_contact');
let emailFieldLocator = by.css('#email');
let messageFieldLocator = by.css('#message');
let uploadBtnLocator = by.css('#fileUpload');
let sendBtnLocator = by.css('#submitMessage');
let alertBlockLocator = by.css('.alert');


class ContactUsPage extends WebPage {
    constructor() {
        super();
    }

    async selectHeading(heading) {
        await allure.createStep(`Select "${heading}"`, async () => {
            await this.getHeadingDropdownElement().selectOption(heading);
        })();
    }

    async typeEmail(email) {
        await allure.createStep(`Type "${email}"`, async () => {
            await this.getEmailFieldElement().sendKeys(email);
        })();
    }

    async typeMessage(message) {
        await allure.createStep(`Type "${message}"`, async () => {
            await this.getMessageFieldElement().sendKeys(message);
        })();
    }

    async uploadFile(file) {
        await allure.createStep('Upload file', async () => {
            await this.getUploadBtnElement().sendKeys(file);
        })();
    }

    async clickSend() {
        await allure.createStep('Click "Send" button', async () => {
            await this.getSendBtnElement().click();
        })();
    }

    async checkAlertText() {
        return await this.getAlertBlockElement().getText();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "ContactUsPage Base");
    }

    getHeadingDropdownElement() {
        return new WebSelect(element(headingDropdownLocator), "Heading Dropdown");
    }

    getEmailFieldElement() {
        return new WebTextInput(element(emailFieldLocator), "Email Field");
    }

    getMessageFieldElement() {
        return new WebTextInput(element(messageFieldLocator), "Message Field");
    }

    getUploadBtnElement() {
        return new WebTextInput(element(uploadBtnLocator), "Upload File Button");
    }

    getSendBtnElement() {
        return new WebButton(element(sendBtnLocator), "Send Button");
    }

    getAlertBlockElement() {
        return new WebView(element(alertBlockLocator), "Alert Block");
    }
}

module.exports = new ContactUsPage();