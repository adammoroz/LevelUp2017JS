var Cart = function Cart(){
    this.URL = 'http://automationpractice.com/index.php?controller=order';
    this.selectedProduct = element(By.css('#product_1_3_0_0 > td.cart_description > p > a'));
}

module.exports = Cart;