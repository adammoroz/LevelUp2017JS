var TopProductExample = function TopProductExample() {
    this.URL = 'http://automationpractice.com/index.php?id_product=1&controller=product';
    this.description = element(By.css('#short_description_content > p'));
    this.condition = element(By.css('#product_condition > span'));
    this.sizeDropDown = element(By.id('group_1'));
    this.sizeM = element(By.css('#group_1 > option:nth-child(2) '));
    this.cartButton = element(By.css('#add_to_cart > button > span'));
    this.popupImage = element(By.css('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6'));
    this.clickCloseButton = element(By.css('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span'));
    this.cartLink = element(By.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b'));
    this.productPrice = element(By.css('#our_price_display'));


    this.isDescriptionLongerThan = function (minLength) {
        var that = this;
        return new Promise(function (resolve) {
            that.description.getText().then(function (text) {
                resolve(text.length > minLength);
            });
        })
    };

    this.clickSizeM = function () {
        this.sizeDropDown.click();
        this.sizeM.click();
    }

    this.clickCartButtonAfterClosePopup = function () {
        var that = this;
        browser.wait(function () {
            return that.popupImage.isDisplayed()
        }).then(function () {
            that.clickCloseButton.click();
        });
        that.cartLink.click();
    }
}

module.exports = TopProductExample;
