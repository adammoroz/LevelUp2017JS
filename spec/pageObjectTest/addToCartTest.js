var HomePage = require(pageObjectDir + "/homePage.js");
var Women = require(pageObjectDir + "/women.js");
var Tops = require(pageObjectDir + "/tops.js");
var TopsProductExample = require(pageObjectDir + "/topProductExample.js");

var homePage = new HomePage();
var women = new Women();
var tops = new Tops();
var topProductExample = new TopsProductExample();

describe('ContuctUs tests', function () {
    it('open page', function () {
        browser.waitForAngularEnabled(false);
        browser.get(homePage.URL);
    });
    it('should click Women link', function () {
        homePage.womenLink.click();
    });
    it('should have a label Women', function () {
        browser.get(women.URL);
        expect(women.womenLabel.getText()).toEqual('WOMEN');
    });
    it('should click Tops link', function () {
        women.topsLink.click();
    });
    it('should have a label Tops', function() {
        browser.get(tops.URL);
        expect(tops.topsLabel.getText()).toEqual('TOPS');
    });
    it('should click Tops Product example', function () {
        tops.topsExampleButton.click();
    });
    it('should see min 8length description', function () {
        var str = topProductExample.description.getText();
        var characters = str.lenght;
        
        expect(characters < 8);//TODO
        console.log("lenght", characters);
    });
    it('condition of Product example should be new', function () {
        expect(topProductExample.condition.getText()).toEqual('New');
    });
      
});