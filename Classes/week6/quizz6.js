// const Empty = ( () => {
//     function Empty () { }
//     return Empty 
// }) ();
// const empty = Empty;
// document.writeln(empty instanceof Empty);
//First one returns FALSE

//-----------

// function Empty () {}
// const empty = new Empty();

// Empty.prototype.answer = 42;
// document.writeln(empty.answer===42);
// //shows true 

//----------
// const Empty = ( () => {
//     function Empty () {}
//     return Empty;
// }) ();
// const empty = new Empty;
// document.writeln(empty instanceof Empty);
//shows true

// ---------

// const Empty = ( () => {
//     function Empty () {}
//     return Empty;

// }) ();
// const empty = new Empty;
// const also = new Empty;

// Empty.prototype.answer =42;
// document.writeln(
//     empty.answer === 42 && also.answer ===42
// );

//------------------------
// const Person = name => {
//     let age = 0;
//     return {
//         getAge: () => age,
//         setAge: newAge => age = newAge,
//         getName: () => name,
//         setName: newName => name = newName
//     }
// };
// const me = Person("Myself");
// me.setAge(50);
// document.writeln(me.getAge() === 50);
//Returns true 

// const Person = name => {
//     let age = 0;
//     return {
//         getAge: () => age,
//         setAge: newAge => age = newAge,
//         getName: () => name,
//         setName: newName => name = newName
//     }
// };
// const me = Person("Myself");
// me.setName = "***";
// document.writeln(me.getName() === "***");
//False 
//---------------------

// const Person = name => {
//     let age = 0;
//     return {
//         getAge: () => age,
//         setAge: newAge => age = newAge,
//         getName: () => name,
//         setName: newName => name = newName
//     }
// };
// const me = Person("Myself");
// me.age=50;
// document.writeln(me.getAge() === 50);
//False

// -========
const Person = name => {
    let age = 0;
    return {
        getAge: () => age,
        setAge: newAge => age = newAge,
        getName: () => name,
        setName: newName => name = newName
    }
};
const me = Person("Myself");
me.setName("Sherlock")
document.writeln(me.getName() === "Sherlock");
//Returns true
