const mainPage = require('../pages/main.page');
const searchPage = require('../pages/search.page');
const productPage = require('../pages/product.page');

describe('Search functionality:', () => {
  it('Search', async () => {
    await mainPage.open();
    await mainPage.waitForPageLoaded();
    await mainPage.search('dress');

    await searchPage.waitForPageLoaded();
    expect(await searchPage.resultIsVisible()).toBe(true);
    expect(await searchPage.checkResultNumber()).toBeGreaterThan(0);
    expect(await searchPage.checkResultText()).toContain('results have been found.');
    await searchPage.clickOnProduct();

    await productPage.waitForPageLoaded();
    expect(await productPage.checkProductName()).toContain('Dress');
  });
});