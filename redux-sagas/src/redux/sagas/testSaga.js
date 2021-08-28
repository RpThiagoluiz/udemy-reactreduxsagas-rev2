// // Sagas function precisa ser uma generation function
// import { delay, take, put, call } from "redux-saga/effects";

// // call chama a funcao
// function double(number) {
//   return number * 2;
// }

// export function* testSgas() {
//   while (true) {
//     const state = yield take("TEST_MESSAGE");
//     const resultCall = yield call(double, 2);
//     console.log(`Call yieldDouble`, resultCall);
//     const resultNoCall = yield double(2);
//     console.log(`double`, resultNoCall);
//     console.log(`finish saga`, state);
//   }
// }

// // export function* testSga() {
// //   while (true) {
// //     console.log(`Starting Saga`);
// //     const state = yield take("TEST_MESSAGE");
// //     console.log(`finish`, state);
// //   }
// // }

// // export function* dispatchTest() {
// //   // cada vez ela rodar traz algo
// //   while (true) {
// //     yield delay(1000);
// //     yield put({ type: "TEST_MESSAGE", payload: 1000 });
// //   }
// // }

// // daq vai pro store
