import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import entriesReducer from "./reducers/entries";
import modalReducer from "./reducers/modals";

//Msm coisa - so q aqui vc exporta uma function
// const configureStore = () => (
//   createStore(
//     combineReducers({
//       entriesReducer,
//     })
//   )
// )

const allReducers = combineReducers({
  entries: entriesReducer,
  modals: modalReducer,
});

const store = createStore(allReducers, composeWithDevTools());

export default store;
