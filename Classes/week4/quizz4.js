//const times = a => b => a * b;
// const twice = times(2);
// [1, 2, 3].map(x => times(2)(x)); //Normal use 
//[1, 2, 3].map(times(2)); // 
// const test = [1, 2, 3].map(twice);
// const test1 = [1, 2, 3].map(twice).toString() === "2,4,6";
// console.log(test);
// console.log(test1);

//This function is good--> upload on next week.
function twice(item) {
    return item *2;
}
const test =[1, 2, 3,4].map(twice).toString() === "2,4,6,8";
console.log(test);
//-----------
// let numbers = [1,2,3,4,5,6];

 function divides(numbers){
     return numbers % 3 == 0;
    //  if (numbers %3 == 0){
    //      return true;
    //  }else {
    //      return false;
    //  }
}
//  const testas = numbers.filter(divides);
// console.log (testas);
// }
 const test1 = [1,2,3,4,5,6].filter(divides).toString();// equals [3,6];
 console.log(test1);