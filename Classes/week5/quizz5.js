// function bonusCalculation(employee){
//     return eval(bonusFormula);
// }
// // Solution will be tested against:
// const e = {revenue: 10000, bonus: null};
// bonusCalculation(e);
// e.bonus === e.revenue*factor_;


//Comments [10:46] Walker Patrick (s)
// I have a question for submission Q10b. The question says 'do not use sideeffects', but the result tests 'e.bonus'. Is seting the bonus field of the employee considered as side effect?

// [10:50] König Dierk
// if you cannot modify the employee inside the script, you can still...

// function bonusCalculation(bonusFormula){
//     Function('employee', 'return employee.bonus = eval(bonusFormula)');
// }
// const bonusCalculation = Function('employee', 'return employee.bonus = eval(bonusFormula)');
// //cons
// const e = {revenue: 10000, bonus: null};
// bonusCalculation(e);
// //e.bonus === e.revenue*factor_;


// console.log(bonusCalculation);
// class Person {
//     constructor(name) {

//     }
//     isCool(){ return this.name.length >3};
// }
// const p = new Person("Dierk");
// document.writeln(p.isCool());
//Answer length cant access this.name undifined 
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     isCool(){ return this.name.length >3};
// }
// const p = new Person("Dierk");
// document.writeln(p.isCool());
//True 
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     isCool(){ return this.name.length >3};
// }
// const p = new Person("Joe");
// p.isCool = () => true;
// document.writeln(p.isCool());
//true
// class Person {

//     isCool(){ return this.name.length >3};
// }
// const p = new Person("Dierk");
// p.name = "Dierkk";
// document.writeln(p.isCool());
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     isCool(){ return this.name.length >3};
// }
// const p = new Person("Joe");
// p.prototype.isCool = () =>true;
// document.writeln(p.isCool());
//false
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     isCool(){ return this.name.length >3};
// }
// const p = new Person("Dierk");
// document.writeln(p.name ==="Dierk");
//true
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     isCool(){ return name === 'Dierk'};
// }
// const p = new Person("Dierk");
// document.writeln(p.isCool());
//false 
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     isCool(){ return this.name.length >3};
// }
// const p = new Person("Joe");
// Person.prototype.isCool = () =>true;
// document.writeln(p.isCool());
//True
// class Person {

// }
// const p = {};
// Object.setPrototypeOf(p,Person);
// document.writeln(p instanceof Person);
//false
// class Person {}
// class Student extends Person {}
// const s = new Student();
// document.writeln(s instanceof Person);
//true
// class Person {

// }
// const p = {};
// Object.setPrototypeOf(p,Person.prototype);
// document.writeln(p instanceof Person);
//true 
// class Person {}
// class Student {}

// const s =new Student();
// Object.setPrototypeOf(s,Person.prototype);
// document.writeln(s instanceof Student);
//false
// class Person {}
// class Student {}
// const s =new Student();
// Object.setPrototypeOf(s,Person.prototype);
// document.writeln(s instanceof Person);
//true
// class Person {}
// class Student {}

// const s =new Student();
// Object.setPrototypeOf(Student,Person);
// document.writeln(s instanceof Person);
// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     isCool() {return this.name.length >3};
// }
// const p = new Person("Dierk");
// document.writeln(p instanceof Person);
//true
// class Person {}
// class Student {}

