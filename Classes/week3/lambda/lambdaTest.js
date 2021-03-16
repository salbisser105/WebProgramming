//requires lambda.js

let ok = [];
//
// // id
// ok.push( id(1) === 1 );
// ok.push( id(id) === id );
//
// konst
// ok.push( konst(42)(0) === 42 );
// ok.push( konst(42)(1) === 42 );
// ok.push( konst(42)(null) === 42 );
// const konst = x> y => x;
//
// // kite
// ok.push( snd(null)(42) === 42 );
// const snd = x => y =>y;
// // true
//
// ok.push( T(1)(0) === 1 );  const T = first =>second => first; KESTEL  const T = konst;
// ok.push( F(1)(0) === 0 );  const F = first => second => second; KITE  const F = snd;
//
// // and          const and = p=> q => p ( q (T) (F)) (q (F) (F) );
//const and = p=> q => p ( q (T) (F)) (F); --> different ways to do it 
//const and = p=> q => p (q)(p);
// ok.push( and(F)(F) === F );
// ok.push( and(T)(F) === F );
// ok.push( and(F)(T) === F );
// ok.push( and(T)(T) === T );
//
// // or
// ok.push( or(F)(F) === F );
// ok.push( or(T)(F) === T );
// ok.push( or(F)(T) === T );
// ok.push( or(T)(T) === T );
// const or = p =>q => p(q(T) (T)) (q(T) (F));  
// const or = p =>q => p(T) (q);
// const or = p => q => p(p)(q);
// const and =p => qq => p(q)(p);
// flip
// flip(f)(x)(y) = f(y)(x)
//
// // not
//const not = p => p(F)(T)
// // beq
//
// // Pair
//const Pair = first => second=>  selector =>selector(first)(second) ;
//const firstname = konst;const firstname = first =>second =>first; 
//const lastname = snd;//const lastname = first => second => second;
// const dierk = Pair("Dierk")("König"); // immutable
// ok.push( dierk(firstname) === "Dierk");
// ok.push( dierk(lastname)  === "König");
//
// const tdierk = Triple("Dierk")("König")(50); // immutable
// ok.push( tdierk(tfirstname) === "Dierk");
// ok.push( tdierk(tlastname)  === "König");
// ok.push( tdierk(tage)       === 50);
//
// // tuple
// const [Person, fn, ln, ag] = Tuple(3);
// const person = Person("Dierk")("König")(50);
// ok.push( person(fn) === "Dierk");
// ok.push( person(ln) === "König");
// ok.push( person(ag) === 50);
//
// // composed Tuple
//
// const [Team, lead, deputy] = Tuple(2);
// const team = Team (person) (Person("Roger")("Federer")(35));
// ok.push( team(lead)(fn)   === "Dierk");
// ok.push( team(deputy)(ln) === "Federer");
//
// // Pair equal
//
// // either
//
const Left  = x=> f => g=> f(x);
const Right  = x=> f=> g => g(x);
// const either = id; you could return either from line 87 
const either = e => f => g => e(f)(g); //F = left case G = rightcase 
const safeDiv = num => divisor =>
    divisor === 0
    ? Left("cannot divide by 0!")
    : Right(num / divisor);
 either( safeDiv(1)(0)  )
       ( x => console.error(x))
       ( x => console.log(x)); // do not forget to deal with the arrow function

const eShow = safeDiv => {}

//
// const [Cash, CreditCard, Invoice, PayPal, pay] = Choice(4);
// const cash = Cash ();
// const card = CreditCard ("0000-1111-2222-3333");
// const invo = Invoice    ({name:"Roger", number:"4711"});
// const pal  = PayPal     (person);  // the payload can be a partially applied function, e.g. Tuple ctor
// const doPay = method =>
//     pay (method)
//         ( _       => "paid cash")
//         ( number  => "credit card "+number)
//         ( account => account.name + " " + account.number )
//         ( person  => "pal: " + person(fn) );
//
// ok.push( doPay(cash) === "paid cash");
// ok.push( doPay(card) === "credit card 0000-1111-2222-3333");
// ok.push( doPay(invo) === "Roger 4711");
// ok.push( doPay(pal ) === "pal: Dierk");




// test result report
if ( ok.every( elem => elem) ) {
    document.writeln("All "+ ok.length +" tests ok.");
} else {
    document.writeln("Not all tests ok! Details:");
    for (let i = 0; i<ok.length; i++) {
        if(ok[i]) {
            document.writeln("Test "+ i +" ok");
        } else {
            document.writeln("Test "+ i +" failed");
        }
    }
}