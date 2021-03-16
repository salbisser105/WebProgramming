//Functions
//this first one would not catch an error if the own function is called before declaring 
function sumar() {
    console.log(10* 10);
}
sumar()

//function expr  this is more like as an variable 
const sumar2 = function(){
    console.log(3+2);
}
sumar2();

//IIFE they dont need to be called.
(function() {
    console.log('This is an function');
})();

//Diference between method and a function 
const number1= 20;
const number2= "20";

console.log(parseInt(number2)); //Parse int is a function 
console.log(number1.toString()); //toString() is a method  if they have a point and next comes a function 


// functions with Parameters and Arguments
function add(number11,number22){ // number11 and number 22 are parameters 
    console.log(number11+number22);

}
add(15,10); //Arguments or real values 
//Functions that return valors 

function adding(n1,n2){
    return n1+n2;
}
const result = adding(2,3);
console.log(result);

let total = 0;
function addCar(price){
    return total += price;
}
function taxes(total){
    return 1.15*total;
}
total= addCar(200);
total= addCar(400);
total= addCar(600);

console.log(total);

const totalPayment = taxes(total);
console.log('total to pay with taxes is ${totalPayment}');


