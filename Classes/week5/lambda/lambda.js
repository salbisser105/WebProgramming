// atoms
const id    = x =>      x;
const konst = x => y => x;

// id(id) === id
//const M = f=> f(f); //MockingBird its a function that takes a function and applies to its self
//M(M); 
(f => f(f)) (f=>f(f)); // apply beta reduct
(f => f(f)) (g=>g(g));
(g=>g(g))(g=>g(g));
((g=>g(g))((g=>g(g))));
(f=>f(f)) (f=>f(f))
//This that happened from line8 to 12 is Y-combinator

// derived
const F = konst (id);
const T = konst;

const pair = x => y => f => f(x)(y);
const fst  = p => p(T);
const snd  = p => p(F);

const Left   = x => f => g => f(x);
const Right  = x => f => g => g(x);
const either = e => f => g => e (f) (g);