//Object Constructor Programming oriented Objects

/* Object Literal */
const product ={
    name: 'Tablet',
    price: 500
}
//Object Constructor

function Products(name,price){
    this.name = name;
    this.price = price;
}
function Client(name,lastname){
    this.name = name;
    this.lastname = lastname;
}
//Prototype is a function associated to an object  
//Allows to create function that are only used in an specific object 
Products.prototype.resetProduct = function () { 
    return `The product ${this.name} has a price of: ${this.price}`;
}

const product2 = new Products('Laptop', 5000);
const product3 = new Products('Mouse', 500);


const client = new Client('Santiago', 'Albisser');
console.log(client);
function resetProduct(product){ //Its not something very advice because if you want to reset one product you would have to do many functions 
    return `The product ${product.name} has a price of: ${product.price}`;
}

Client.prototype.resetClient = function () { 
    return `The Client ${this.name} has a lastname: ${this.lastname}`;
}
console.log(client.resetClient());
console.log(product2.resetProduct());
console.log(product3.resetProduct());


