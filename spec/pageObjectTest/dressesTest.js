var Dresses = require(pageObjectDir + "/dresses.js");
var DressesGallery = require(pageObjectDir + "/dressesGallery.js");

var dresses = new Dresses();
var dressesGallery = new DressesGallery();

beforeAll( function () {
    browser.get(dressesGallery.URL);
});

var data = {
    "dress1": {
        "selector": dressesGallery.dress1,
        "name": "Printed Dress",
        "price": "$26.00"
    },
    "dress2": {
        "selector": dressesGallery.dress2,
        "name": "Printed Dress",
        "price": "$50.99"
    },
    "dress3": {
        "selector": dressesGallery.dress3,
        "name": "Printed Summer Dress",
        "price": "$28.98"
    },
    "dress4": {
        "selector": dressesGallery.dress4,
        "name": "Printed Summer Dress",
        "price": "$30.50"
    },
    "dress5": {
        "selector": dressesGallery.dress5,
        "name": "Printed Chiffon Dress",
        "price": "$16.40"
    }
}

describe('Dresses check tests', function () {
    using(data, function (dress) {
        it('select dress', function () {
            dress.selector.click();
            expect(dresses.name.getText()).toEqual(dress.name);
        });
        it('select dress', function () {
            expect(dresses.price.getText()).toEqual(dress.price);
            browser.navigate().back();
        });
    });
});    