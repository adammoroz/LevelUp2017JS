var Dresses = require(pageObjectDir + "/dresses.js");
var DressesGallery = require(pageObjectDir + "/dressesGallery.js");

var dresses = new Dresses();
var dressesGallery = new DressesGallery();

beforeAll( function () {
    browser.get(dressesGallery.URL);
});

describe('Dresses check tests', function () {
    using(dresses.data, function (dress) {
        it('select dress', function () {
            dressesGallery.dressesElements.then(function (elements) {
                elements[dress.order].click();
                expect(browser.getTitle()).toEqual(dress.name + ' - My Store');
            });
        });
        it('should have correct name', function () {
            expect(dresses.name.getText()).toEqual(dress.name);
        });
        it('select have correct price', function () {
            expect(dresses.price.getText()).toEqual(dress.price);
            browser.navigate().back();
        });
    });
});