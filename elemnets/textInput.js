let WebElement = require("../base/webElement");

class WebTextInput extends WebElement{
    async sendKeys(value) {
        console.log(`Typing "${value}" in field ${this.elementName}`);
        await this.protractorElement.sendKeys(value);
    }
}

module.exports = { WebTextInput };