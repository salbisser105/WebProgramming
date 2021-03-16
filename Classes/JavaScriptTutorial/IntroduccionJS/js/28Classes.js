//Classes 
class Product{ //First letter must go with Caps
    constructor(name, price) { 
        this.name = name;
        this.price = price;
    }
    resetProduct(){
        return `The product ${this.name} has a price of: ${this.price}`;
    }
    obtainPrice(){
        console.log(this.price);
    }
} 
const product = new Product('Keyboard', 400);
const product1 = new Product('Mouse', 300);

console.log(product);
console.log(product1);
//Herencia
class Book extends Product {
    constructor(name, price, code){
        super(name,price);
        this.code = code;
    }
    resetProduct(){
        return `${super.resetProduct} and su code is: ${this.code}`;
    }
    obtainPrice(){
        super.obtainPrice();
        console.log('is there any feedback?');
    }
}
const book = new Book('JavaScript', 120, '933421421');
console.log(book.obtainPrice());
console.log(book.resetProduct());
console.log(product1.resetProduct());
