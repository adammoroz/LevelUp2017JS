var Dresses = function Dresses(){
    this.price = element(By.css('#our_price_display'));
    this.name = element(By.css('#center_column .pb-center-column > h1'));

    this.data = {
        "dress1": {
            "order": 0,
            "name": "Printed Dress",
            "price": "$26.00"
        },
        "dress2": {
            "order": 1,
            "name": "Printed Dress",
            "price": "$50.99"
        },
        "dress3": {
            "order": 2,
            "name": "Printed Summer Dress",
            "price": "$28.98"
        },
        "dress4": {
            "order": 3,
            "name": "Printed Summer Dress",
            "price": "$30.50"
        },
        "dress5": {
            "order": 4,
            "name": "Printed Chiffon Dress",
            "price": "$16.40"
        }
    }
}

module.exports = Dresses;

