'use strict';

// function getCountries(request) {
//     console.log('request', request);

//     if (request == 'Asia') {
//         setTimeout(() => {
//             let response = ['Japan', 'China', 'Russia'];
//             request = async(response);
//         }, 3000)
//     }
// }

function* main() {
    const europe = ['Poland', 'Germany', 'Ukraine'];
    console.log('europe', europe );
    const asia = yield getCountries('Asia');
    console.log('asia', asia);
}

// const task = function* () {
//     yield* main();
//     yield;
// }();

// task.next();

// function async(...args) {
//     task.next(...args);
// }
