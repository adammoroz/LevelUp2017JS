var HomePage = require(pageObjectDir+"/homePage.js");
var ContactUs = require(pageObjectDir+"/contactUsPage.js")



var homePage = new HomePage();
var contactUs = new ContactUs();

describe('Protractor Demo App',  function  () {
    it('should have a title',  function  () {
        browser.waitForAngularEnabled(false);
        browser.get(homePage.URL);

        expect(homePage.cartLabel.getText())
            .toEqual("Cart (empty)");
    });
    it('should click contactUs link', function () {
        homePage.contactUsLink.click();

    });

});