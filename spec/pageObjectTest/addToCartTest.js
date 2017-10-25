var HomePage = require(pageObjectDir + "/homePage.js");
var Women = require(pageObjectDir + "/women.js");
var Tops = require(pageObjectDir + "/tops.js");
var TopProductExample = require(pageObjectDir + "/topProductExample.js");
var Cart = require(pageObjectDir + "/cart.js")

var homePage = new HomePage();
var women = new Women();
var tops = new Tops();
var topProductExample = new TopProductExample();
var cart = new Cart();

var isDescriptionLongerThan = function (isLongerThan) {
    return new Promise(function (resolve) {
        topProductExample.description.getText().then(function (text) {
            resolve(text.length > isLongerThan);
        });
    })
};

describe('AddToCart tests', function () {
    it('open page', function () {
        browser.get(homePage.URL);
    });
    it('should click Women link', function () {
        homePage.womenLink.click();
        expect(browser.getTitle()).toEqual('Women - My Store');
    });
    it('should have a label Women', function () {
        expect(women.womenLabel.getText()).toEqual('WOMEN');
    });
    it('should click Tops link', function () {
        women.topsLink.click();
        expect(browser.getTitle()).toEqual('Tops - My Store');
    });
    it('should have a label Tops', function () {
        expect(tops.topsLabel.getText()).toEqual('TOPS');
    });
    it('should click Tops Product example', function () {
        tops.topsExampleButton.click();
        expect(browser.getTitle()).toEqual('Faded Short Sleeve T-shirts - My Store');
    });
    it('should see min 8length description', function () {
        expect(isDescriptionLongerThan(8)).toBe(true);
    });
    it('condition of Product example should be new', function () {
        expect(topProductExample.condition.getText()).toEqual('New');
        topProductExample.productPrice.getText().then(function (result) {
            price = result;
        });
    });
    it('should click m size on dropdown list', function () {
        topProductExample.sizeDropDown.click();
        topProductExample.sizeM.click();
    });
    it('should click Add to cart button', function () {
        topProductExample.cartButton.click();
    });
    it('should click Cart button', function () {
        topProductExample.popupImage.isDisplayed();
        topProductExample.cartLink.click();
        topProductExample.cartLink.click();
        expect(browser.getTitle()).toEqual('Order - My Store');
    });
    it('should see same product as selected', function () {
        cart.selectedProduct.isDisplayed();
        expect(cart.selectedProduct.getText()).toEqual('Faded Short Sleeve T-shirts');
    });
    it('price on cart should be equal to price of selected product', function () {
        expect(cart.cartPrice.getText()).toEqual(price);
    });
});