import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { initSagas } from "../sagas";
import { middlewares, sagaMiddleware } from "./middleware";
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

const store = () => {
  const result = createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalReducer,
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  // papel de juntar todos os sagas em 1 so chamada
  initSagas(sagaMiddleware);
  return result;
};

export default store;
