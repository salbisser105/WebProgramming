//Objects

const nameProduct = "cake";
const price = 300;
const available = true;

const product= {
    nameProduct: "cake",
    price: 300,
    available: true

}

console.log(product);
console.log(product.price);

//How to modify an object
//Adding new properties
product.img = 'imagen.jpg';
//Delete properties 
delete product.available;

