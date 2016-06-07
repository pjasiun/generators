'use strict';

function* oneTwoThree() {
	yield 1;
	yield 2;
	yield 3;
}

for ( let value of oneTwoThree() ) {
	console.log( value );
}

function* range( start, end ) {
	while ( start < end ) {
		yield start++;
	}
	yield end;
}

for ( let i = 1; i <= 10; i++ ) {
	console.log( i );
}

for ( let value of range( 1, 10 ) ) {
	console.log( value );
}

Array.from( range( 1, 10 ) ).forEach( ( value ) => {
	console.log( value );
} );
