// Arrays
const numbers = [10, 20, 30, 40, 50];

console.table(numbers); //Allows you to view the array in a very ordered way.

const months = ['January','February','March','April','May'];
console.table(months)
//How to access to an specific array valors 
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
//How to know the lenght of an array.
console.log(months.length);

numbers.forEach(function(number){
    console.log(number);
})

//Methods for arrays.
numbers [5] = 60; //Add something to the array is not very common. because you gotta know what index it comme

numbers.push(70,80,90); //Original arrays should not be modified. -- adds at the end of the array 

numbers.unshift(-10,-20,-30); //Adds numbers at the start of the array 

numbers.pop(); //deletes the last item of the array; 
numbers.shift(); //deletes the first item of the array;

months.splice(2,1); //It checks the array and the first parameter is index where you want to delete and the second parameter means how many items you want to delete next to

//Original data should keep the same. 
//Rest operator or spread Operator 

const newArray = [...months,'June'];
//We have a new array and adds June. And we keep the same original array.


//More Array Methods.
const car= [ 
    {name: 'monitor',price: 500 },
    {name: 'Cellphone',price: 100 },
    {name: 'Laptop',price: 200 },
    {name: 'Mouse',price: 300 },
]
//forEach
months.forEach(function(month){
    if(month =='March'){
        console.log('March does exist');
    }
});
//Includes
const result = months.includes('March');
//some ideal for array objects
result = car.some(function(product){
    return product.name ==='cellphone'
})

//Reduce 
resultado = car.reduce(function(total,product){
    return total + product.price
}, 0);

//Filter 

result = car.filter(function(product){
    return product.price >200

});