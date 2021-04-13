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
}

module.exports = WebElement;