// const s =new Student();
// Object.setPrototypeOf(Student.prototype,Person.prototype);
// document.writeln(s instanceof Person);
// function Todo(text, done) {
//     function check () { done = true}
//     return {
//         getText: () => text,
//         isDone:  () => done,
//         check: check
//     }
// }
// let todo = Todo("buy milk", false);
// todo.check();
// document.writeln(todo.isDone());
//Returns true ? why 
// function Todo(text, done) {
//     const check =() => done = true;
//     return {
//         getText: ()=>text,
//         isDone: ()=> done,
//         check: check
//     }
// }
// let todo = Todo("buy milk", false);
// todo.check();
// document.writeln(todo.isDone());
//True dunno why 
// function Todo(text) {
//     const done = false;
//     return {
//         getText: ()=> text,
//         isDone: ()=> done,
//         check: () => done = true
//     }
// }
// let todo = Todo("buy milk");
// todo.check();
// document.writeln(todo.isDone());
//doesnt show anything invalid assingment 
// function Todo(text) {
//     let done = false;
//     return {
//         getText: ()=> text,
//         isDone: ()=> done,
//         check: () => done = true
//     }
// }
// let todo = Todo("buy milk");
// todo.check();
// document.writeln(todo.isDone());
//true ??? 
// function Todo(text) {
//     let done = false;
//     return {
//         getText: ()=> text,
//         isDone: ()=> done,
//         check:  done = true
//     }
// }
// let todo = Todo("buy milk");
// todo.check();
// document.writeln(todo.isDone());
//not working... todo.check not a function 
// function Todo(text) {
//     let done = false;
//     const check = () => done = true;
//     return {
//         getText: ()=> text,
//         isDone: ()=> done,
//         check: check
//     }
// }
// let todo = Todo("buy milk",false);
// todo.check();
// document.writeln(todo.isDone());
//true
// function Todo(text) {
//     let done = false;
//     const check = () => this.done = true;
//     return {
//         getText: ()=> text,
//         isDone: ()=> done,
//         check: check
//     }
// }
// let todo = Todo("buy milk");
// todo.check();
// document.writeln(todo.isDone());
//false 
// function Todo(text) {
//     let done = false;
//     const check = () => done = true;
//     return {
//         getText: ()=> text,
//         isDone: ()=> done,
//         check: check
//     }
// }
// let todo = Todo("buy milk");
// todo.check();
// document.writeln(todo.isDone());
//true

// function handle(callback){
//     const result = [];
//     callback(result);
//     callback(result);
//     return result;
// }
// document.writeln(handle(it=> it.push(1)).length ===2)
//true

// function handle(callback){
//     return callback( []) ;
// }
// document.writeln(handle (it => {it.push(1); return it;}).length === 1)
// //true 
// function handle(count, callback) {
//     const result = [];
//     for (let i = 0; i < count; i++){
//         callback(result);
//     }
//     return result;
// }
// document.writeln(handle(3,it =>it.push(1)).length===3)
//true


// function handle(callback){
//     const result = [];
//     return callback( result);

// }
// document.writeln( handle( ()=> [1]).length === 1)

// function handle (callback) {
//     const result = [];
//     callback(result);
//     return result;
// }
// document.writeln (handle(it => it.push(1)).length ===1)
//true 

// function handle (callback) {
//     const result = [];
//     callback(result);
//     return result;
// }
// document.writeln (handle(it.push(1)).length ===1)
//error not defined 

// function handle (callback) {
//     const result = [];
//     callback(result);
//     return result;
// }
// let it = [];
// document.writeln (handle(it => it.push(1)).length ===1)
// //true 


// function handle (callback) {
//     const result = [];
//     callback([]);
//     return result;
// }
// document.writeln (handle(it => it.push(1)).length ===1)
//false 

// function handle (callback) {
//     const result = [];
//     callback(result);
//     return result;
// }
// document.writeln (handle(()=> [1]).length ===1)
//false 

// function handle (callback) {
//     const result = [];
//     callback(result);
//     return result;
// }
// let it = []
// document.writeln (handle(() => it.push(1)).length ===1)
//false 

// function handle (callback) {
//     const result = [];
//     callback(result);
//     return result;
// }
// document.writeln (handle(() => it.push(1)).length ===1)
//not defined 
// function handle (callback) {
//     const result = [];
//     callback(result);
//     return result;
// }
// let it = [];
// document.writeln (handle(it.push(1)).length ===1)



//////////////

//false
// const Observable = value => {
//     const listeners = [];
//     return {
//         onChange: callback => listeners.push(callback),
//         getValue: () =>value,
//         setValue: val => {
//             if(value=== val) return;
//             value = val;
//             listeners.forEach(listener => listener(val));
//         }
//     }
// };
// const color = Observable('white');
// color.value= 'black';
// document.writeln(color.getValue()==='black');


