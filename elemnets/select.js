let WebElement = require("../base/webElement");

let { WebButton }  = require("../elemnets/button");


class WebSelect extends WebElement {
    async open() {
        this.click();
    }

    async selectOption(optionName) {
        await this.open();
        let optionLocator = by.xpath(`//option[text() = "${optionName}"]`);
        await new WebButton(element(optionLocator), `${optionName} option`).click();
    }
}

module.exports = { WebSelect };