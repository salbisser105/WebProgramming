"use strict" // something to make you follow the propper rules. It runs JavaScript in serious mode
//Objects
const product= {
    nameProduct: "cake",
    price: 300,
    available: true

}
const priceProduct = product.price;
const nameProduct = product.nameProduct;

const values= {
    weight: "1kg",
    lenght: '1 meter',


}

//Destructuring
const {price} = product; //creates and extracts the valor.in only 1 step
const {nameProduct} = product; // it can be done all that or const {price, nameProduct,avalaible} 
const {available} = product;
//It must have the same name of the propertie as the object in order to extract.

//Object methods.
product.img = 'imagen.jpg';

//With Object.freeze(product) --> you can not add more properties /delete or modify
//With Object.seal(product) --> you can not add or delete more properties but you can modify the properties inside

//How to join 2 objects with the Spead Operator
const newProduct = {...product,values };
//it joins 2 products and also does not modify the original propperties of each object.