//true 
// const Observable = value => {
//     const listeners = [];
//     return {
//         onChange: callback => listeners.push(callback),
//         getValue: () =>value,
//         setValue: val => {
//             if(value=== val) return;
//             value = val;
//             listeners.forEach(listener => listener(val));
//         }
//     }
// };
// const color = Observable('white');
// let observed = null;
// color.onChange(val => observed = val);
// color.setValue('black');
// document.writeln(observed === color.getValue());

//False
// const Observable = value => {
//     const listeners = [];
//     return {
//         onChange: callback => listeners.push(callback),
//         getValue: () =>value,
//         setValue: val => {
//             if(value=== val) return;
//             value = val;
//             listeners.forEach(listener => listener(val));
//         }
//     }
// };
// const color = Observable('white');
// let updateCount = 0;
// const updateListener = val => updateCount++;
// color.setValue('black');
// document.writeln(updateCount === 1);


//false 

// const Observable = value => {
//     const listeners = [];
//     return {
//         onChange: callback => listeners.push(callback),
//         getValue: () =>value,
//         setValue: val => {
//             if(value=== val) return;
//             value = val;
//             listeners.forEach(listener => listener(val));
//         }
//     }
// };
// const color = Observable('white');
// let observed = null;
// color.onChange( val => observed = val);
// document.writeln(observed === color.getValue());


//false 
// const Observable = value => {
//     const listeners = [];
//     return {
//         onChange: callback => listeners.push(callback),
//         getValue: () =>value,
//         setValue: val => {
//             if(value=== val) return;
//             value = val;
//             listeners.forEach(listener => listener(val));
//         }
//     }
// };
// const color = Observable('white');
// let updateCount = 0;
// color.onChange( _=> updateCount++);
// color.setValue('white');
// document.writeln(updateCount ===1);


//false 
// const Observable = value => {
//     const listeners = [];
//     return {
//         onChange: callback => listeners.push(callback),
//         getValue: () =>value,
//         setValue: val => {
//             if(value=== val) return;
//             value = val;
//             listeners.forEach(listener => listener(val));
//         }
//     }
// };
// const color = Observable('white');
// let updateCount = 0;
// color.onChange( _=> updateCount++);
// color.setValue('white');
// color.setValue('black');
// document.writeln(updateCount ===2);

//
//true
// const Observable = value => {
//     const listeners = [];
//     return {
//         onChange: callback => listeners.push(callback),
//         getValue: () =>value,
//         setValue: val => {
//             if(value=== val) return;
//             value = val;
//             listeners.forEach(listener => listener(val));
//         }
//     }
// };
// const color = Observable('white');
// color.setValue('black');
// document.writeln(color.getValue() ==='black');

//true
// const Observable = value => {
//     const listeners = [];
//     return {
//         onChange: callback => listeners.push(callback),
//         getValue: () =>value,
//         setValue: val => {
//             if(value=== val) return;
//             value = val;
//             listeners.forEach(listener => listener(val));
//         }
//     }
// };
// const color = Observable('white');
// let updateCount = 0;
// color.onChange( _=> updateCount++);

// color.setValue('black');
// document.writeln(updateCount ===1);


// const Observable = value => {
//     const listeners = [];
//     return {
//         onChange: callback => listeners.push(callback),
//         getValue: () =>value,
//         setValue: val => {
//             if(value=== val) return;
//             value = val;
//             listeners.forEach(listener => listener(val));
//         }
//     }
// };
// const color = Observable('white');
// let observed = color.getValue();
// color.onChange(val=> observed = val);
// document.writeln(observed === color.getValue());





//10MAY quizz

//Promise
// 1 2 2 
// const idPromise = x => new Promise(resolve => resolve(x));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);

// };
// const inc = n =>n+1;
// const filterEven = n => n% 2 === 0 ? n : undefined;

// idPromise(1)
//     .then(writer)
//     .then(inc)
//     .then(writer)
//     .then(filterEven)
//     .then(writer)
// 1 undefined  ??
// const idPromise = x => new Promise(resolve => resolve(x));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);

// };

// const filterEven = n => n% 2 === 0 ? n : undefined;

// idPromise(1)
//     .then(writer)
//     .then(filterEven)
//     .then(writer);

