class WebPage {
    constructor() {
    }

    async open(url) {
        await browser.get(url);
    }

    async waitForPageLoaded() {
        await this.getBaseElement().waitForVisible(30000);
    }

}

module.exports = WebPage;