var Women = function Women(){
    this.URL = 'http://automationpractice.com/index.php?id_category=3&controller=category';
    this.womenLabel = element(By.css('#categories_block_left > h2'));
    this.topsLink = element(By.css('#center_column > h1 '));
}

module.exports = Women;