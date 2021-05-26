class WebElement {
    constructor(protractorElement, name) {
        this.protractorElement = protractorElement;
        this.elementName = name;
    }

    async click() {
        console.log(`Click on element "${this.elementName}"`);
        await this.protractorElement.click();
    }

    async getText() {
        return await this.protractorElement.getText();
    }

    async isDisplayed() {
        return await this.protractorElement.isDisplayed();
    }

    async waitForVisible(time = 15000){
        let ec = protractor.ExpectedConditions;
        await browser.wait(ec.visibilityOf(this.protractorElement), time); 
    }

    async mouseHover() {
        await browser.actions().mouseMove(this.protractorElement).perform();
    }

    async isPresent() {
        return await this.protractorElement.isPresent();
    }

    async waitForPresent(time = 15000) {
        let ec = protractor.ExpectedConditions;
        await browser.wait(ec.presenceOf(this.protractorElement), time);
    }
}

module.exports = WebElement;