const mainPage = require('../pages/main.page');
const contactUsPage = require('../pages/contactUs.page');

describe('Contact support:', () => {
  it('Contact support', async () => {
    await mainPage.open();
    await mainPage.waitForPageLoaded();
    await mainPage.clickContactUs();

    await contactUsPage.waitForPageLoaded();
    await contactUsPage.selectHeading('Customer service');
    await contactUsPage.typeEmail(browser.params.email);
    await contactUsPage.typeMessage('This is a message');
    await contactUsPage.uploadFile('C:/Users/viktoriia.demnyk/My projects/protractor-project/data/windows.jpg');
    await contactUsPage.clickSend();
    expect(await contactUsPage.checkAlertText()).toBe('Your message has been successfully sent to our team.');
  });
});