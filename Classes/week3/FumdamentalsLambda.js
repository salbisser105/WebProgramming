//Summary from https://www.youtube.com/watch?v=3VQ382QG-y4 lambda calculus Fundamentals of lambda calculus & functional programming in javaScript

// // //Aplications:
// // add = a => b => a+b;
// // //Can be called as add(1)(2) -> it shoulds return 3
// // //abstractions
// // lambda a.b --- a=>b;
// // lambda a.b x--- a=>b(x);
// // lambda a.(b x) --- a=>(b(x));
// // (lambda a.b) x--- (a=>b)(x);
// // lambda a.lambda b.a  --- a=>b => a;
// // lambda a.(lambda b.a)  --- a=> (b => a);
// // lambda a. lambda b. lambdac. b --- a=>b => c =>b
// // lambda abc.b --- a=>b=>c=> b //you can nest lambdas 
// // //Very similar to js you dont hve to use parentesis 
// // //Beta reduction
// // ((Lambda a.a)lambda b. lambda c. b)(x) lambda e.f
// // (lambda b. lambda c. b) (x) lambda e.f
// // (lambda c . x) lambda e.f
// // x
// //after all the process there is no more reductions to do. so its called Beta Normal Form
// //MockingBird
// lambda = M:= lambdaf.ff;
// JS -> M = f=> f(f);
// M = f => f(f); // Function of mocking bird. (Self application)

// //Kestrel
// lambda K:= lambda ab.a
// K= a =>b => a; // takes 2 things and returns the first one 
// //Kite
// lambda KI:= lambda ab.b
// KI = a =>b => b; //For example KI(4)(9) returns 9
// //Combinators 
// //Functions with no free variables.
// lambda b.b //combinator
// lambda b.a // not combinator
// lambda ab.a //combinator 
// lambda a.ab //not a combinator
// lambda abc.c(lambdae.b) //combinator

// //Cardinal 
// Lambda fab.fba // reverse arguments -- flip 

// //Everything can be a function.

// lambda result:= func exp1 exp2// We already have booleans, with the different function

// Js const result = bool (exp1 ) (exp2)
// true:=K
// T=K//TRUE = KESTEL
// F=KI //FALSE = KITE 

// //NOT
// lambda not:= Lambdap.pFT 
// js const not = p=> p(F)(T);

// JS not(K) === KI
//    not(KI) === K 

//    //AND
// lambda AND:= Lambdapq.p? //If p is false, its gonna be false 

// Js const and = p =>q=> p(?)()

// //OR
// Lambda or:= lambdapq.ppq 
// //When you have lambdapq.p  it means lambda takes 2 arguments p and q, so if something is next to the lambda it means it is an argument 
