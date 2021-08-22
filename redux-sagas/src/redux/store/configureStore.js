import { createStore, combineReducers } from "redux";
import entriesReducer from "./reducers/entries";

//Msm coisa
// const configureStore = () => (
//   createStore(
//     combineReducers({
//       entriesReducer,
//     })
//   )
// )

const allReducers = combineReducers({
  entries: entriesReducer,
});

const store = createStore(allReducers);

export default store;
