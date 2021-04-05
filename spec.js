describe('Successful login:', function(){
  it('Open Sign in page', async function(){
    await browser.get(browser.params.appUrl);
    await element(by.css('.login')).click();
    await browser.wait(protractor.ExpectedConditions.urlContains('authentication'));
  });

  it('Set correct credentials', async function(){
    await element(by.css('#email')).sendKeys(browser.params.email);
    await element(by.css('#passwd')).sendKeys(browser.params.password);
  });

  it('Pass authentication and sign out', async function(){
    await element(by.css('#SubmitLogin')).click();
    await browser.wait(protractor.ExpectedConditions.urlContains('my-account'));

    await element(by.css('.logout')).click();
    await browser.wait(protractor.ExpectedConditions.urlContains('authentication'));
  });
});

describe('Unsuccessful login:', function(){
  it('Open Sign in page', async function(){
    await element(by.css('.login')).click();
    await browser.wait(protractor.ExpectedConditions.urlContains('authentication'));
  });

  it('Set incorrect credentials', async function(){
    await element(by.css('#email')).sendKeys(browser.params.email);
    await element(by.css('#passwd')).sendKeys(browser.params.wrongPassword);
  });

  it('Fail authentication', async function(){
    await element(by.css('#SubmitLogin')).click();
    await browser.wait(protractor.ExpectedConditions.urlContains('authentication'));
    await element(by.css('#center_column>.alert')).isPresent();
  });
});