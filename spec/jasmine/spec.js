beforeAll( function  () {//kod który wykona sie przed wszystkim
});
beforeEach(function () {//kod ktory wykona się przed kazdym testem

});
afterAll(function () {//kod ktory wykona się po wszystkim
});
afterEach(function () {//kod ktory wykona się po kazdym tescie
});
describe('Protractor Demo App',  function  () {
    it('should have a title',  function  () {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
        expect(browser.findElement(By.css(".shopping_cart"))//expect = assert,
            .getText())//expected
            .toEqual("Cart (empty)");//actual
    });
}); 
