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
        expect(contactUs.customerService.getText()).toEqual('CUSTOMER SERVICE - CONTACT US');
        }); 
    it('should display Subject Heading Dropdown', function () {
        expect(contactUs.subjectHeading.isPresent()).toBe(true);
    });
    it('should display Send Button', function () {
        expect(contactUs.sendButton.isPresent()).toBe(true);
    });
});