//Shows only 1 
// const idPromise = x => new Promise(resolve => resolve(x));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);

// };
// const inc = n =>n+1;
// const filterEven = n => { if (n% 2 === 0) return  n;  else throw Error("not even")};


// idPromise(1)
//     .then(writer)
//     .then(filterEven)
//     .then(writer)
//     .catch(err=> {});


// Shows 1 
// const idPromise = x => new Promise(resolve => resolve(x));
// idPromise(1)
//     .then(it=>document.writeln(it));

//--------------
//only shows 1 
// const idPromise = x => new Promise(resolve => resolve(x));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);

// };
// const inc = n =>n+1;
// const filterEven = n => { if (n% 2 === 0) return  n;  else throw Error("not even")};


// idPromise(1)
//     .then(writer)
//     .then(filterEven)
//     .then(writer)
//     .catch(err=> {});

//--------------------------

//Wrong only shows 1 undefined (it should be only 1 )
// const idPromise = x => new Promise(resolve => resolve(x));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);

// };

// const filterEven = n => n% 2 === 0 ? n : undefined;

// idPromise(1)
//     .then(writer)
//     .then(filterEven)
//     .then(writer);

// -----------
//Shows 1 2, not 1 1 
// const idPromise = x => new Promise(resolve => resolve(x));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);

// };

// idPromise(1)
//     .then(writer)
//     .then(it => it+1)
//     .then(writer);


//------------
// const idPromise = x => new Promise(resolve => resolve(x));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);

// };

// idPromise(1)
//     .then(it => {document.writeln(it); return idPromise(it);})
//     .then(it => document.writeln(it));


//--------------
//shows 11 
// const idPromise = x => new Promise(resolve => resolve(x));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);

// };

// idPromise(1)
//     .then(writer)
//     .then(it => document.writeln(it));


//----------------------
//shows nothing 
// const idPromise = x => new Promise(resolve => resolve(x));

// idPromise(1)
//     .then(writer)
//     .then(it => document.writeln(it));


//---------
//wrong
// const idPromise = x => new Promise(resolve => resolve(x));
// document.writeln(idPromise(1));

//---------------------
// 1 undefined 
// const idPromise = x => new Promise(resolve => resolve(x));

// idPromise(1)
//     .then(it => document.writeln(it))
//     .then(it => document.writeln(it));

//---------------------------------------

// 1 -2 
// const idPromise = x => new Promise(resolve => resolve(x));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);

// };

// idPromise(1)
//     .then(writer)
//     .then(it => it+1)
//     .then(writer);


//-------------------------
//1 undefined 
// const idPromise = x => new Promise(resolve => resolve(x));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);

// };
// const filterEven = n => n%2 === 0 ? n: undefined;

// idPromise(1)
//     .then(writer)
//     .then(filterEven)
//     .then(writer);

// const idPromise = x => new Promise(resolve => resolve(x));



// idPromise(1)
//     .then(it => {document.writeln(it); return it;})
//     .then(it => document.writeln(it));

//==========================
//UNDEFINED 
// const idPromise = x => new Promise(resolve=> resolve(x));
// const failPromise = err => new Promise((resolve, reject) => reject(err));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// };
// const inc = n => idPromise(n+1);
// const filterEven = n => n %2 === 0 ? idPromise(n): failPromise("not even");

// const foo = async  i => {
//     let x = await idPromise(i);
//     while(x <4) {
//         x = await filterEven(x).catch(err => {});
//         x = await writer(x);
//         x = await inc(x);
//     }
// };
// foo(1);

//=============================

//Shows 1 
// const idPromise = x => new Promise(resolve=> resolve(x));
// const failPromise = err => new Promise((resolve, reject) => reject(err));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// };

// const foo = async  i => {
//     let x = await idPromise(i);
//     x = await(writer(x));

// };
// foo(1);

//=======================
//Shows nothing 
// const idPromise = x => new Promise(resolve=> resolve(x));
// const failPromise = err => new Promise((resolve, reject) => reject(err));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// };

// const foo = async  i => {
//     let x = await idPromise(i);
//     x.then(writer);

// };
// foo(1);

