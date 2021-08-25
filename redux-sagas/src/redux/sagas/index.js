//import * as testSagas from "./testSaga";
import * as entriesSaga from "./entriesSaga";

export function initSagas(sagaMiddleware) {
  // Object.values(testSagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
