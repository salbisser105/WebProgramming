//Promises

const userAuth = new Promise ( ()=>{
    const auth= true;
    if(auth){
        resolve('User connected');
    }else{
        reject('It was not able to log');
    }
});
userAuth
    .then( function(result){
        console.log(result);
    })
    .catch( error=> console.log(error)); //Can be done with function or arrow function  

//En los promises there are 3 options
//Pending: Not done but not rejected yet.
//Fulfilled: Accomplished
//Rejected: Rejected or not accomplished.