var Tops = function Tops(){
    this.URL = 'http://automationpractice.com/index.php?id_category=4&controller=category';
    this.topsLabel = element(By.css('#categories_block_left > h2'));
    this.topsExampleButton = element(By.css('#center_column ul li:nth-child(1) div.right-block h5 a'));
}

module.exports = Tops;



