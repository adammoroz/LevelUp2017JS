var ContactUs = function(){
    this.URL = 'http://automationpractice.com/index.php?controller=contact';
    this.customerService = element(By.css('.page-heading bottom-indent'));
    this.subjectHeading = element(By.id('uniform-id_contact'));
    this.sendButton = element(By.id('submitMessage'));
}

module.exports = ContactUs;