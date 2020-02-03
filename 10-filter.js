'use strict';

function* filter( iterator, filter ) {
	for ( let value of iterator ) {
		if ( filter( value ) ) {
			yield value;
		}
	}
}

const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
for ( let number of filter( numbers, ( v ) => v > 5 ) ) {
	console.log( number );
}

// Generator comprehensions (curently support only by Firefox)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions
const moreThenFive = ( for ( v of numbers ) if ( v > 5 ) v );
for ( let number of moreThenFive ) {
	console.log( number );
}
