let WebElement = require("../base/webElement");

class WebTextInput extends WebElement{
    async sendKeys(value) {
        console.log(`Typing "${value}" in field ${this.elementName}`);
        await this.protractorElement.sendKeys(value);
    }

    async clear() {
        console.log('Clearing field');
        await this.protractorElement.clear();
    }
}

module.exports = { WebTextInput };