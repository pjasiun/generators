'use strict';

function* filter( iterator, filter ) {
	for ( let value of iterator ) {
		if ( filter( value ) ) {
			yield value;
		}
	}
}

const numbers = [ 1, 2, 3, 4, 5 ];
for ( let number of filter( numbers, ( v ) => v > 3 ) ) {
	console.log( number );
}

// comprehensions
const moreThenThree = ( for ( number of numbers ) if ( number > 3 ) number );
for ( let number of moreThenFive ) {
	console.log( number );
}
