'use strict';

class World {
	constructor( continents ) {
		this.continents = Array.from( continents );
	}

	*[ Symbol.iterator ] () {
		for ( let continent of this.continents ) {
			yield continent.name;
		}
	}

	*getCountries() {
		for ( let continent of this.continents ) {
			yield* continent;
		}
	}
}

class Continent {
	constructor( countries ) {
		this.countries = Array.from( countries );
	}

	[ Symbol.iterator ]() {
		return this.countries[ Symbol.iterator ]();
	}
}

const europe = new Continent( [ 'Poland', 'Germany', 'Ukraine' ] );
const asia = new Continent( new Set( [ 'Japan', 'China', 'Russia' ] ) );
const africa = new Continent( [ 'Egypt', 'Turkey', 'Nigeria' ] );

const world = new World( [ europe, asia, africa ] );

for ( let country of europe ) {
	console.log( country );
}

for ( let continent of world ) {
	console.log( continent );
}

for ( let country of world.getCountries() ) {
	console.log( country );
}
