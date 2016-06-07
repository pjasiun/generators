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

function* oneTwoThreeGo() {
	yield* oneTwoThree();
	yield '-';
	yield* range( 1, 8 );
	yield '-';
	yield* range( 1, 8 );
}

for ( let value of oneTwoThreeGo() ) {
	console.log( value );
}
