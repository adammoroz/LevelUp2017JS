var HomePage = require(pageObjectDir+"/homePage.js");
var ContactUs = require(pageObjectDir+"/contactUs.js");


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
    it('should have a title', function () {
        browser.get(contactUs.URL);
        expect(contactUs.customerService.isDisplayed()).toBe(true);
        }); 
    it('should display Subject Heading Dropdown', function () {
        expect(contactUs.subjectHeading.isDisplayed()).toBe(true);
    });
    it('should display Send Button', function () {
        expect(contactUs.sendButton.isDisplayed()).toBe(true);
    });
});