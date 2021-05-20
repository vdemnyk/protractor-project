const { browser } = require("protractor");
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

    async check() {
        console.log('Checking checkbox');
        let checked = await this.protractorElement.isSelected();
        if(!checked){
            await this.protractorElement.click();
        }
    }

}

module.exports = { WebTextInput };