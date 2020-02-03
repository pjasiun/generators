'use strict';

function getCountries(request) {
    console.log('request', request);

    if (request == 'Asia') {
        setTimeout(() => {
            let response = ['Japan', 'China', 'Russia'];
            request = m.next(response);
        }, 3000)
    }
}

function* main() {
    const europe = ['Poland', 'Germany', 'Ukraine'];
    console.log('europe', europe );
    const asia = yield getCountries('Asia');
    console.log('asia', asia);
}

const m = function* () {
    yield* main();
    yield;
}();

m.next();
