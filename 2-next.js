'use strict';

let value = 0;

const range = {
	[ Symbol.iterator ]: () => {
		return {
			next: () => {
				if ( value < 10 ) {
					value++;
					return { done: false, value: value };
				} else {
					return { done: true };
				}
			}
		};
	},

};


// const iterator = range[ Symbol.iterator ]();
// console.log( iterator.next() );
// console.log( iterator.next() );
// console.log( iterator.next() );

// const iterator = range[ Symbol.iterator ]();
// let step = iterator.next();
// while ( !step.done ) {
// 	console.log( step.value );
// 	step = iterator.next();
// }

// for ( let value of range ) {
// 	console.log( value );
// }

// const array = [ 1, 2, 3, 4, 5 ];

// const iterator = array[ Symbol.iterator ]();
// console.log( iterator.next() );
// console.log( iterator.next() );
// console.log( iterator.next() );
// console.log( iterator.next() );
// console.log( iterator.next() );
// console.log( iterator.next() );
// console.log( iterator.next() );

// for ( let value of array ) {
// 	console.log( value );
// }
