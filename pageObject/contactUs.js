var ContactUs = function ContactUs(){
    this.URL = 'http://automationpractice.com/index.php?controller=contact';
    this.customerService = element(By.css('#center_column > h1 '));
    this.subjectHeading = element(By.id('uniform-id_contact'));
    this.sendButton = element(By.id('submitMessage'));
}

module.exports = ContactUs;