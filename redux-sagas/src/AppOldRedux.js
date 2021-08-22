// const store = createStore((state = initialEntries, action) => {
//   switch (action.type) {
//     case "ADD_ENTRY":
//       const newEntries = state.concat({ ...action.payload });
//       return newEntries;
//     case "REMOVE_ENTRY":
//       const removeEntry = state.filter(
//         (entry) => entry.id !== action.payload.id
//       );
//       return removeEntry;

//     default:
//       return state;
//   }
// });

// store.subscribe(() => {
//   console.log(`thiago Store`, store.getState());
// });
// const payloadAdd = {
//   id: 5,
//   description: "Hello From Redux",
//   value: 100,
//   isExpense: false,
// };
// // const payloadRemove = {
// //   id: 1,
// // };

// const addEntryRedux = (payload) => {
//   return { type: "ADD_ENTRY", payload };
// };

// const removeEntryRedux = (id) => {
//   // return { type: "REMOVE_ENTRY", payload: payloadRemove };
//   return { type: "REMOVE_ENTRY", payload: { id } };
// };

// store.dispatch(addEntryRedux(payloadAdd));
// // console.log(`thiago Store`, store.getState());
// // Msm coisa so vai mudar a sintaxe utilizada
// store.dispatch(removeEntryRedux(1));
// // store.dispatch({ type: "REMOVE_ENTRY", payload: payloadRemove });
// // console.log(`thiago Store`, store.getState());
