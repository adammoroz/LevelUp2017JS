var HomePage = require(pageObjectDir+"/homePage.js");
var ContactUs = require(pageObjectDir+"/contactUsPage.js")



var homePage = new HomePage();
var contactUs = new ContactUs();

describe('ContuctUs tests',  function  () {
    it('open page',  function  () {
        browser.waitForAngularEnabled(false);
        browser.get(homePage.URL);

    });
    it('should click contactUs link', function () {
        homePage.contactUsLink.click();

    });
    
});