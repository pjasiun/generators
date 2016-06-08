'use strict';

function* range( start, end ) {
	while ( start < end ) {
		yield start++;
	}
	yield end;
}

function count( iterator ) {
	let count = 0;
	for ( let value of iterator ) {
		count++;
	}

	return count;
}

// const ten = Array.from( range( 1, 10 ) );
const ten = [ ...range( 1, 10 ) ];
// const ten = range( 0, 10 );

// for ( let value of ten ) {
// 	console.log( value );
// }

console.log( count( ten ) );
console.log( count( ten ) );
