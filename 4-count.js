'use strict';

function* range( start, end ) {
	while ( start < end ) {
		yield start++;
	}
	yield end;
}

function count( iterator ) {
	let count = 0;
	for ( let _ of iterator ) {
		count++;
	}

	return count;
}

function first( iterator ) {
	return iterator.next().value;
}

const ten = range( 1, 10 );
// const ten = Array.from( range( 1, 10 ) );
// const ten = [ ...range( 1, 10 ) ];

// for ( let value of ten ) {
// 	console.log( value );
// }

// console.log( count( ten ) );
// console.log( count( ten ) );

// console.log(first(ten));
// console.log(count(ten));

// if (first(ten) == 1 ) {
// 	console.log(count(ten));
// }

// const array = ['a', 'b', 'c'];
// console.log(first(array[Symbol.iterator]()));
