//Arrow functions

const sum2 = (n1,n2) => console.log(n1 +n2);
sum2(5,10);

const learning = javascript => console.log( javascript)
learning('Arrow Functions');

//Array methods
const months = ['January','February','March','April','May'];
const car= [ 
    {name: 'monitor',price: 500 },
    {name: 'Cellphone',price: 100 },
    {name: 'Laptop',price: 200 },
    {name: 'Mouse',price: 300 },
]
//forEach
months.forEach(month =>{
    if(month =='March'){
        console.log('March does exist');
    }
});

//some ideal for array objects
result = car.some(function(product){
    return product.name ==='cellphone'
})
//now with arrow function
let result;
result = car.some(product=> product.name ==='cellphone');
console.log(result);

//Reduce 
resultado = car.reduce(function(total,product){
    return total + product.price
}, 0);
//With arrow function
resultado = car.reduce((total,product) => total + product.price, 0);
//Filter 

result = car.filter(function(product){
 product.price >200
});
//With arrow function
result = car.filter (product => product.price >200);
