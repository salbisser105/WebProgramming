//Reserved keyword this
//Cant create a function or a variable with THIS

window.name ="One name";

const saved = {
    name:'Santiago',
    last: 'Albisser',
    total:5000,
    payed: false,
    //Objects can have functions
    info: () => { //Arrow function does reference to global window 
        console.log(`The client with${this.name} did a reservation and su total to pay is: ${this.total} `);
        // console.log(`The client with${this.name} if i had only this and no window.name it would return undefined  
    }
}

const saved2 = {
    name:'Santiago',
    last: 'Albisser',
    total:5000,
    payed: false,
    //Objects can have functions
    info: function(){ // Function does reference to the object that is being executed  
        console.log(`The client with${this.name} did a reservation and su total to pay is: ${this.total} `);
    }
}

console.log(saved.info());
console.log(saved2.info());