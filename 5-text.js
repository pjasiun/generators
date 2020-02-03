'use strict';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, scelerisque vitae pharetra vel, dapibus eu massa. Pellentesque viverra nisi libero, quis fringilla enim bibendum at. Vivamus in est ipsum. Vestibulum ut neque id est posuere mattis vel quis risus. Donec tincidunt posuere tellus nec pellentesque. Sed consequat mauris in enim tincidunt ultrices. Ut tincidunt metus velit, in interdum dui lobortis non.';

function* getWords( text ) {
	let word = '';

	for ( let character of text ) {
		if ( '.,! '.indexOf( character ) == -1 ) {
			word += character;
		} else if ( word !== '' ) {
			yield word;
			word = '';
		}
	}
}

function hasAmet( text ) {
	for ( let word of getWords( text ) ) {
		if ( word == 'amet' ) {
			return true;
		}
	}

	return false;
}

console.log( hasAmet( text ) );
