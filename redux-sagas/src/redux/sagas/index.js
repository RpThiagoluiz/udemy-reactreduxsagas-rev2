//import * as testSagas from "./testSaga";
import * as entriesSaga from "./entriesSaga";
import * as entriesSagaDelete from "./entriesSaga/delete";

export function initSagas(sagaMiddleware) {
  // Object.values(testSagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSagaDelete).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
}
