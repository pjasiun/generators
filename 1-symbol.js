'use strict';

let uniq = Symbol();

let foo = {};
foo[ uniq ] = 'bar';

console.log( foo );
console.log( foo[ uniq ] );
