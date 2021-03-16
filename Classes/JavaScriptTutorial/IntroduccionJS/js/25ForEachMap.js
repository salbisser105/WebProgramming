const car= [ 
    {name: 'monitor',price: 500 },
    {name: 'Cellphone',price: 100 },
    {name: 'Laptop',price: 200 },
    {name: 'Mouse',price: 300 },
]
//For each can be only used in arrays 
car.forEach(function(product){
    console.log(product.price);
});
//or in arrow function
car.forEach (product => console.log(product.name));

//Map
car.map (product => console.log(product.name));
//Diference between foreach and map.
// when you want to iterate in an array and send them to the console or to the window use the for each
//but when you want to create a new array use the map

//or in arrow function
const array1 = car.forEach (product => (product.name));

const array2 =car.map (product => (product.name));
console.log(array1);//Returns undefined 
console.log(array2); //Returns a new array with the given params

const array3 =car.map (product =>'${product.name}- ${product.price}');