var HomePage = function HomePage(){
    this.URL = 'http://automationpractice.com/index.php';
    this.cartLabel = element(By.css('.shopping_cart'));
    this.contactUsLink = element(By.css('#contact-link'));
    this.womenLink = element(By.css('#block_top_menu > ul > li:nth-child(1) > a'));

    this.womenLinkClick = function() {
        this.womenLink.click();
    }
}

module.exports = HomePage;