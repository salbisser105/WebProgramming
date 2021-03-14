// Youtube Video Tutorial JavaScript Scope Chains and Closures.
// https://www.youtube.com/watch?v=zRZNb4GDOPI
/* Why
Scope and chains are not optional
-you dont get to "opt in"
-there is no syntax in javaScript for these features
-these features are in effect all of the time.
* Without them, lots  of "plain" JS wouldnt work
*Without a working knowledge,, most avdanced javaScript patterns are hard or impossible to understand 
*spec is not designed as a teaching document 
*/
/* The big scopes rules summary 
*Every Js runtime has a global scope.
- Identical with the global object.
- windows in browsers, global in node, self in a worker...
* Local variables are declared with "var" and are scoped to the function they are declared within
*Functions declarations (but not expressions ) produce local bindings and have priority over var in the same scope
*When a variable is accessed (declared or not), Js resolves it by looking in the current scope for a variable with that name.
- if it fails to find one, it looks through the enclosing scoes in order from innermost to global.
- as soon as it finds a variable with that name it stops and uses that one.
 - if it doesnt find any variable by end, it produces a referenceError (for reads) or "accidentally" (implicitly ) creates a global variable (for writes)
 - As consequence if an outer scope variable is "shadowed" by a closer(inner ) variable of the same name, the outer will not be accesssible by scope resolution

The big scope rules summary (2)
*"Hoisting": before a function is executed, its body is parsed/scanned for declarations (o.e, var & function declaration)
    - resulting local allocations are created in a local scope object before any code in the function body is run
        - var declarations create a local scope variable but do not assing a value
        - functions declaratinos create a local variable and a function object and bind the variable to the function (value ) at hoisting time.
* Hoisitng disregards progam flow logic; logically unreachable declarations can still be "hoisted" and affect your program!

*Notes 
  - Redeclarations of the same name in same scope are no-ops
  - We are ignoring the complication of deprecated "with" feature
  - ES6 allows block scoped variables with new "let" keyword
  - function declarations in a block have varied treatment in browsers (e.g., as of june2014, Chrome/Firefox traet them differently! recommend avoiding.)    
 
*/
/*
Global scope (window) => Key, Value (b,2) (f,lambda"f"), (a,1) after starting (b,3), (c,4)
*/
a = 1;
var b = 2; // in the video is with var 
/* Local scope for execution of f(#1)
Key, value => (z,1), (this,*), (arguments, pseudoArr[1]), (d,5), (e,6), (g,lambda g)
*/
function f(z) {
    b = 3;
    c = 4;
    var d = 5;
    e = 6;
/*
Local scope for execution of g(#1)
key,value -> (this,), (arguments,), (e,0) --> inner e shadows the outer e ,(d,10)
*/
    function g(){
        var e = 0; //Only using var because of the video
        d = 2*d;
        return d;
    }
    return g();
    var e; 
}
f(1); //returns 10;
//In javascript we dont have controll of the garbage collector. 
/* Closures - whence?
*Where does the concepts of closures con from?
 - Motivited by a question: 
    - What should happen (i.e, what shall we define our programming language to do) when a function is executed outside of its original scope chain?
* Many possible answers
1. you cant do that or well throw an error
2. you can do that but you must provide bindings for any free variables, in place of the scope chain resolution.
3. "You can do that and... " the original scope chain resolution will still work (Closure answer)
*Closures- what ? and how?
-What is a closure?
 closure is an implicit, permanent link between a function and its scope chain.
* what does it mean? why is this powerful?
    anytime you execute a function, it runs with a scope chain based on where it was defined(not where it is run)
*Pretty slick.. how?
 The functions hidden [[scope]] reference
    - holds the scope chain (preventing garbage collection)
    - is copied as the new scopes "outer environment reference" anytime the function is run, recreating the original chain
Closures - why?
*Without closures, we would not be able to leverage scope chain rules with asynchronous callbacks!
    -e.g., this could fail because without a closure "rule" theres no guarantee data (line2) is still around to be used later (line 4):
        //Assume we are not in the global scope...
        var data ="some info";
        setTimeout(function(){
            console.log(data);
        },1000);
Closures: what are they good for?
    - "Implicit": retain state from async invocation to response
    - "Explicit": Strongest encapsulation mechanism in Js
*Scopes persist as long as anything has a handle to them.
*So scope chains can be a source of memore leaks if 
    - We hold them unnecessarily
    -Or we hold data in them which we dont need later


 */

a = 1;
var b = 2; // in the video is with var 
/* Local scope for execution of f(#1)
Key, value => (z,1), (this,*), (arguments, pseudoArr[1]), (d,5), (e,6), (g,lambda g)
*/
function f(z) {
    b = 3;
    c = 4;
    var d = 5;
    e = 6;
/*
Local scope for execution of g(#1)
key,value -> (this,), (arguments,), (e,0) --> inner e shadows the outer e ,(d,10)
*/
    function g(){
        var e = 0; //Only using var because of the video
        d = 2*d;
        return d;
    }
    return g; // no call operator
    var e; 
}
myG = f(1) //returns a function ("g")
myG(); //Returns 10
//One easy way to implement closures: Just copy the [[scope]] reference from an function, to create the "outer environment reference" on the new scope.
/* Closures and the module pattern
*Aside from the implicit everyday necessity of closures to make async programming work he way we expect, the most useful "application" of closures is the module pattern
*Js doesnt have strong object, module, or file encapsulation
    - the one strong encapsulation we have is function scopes
    - So we create a function and use its scope as our mechanism of encapsulation - The scope contanis effectiely private locals
    - to define and expose an interface, we return an object wich has -via scope rules -access to these internal locals

*/

//Module pattern: separating the itnerface from the implementation
myAcessors = (function(){
    var data= "interesting data"; //Efectively private
    //put in any other private data, helper functions, etc
    var buffer = ".............................big";
    var getData = function() {
        console.log(data); // data resolves to out outer scope
    };
    var setData = function(val){
        data = val; //data resolves to outer scope
    };
    buffer = null;
    
    return { getData: getData, setData: setData};
})(); // IFFE: just a func expression that we call right away.
myAcessors.getData(); //Returns interesting data
myAcessors.setData("new info"); // 
myAcessors.getData(); // returns new info 

/*
Why is this useful?
Scope chains and closures underlie..
    -Many constructor-based patterns
    - Object definition patterns in many libraries
    - events and callbacks
    -more advanced async control flow patterns
    -modules and dependency management
    -functional programming patterns
    -promises and other monads
    - and much more.
*/