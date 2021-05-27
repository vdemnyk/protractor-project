const mainPage = require('../pages/main.page');
const cartPage = require('../pages/cart.page');

describe('Delete from cart functionality:', () => {
  it('Delete from cart', async () => {
    await mainPage.open();
    await mainPage.waitForPageLoaded();
    await mainPage.addToCart('1');
    await mainPage.addToCart('2');
    await mainPage.addToCart('3');
    await mainPage.hoverCart();
    await mainPage.cartPopupIsOpened();
    expect(await mainPage.checkProductQuantity()).toBe(3);
    await mainPage.deleteFirstCartItem();
    await mainPage.cartPopupIsOpened();
    expect(await mainPage.checkProductQuantity()).toBe(2);
    await mainPage.clickCart();

    await cartPage.waitForPageLoaded();
    expect(await cartPage.checkListItem()).toBe(2);
    await cartPage.deleteLastItem();
    expect(await cartPage.checkListItem()).toBe(1);
    await cartPage.clickLogo();

    await mainPage.waitForPageLoaded();
    expect(await mainPage.checkCartQuantity()).toBe('1');
  });
});