//================
// 1 2 3 
// const idPromise = x => new Promise(resolve=> resolve(x));
// const failPromise = err => new Promise( (resolve, reject) => reject(err));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// };
// const inc = n => idPromise(n+1);
// const foo = async  i => {
//     let x = await idPromise(i);
//     while(x <4) {
//         x = await writer(x);
//         x = await inc(x);
//     }

// };
// foo(1);


//====================================
//Error
// const idPromise = x => new Promise(resolve=> resolve(x));
// const failPromise = err => new Promise((resolve, reject) => reject(err));
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// };
// const inc = n => idPromise(n+1);
// const filterEven = n => n %2 === 0 ? idPromise(n): failPromise("not even");

// const foo = async  i => {
//     let x = await idPromise(i);
//     while(x <4) {
//         x = await filterEven(x);
//         x = await writer(x);
//         x = await inc(x);
//     }
// };
// foo(1);

// const idPromise = x => new Promise(resolve=> resolve(x));
// const failPromise = err => new Promise((resolve, reject) => reject(err));

// const foo = async  i => {
//     let x = await idPromise(i);
//     document.writeln(x);

// };
// foo(1);

//16a Quizz
// const inc = x => x +1;
// const double = x => x *2;
// function then (test){
//     test = test => new Promise(resolve => resolve(test));
// }

// inc.then(dobule);
// execute asynchronous tasks in strict sequence, aka "reactive stream", "flux architecture"
// const Scheduler = () => {
//     let inProcess = false;
//     const tasks = [];

//     function process() {
//         if (inProcess) {
//             return;
//         }
//         if (tasks.length === 0) {
//             return;
//         } // guard clause
//         inProcess = true;
//         const task = tasks.pop();

//         new Promise((resolve, reject) => {
//             task(resolve);
//         }).then(() => {
//             inProcess = false;
//             process();
//         });
//     }

//     function add(task) {
//         tasks.unshift(task);
//         process();
//     }
//     return {
//         add: add,
//         addOk: task => add(ok => {
//             task();
//             ok();
//         }) // convenience
//     }
// };


// a dataflow abstraction that is not based on concurrency but on laziness

// const DataFlowVariable = howto => {
//     let value = undefined;
//     return () => undefined === value ?
//         value = howto() :
//         value;
// };
//
// const NullSafe = x => {
//     const isNullSafe = y => y && y.then;
//     const maywrap    = y => ___ ; // if y is not NullSafe yet, make it so
//     return {
//        then: fn => ___ // see(1)
//     }
// };

// Week 11 
//Need to SEE VIDEO ASAP - DEFINE SCHEDULER AND DATAFLOW 
//LOGS X AND 0 YES..
// let state = 3;

// const scheduler = Scheduler();
//     scheduler.add(ok => {
//         setTimeout(_ => {
//             state= state-2;
//             ok();
//         },100)
//     });
//     scheduler.add(ok=>{
//         state = state-1;
//         ok();
//     });
//     scheduler.add(ok=>{
//         document.writeln(state);
//         ok();
//     });
// console.log('x');


//-------------
// let state = 3;
// //Show 0  only 0 doesntshow other value.... 
// const scheduler = Scheduler();
//     scheduler.add(ok => {
//         setTimeout(_ => {
//             state= state-2;
//             ok();
//         },100)
//     });
//     scheduler.add(ok=>{
//         state = state-1;
//         ok();
//     });
//     scheduler.add(ok=>{
//         document.writeln(state);
//         ok();
//     });

///---------------------

// let state = 3;
// //Shows only 0 
// const scheduler = Scheduler();
//     scheduler.add(ok => {
//         setTimeout(_ => {
//             state= state-2;
//             ok();
//         },100)
//     });
//     scheduler.add(ok=>{
//         state = state-1;
//         ok();
//     });
//     scheduler.add(ok=>{
//         document.writeln(state);
//         ok();
//     });

//======================================= 
//Shows only 0 
// let state = [0];

// const scheduler = Scheduler();
//     scheduler.add(ok => {
//         setTimeout(_ => {
//             state.push(1);
//             ok();
//         },100)
//     });
//     scheduler.add(ok=>{
//         state.push(2);
//         ok();
//     });
//     document.writeln(state);

