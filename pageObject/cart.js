var Cart = function Cart(){
    this.URL = 'http://automationpractice.com/index.php?controller=order';
    this.selectedProduct = element(By.css('#product_1_3_0_0 > td.cart_description > p > a'));
    this.cartPrice = element(By.css('#product_price_1_3_0 > span'));
}

module.exports = Cart;