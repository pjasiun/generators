'use strict';

class Range {
	constructor( start, end ) {
		this.value = start;
		this.limit = end;
	}

	[ Symbol.iterator ]() {
		return this;
	}

	next() {
		if ( this.value > this.limit ) {
			return { done: true };
		} else {
			return { done: false, value: this.value++ };
		}
	}
}

function range( start, end ) {
	return new Range( start, end );
}

for ( let i = 1; i <= 10; i++ ) {
	console.log( i );
}

for ( let value of range( 1, 10 ) ) {
	console.log( value );
}

for ( let property in range( 1, 10 ) ) {
	console.log( property );
}

Array.from( range( 1, 10 ) ).forEach( ( value ) => {
	console.log( value );
} );
