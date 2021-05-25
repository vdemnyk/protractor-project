class WebPage {
    constructor() {
    }

    async open(url) {
        await browser.get(url);
    }

    async waitForPageLoaded() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getBaseElement().protractorElement), 30000);
    }

}

module.exports = WebPage;