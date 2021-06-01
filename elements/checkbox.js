let WebElement = require("../base/webElement");

class WebCheckbox extends WebElement {
    async check() {
        console.log('Checking checkbox');
        let isChecked = await this.protractorElement.isSelected();
        if(!isChecked){
            await this.protractorElement.click();
        }
    }

    async uncheck() {
        console.log('Unchecking checkbox');
        let isChecked = await this.protractorElement.isSelected();
        if(isChecked){
            await this.protractorElement.click();
        }
    }
}

module.exports = { WebCheckbox };