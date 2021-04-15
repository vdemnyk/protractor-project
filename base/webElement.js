class WebElement {
    constructor(protractorElement, name, value) {
        this.protractorElement = protractorElement;
        this.elementName = name;
        this.value = value;
    }

    async click() {
        console.log(`Click on element "${this.elementName}"`);
        await this.protractorElement.click();
    }

    async getText() {
        return await this.protractorElement.getText();
    }

    async sendKeys(value) {
        console.log(`Typing in ${this.elementName}`);
        await this.protractorElement.sendKeys(value);
    }
}

module.exports = WebElement;