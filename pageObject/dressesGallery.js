var DressesGallery = function DressesGallery(){
    this.URL = 'http://automationpractice.com/index.php?id_category=8&controller=category';
    this.dressesElements = element.all(By.css('#center_column > ul > li .product_img_link'));
}

module.exports = DressesGallery;
