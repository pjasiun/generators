'use strict';

function* oneTwoThree() {
	yield 1;
	yield 2;
	yield 3;
}

function* range( start, end ) {
	while ( start < end ) {
		yield start++;
	}
	yield end;
}

// function* oneTwoThreeGo() {
// 	// const iterator = oneTwoThree();
// 	// yield* iterator;
// 	// yield* iterator;
// 	yield* oneTwoThree();
// 	// yield* [ 1, 2, 3 ];
// 	yield '-';
// 	yield* range( 1, 8 );
// 	yield '-';
// 	yield* range( 1, 8 );
// }

// for ( let value of oneTwoThreeGo() ) {
// 	console.log( value );
// }
