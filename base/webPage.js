class WebPage {
    constructor() {
    }

    async open(url) {
        await browser.get(url);
    }

    async waitForPageLoaded() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getBaseElement().protractorElement), 10000);
    }

}

module.exports = WebPage;