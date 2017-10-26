var DressesGallery = function DressesGallery(){
    this.URL = 'http://automationpractice.com/index.php?id_category=8&controller=category';
    this.dress1 = element(By.css('#center_column > ul > li:nth-child(1) > div > div.right-block > h5 > a'));
    this.dress2 = element(By.css('#center_column > ul > li:nth-child(2) > div > div.right-block > h5 > a'));
    this.dress3 = element(By.css('#center_column > ul > li:nth-child(3) > div > div.right-block > h5 > a'));
    this.dress4 = element(By.css('#center_column > ul > li:nth-child(4) > div > div.right-block > h5 > a'));
    this.dress5 = element(By.css('#center_column > ul > li:nth-child(5) > div > div.right-block > h5 > a'));
}

module.exports = DressesGallery;
