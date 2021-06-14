import { Suite } from "../test/test.js"

const crazySuite = Suite("crazy");

crazySuite.add("equals", assert => {

    const a = "0";
    const b =  0;
    const c = [];

    // assert.is( a == b, );
    // assert.is( b == c, );
    // assert.is( a == c, );
});

crazySuite.add("false", assert => {

    assert.true( ! false     );
    assert.true( ! null      );
    assert.true( ! undefined );
    assert.true( ! ""        );
    assert.true( ! 0         );
});

crazySuite.add("coercion", assert => {

    assert.true( "1"   == 1     );
    assert.true( +"2"  == 2     );
    assert.true( !"0"  == false );
    assert.true( !!"0" == true  );
    assert.is  ( Number("0"), 0 );
});

crazySuite.add("object", assert => {

    const coerce = x => x ? true : false ;

    // assert.is( coerce("0")            , );
    // assert.is( coerce(+"0")           , );
    // assert.is( coerce(Number("0"))    , );
    // assert.is( coerce(new Number("0")), );

});

crazySuite.add("refactor", assert => {
    //if we give 1 it works fine, empty string, works, nonempty string works , backslash t, 
    const x ="0"; // fill here
    //Tricky treat is that if you see that constructor you assume x is a boolean value, you lost the overview. 
    //Never use the == operator if we see the == operator it means the programmer is not aware of what he is doing 
    const if_1 = x => (x == true) ? true : false ;              // Code version 1 
    const if_2 = x =>  x          ? true : false ; // safe refactoring ???        Code version 2  those 2 are tipical construction that we often see 
    // those 2 construction from up are ALWAYS the same.   
    assert.is( if_1(x), if_2(x) );  // is this true for every x ???

});


crazySuite.add("other", assert => {

    assert.is( "2" + 1,    /* "21"  should not be able */);
    assert.is( "2" - 1,    1 /* numerical binary operator is always the same way and is inconsenstly . + can be used for numerical or other values */  );
    assert.is( "2" - - 1,   /* here you actually do +1  this returns a 3 */ );
    assert.is( 1 + 2 + "3",  /*possible values, 123 (not the case), 33 -> is the case, or 6 ->  */);

    assert.is( +true,       /* 1*/ );
    // assert.is( +false,       /* 0*/  );
    // assert.is( true + true,   /* 2*/ );
    // assert.is( [] == [],     /* this is false */  );
    // assert.is( [] == ![],     /* true*/ );
    // assert.is( +[],          /* 0*/  );
    // assert.is( 2 == [2],     /* true*/  );
    // assert.is( [] + {},     /*[object Object] */  );
    // assert.is( {} + [],      /*  */  );

});

crazySuite.add("numbers", assert => {

    // assert.is(Number("-0") ,           /* 0 */   );
    // assert.is(JSON.parse("-0") ,       /*-0*/   );
    // assert.is(JSON.stringify(-0) ,     /* 0 */   );
    // assert.is(String(-0) ,             /* 0 */   );
    // assert.is(typeof null ,            /* object */   );
    // assert.is(null instanceof Object , /* false */   );
    // assert.is(typeof NaN ,             /* number */   );
      //
    // assert.is(typeof (1/0) ,           /* number*/   );
    // assert.is(0.1 + 0.2 === 0.3 ,      /* false / always asume there is a rounding error  */   );
    // assert.is(999999999999999999 ,     /* 1_0000_000_000... */   );
    // assert.is(Number.MAX_VALUE > 0 ,   /*true */   );
    // assert.is(Number.MIN_VALUE < 0 ,   /* false */   );
     //
    // assert.is(Math.min(1, 2, 3) < Math.max(1, 2, 3) ,  /* true (remember to leave out true so it works ) */   );
    // assert.is(Math.min() < Math.max(),   /* false */  );

});

crazySuite.add("compare", assert => {

    // assert.is(1 < 2 < 3 ,        /* true  */      );
    // assert.is(3 > 2 > 1 ,        /* false  */      );
 
    // assert.is( {} == {} ,        /*false  */      );
    // assert.is( {} >  {} ,        /* false*/      );
    // assert.is( {} >= {} ,        /*true  */      ); // a >= b will be replaced by !(a < b )

});


crazySuite.run();