//=================================

// let state = [0];
// //Shows 0,1,2 
// const scheduler = Scheduler();
//     scheduler.add(ok => {
//         setTimeout(_ => {
//             state.push(1);
//             ok();
//         },100)
//     });
//     scheduler.add(ok=>{
//         state.push(2);
//         ok();
//     });
//     scheduler.add(ok=>{
//         document.writeln(state);
//         ok();
//     });


//==================================

// let state = [0];
// //Shows 0
// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state.push(1);
//         ok();
//     }, 100)
// });
// scheduler.add(ok => {
//     state.push(2);
//     ok();
// });
// document.writeln(state);

//========================

// let state = [0];
// //Shows 0 correct 
// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state.push(1);
//         ok();
//     }, 100)
// });
// scheduler.add(ok => {
//     state.push(2);
//     ok();
// });
// document.writeln(state);

//======================

// let state = [0];
// //Shows only 0,1,2 
// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state.push(1);
//         ok();
//     }, 100)
// });
// scheduler.add(ok => {
//     state.push(2);
//     ok();
// });
// scheduler.add(ok => {
//     document.writeln(state);
//     ok();
// });

//=============================
// let state = [0];
// //Shows  0,1,2 
// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state.push(1);
//         ok();
//     }, 100)
// });
// scheduler.add(ok => {
//     state.push(2);
//     ok();
// });
// scheduler.add(ok => {
//     document.writeln(state);
//     ok();
// });
//======================

// let state = [0];
// //Shows only0
// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state.push(1);
//         ok();
//     }, 100)
// });
// scheduler.add(ok => {
//     state.push(2);
//     ok();
// });
// document.writeln(state);

//========================

// let state = [0];
// //Shows only 0,1,2 
// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state.push(1);
//         ok();
//     }, 100)
// });
// scheduler.add(ok => {
//     state.push(2);
//     ok();
// });
// document.writeln(state);
// document.writeln(state);
// scheduler.add(ok => {
//     document.writeln(state);
//     ok();
// });


//===================================
//Q27
// //Shows 4 YES- 
// const x = DataFlowVariable(() => y()*2);
// let y = DataFlowVariable(() => 1);
//     y = DataFlowVariable(() => 2);
// document.writeln(x());
//=============

//Shows 2 
// const x = DataFlowVariable(() => y()*2);
// let y = DataFlowVariable(() => 1);

// x();
// y = DataFlowVariable(() => 2);
// document.writeln(x());

//==============
//Shows 4
// const x = DataFlowVariable(() => y()*2);
// let y = DataFlowVariable(() => 1);
//     y = DataFlowVariable(() => 2);
// document.writeln(x());

//=============
// //Shows 2 CORRECT
// const x = DataFlowVariable(() => y()*2);
// const y = DataFlowVariable(() => 1);
// document.writeln(x());


//================
//Shows 2 
// const x = DataFlowVariable(() => y()*2);
// let y = DataFlowVariable(() => 1);

// x();
// y = DataFlowVariable(() => 2);
// document.writeln(x());

// const NullSafe = x=> { 
//     const isNullSafe = y => y && y.then;
//     const maywrap = y => y.isNullSafe.then(NullSafe(y));
//     return {
//         then: fn => /* */ ;
//     }
// }; 

// NullSafe(x_)
//     .then (x=> x*2)
//     .then( x=> NullSafe(x))
//     .then (x=> y_ = x+1)
//     .then (x=>null)
//     .then( x => x.mustNotBeCalled) !== null && y_ === x_* 2 + 1



//Const failSafe working
//Q18Aw
const failSafe = value => cb => argument => { 
    try{
        return cb(argument);
    }catch(error){
        return value;
    } 
}

//palindrome wroking

function palindrome(word){
    
    let arrayC = str2char(word).map( a => a.toLowerCase()).filter(a => isAlpha(a));
    let length = arrayC.length; 
    
    for (let z = 0; z<length /2 ; z++){
        if (arrayC[z] !== arrayC[length-1 - z]){
       
            return false;
       
        }

    }
    return true;
}

