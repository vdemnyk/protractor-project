const mainPage = require('../pages/main.page');
const loginPage = require('../pages/login.page');
const accountPage = require('../pages/account.page');
const categoryPage = require('../pages/category.page');
const cartPage = require('../pages/cart.page');
const shippingPage = require('../pages/shipping.page');
const paymentPage = require('../pages/payment.page');
const checkPaymentPage = require('../pages/checkPayment.page');
const orderConfirmationPage = require('../pages/orderConfirmation.page');

describe('Add to cart and buy functionalities:', () => {
  it('Add to cart and buy', async () => {
    await mainPage.open();
    await mainPage.waitForPageLoaded();
    await mainPage.navigateToLogin();

    await loginPage.waitForPageLoaded();
    await loginPage.login(browser.params.email, browser.params.password);

    await accountPage.waitForPageLoaded();
    await accountPage.hoverTab('Women');
    await accountPage.clickTshirtLink();

    await categoryPage.waitForPageLoaded();
    await categoryPage.clickListView();
    await categoryPage.clickAddToCart();
    await categoryPage.cartModalWindowIsOpened();
    await categoryPage.clickCheckout();

    await cartPage.waitForPageLoaded();
    await cartPage.typeQuantity(2);
    expect(await cartPage.checkQuantity()).toBe(true);
    await cartPage.clickCheckoutTwice();

    await shippingPage.waitForPageLoaded();
    await shippingPage.checkTermsCheckbox();
    await shippingPage.clickCheckout();

    await paymentPage.waitForPageLoaded();
    await paymentPage.clickPayByCheck();

    await checkPaymentPage.waitForPageLoaded();
    await checkPaymentPage.clickConfirmOrder();

    await orderConfirmationPage.waitForPageLoaded();
  });
});