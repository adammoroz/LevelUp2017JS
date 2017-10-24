var TopProductExample = function TopProductExample(){
    this.URL = 'http://automationpractice.com/index.php?id_product=1&controller=product';
    this.description = element(By.css('#short_description_content > p'));
    this.condition = element(By.css('#product_condition > span'));
}

module.exports = TopProductExample;
