//For loops --- Basic for loop
for (let i = 0; i<10; i++){
    console.log(i);
}
for (let i = 0; i<10; i++){
    if(i %2 == 0){
        console.log("El numero: "+ i +"Es par");
    }else{
        console.log("El numero: "+ i +"Es impar");
    }
}
const car= [ 
    {name: 'monitor',price: 500 },
    {name: 'Cellphone',price: 100 },
    {name: 'Laptop',price: 200 },
    {name: 'Mouse',price: 300 },
]
for (let i = 0; i < car.length; i++) {
    console.log(car[i]);
        
}
//While
let y = 0;
while(y<10){
    console.log(y);
    y++;
}
let x = 0;
while(x<car.length){
    console.log(car[x].name);
    x++;
}

//Do while 
//It executes the code at least once and then evaluates if condition is being passed
//and in a while code if it doesnt pass the condition than it does not execute the code
let v = 0;
do{
    console.log(v);
    v++;
} while( v < 10);

