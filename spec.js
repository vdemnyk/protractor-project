describe('Login functionality:', function(){
  it('Successful login', async function(){
    await browser.get(browser.params.appUrl);
    await element(by.css('.login')).click();
    await browser.wait(protractor.ExpectedConditions.urlContains('authentication'));

    await element(by.css('#email')).sendKeys(browser.params.email);
    await element(by.css('#passwd')).sendKeys(browser.params.password);

    await element(by.css('#SubmitLogin')).click();
    await browser.wait(protractor.ExpectedConditions.urlContains('my-account'));

    await element(by.css('.logout')).click();
    await browser.wait(protractor.ExpectedConditions.urlContains('authentication'));
  });

  it('Unsuccessful login', async function(){
    await element(by.css('.login')).click();
    await browser.wait(protractor.ExpectedConditions.urlContains('authentication'));

    await element(by.css('#email')).sendKeys(browser.params.email);
    await element(by.css('#passwd')).sendKeys(browser.params.wrongPassword);

    await element(by.css('#SubmitLogin')).click();
    await browser.wait(protractor.ExpectedConditions.urlContains('authentication'));
    await element(by.css('#center_column>.alert')).isPresent();
  });
});






