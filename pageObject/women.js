var Women = function Women(){
    this.URL = 'http://automationpractice.com/index.php?id_category=3&controller=category';
    this.womenLabel = element(By.css('#categories_block_left > h2'));
    this.topsLink = element(By.css('#subcategories > ul > li:nth-child(1) > div.subcategory-image > a'));

    this.getWomenLabel = function () {
        var that = this;
        return new Promise(function (resolve) {
            that.womenLabel.getText().then(function (text) {
                resolve(text);
            });
        })
    };
}

module.exports = Women;