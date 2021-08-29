import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import entriesTypes, { removeEntryRedux } from "../../store/actions/entries";

let url = "http://localhost:3333";

export function* deleteEntrySaga() {
  // while executando multiplas vezes.
  while (true) {
    const { payload } = yield take(entriesTypes.REMOVE_ENTRY);
    yield call(deleteEntrie, payload.id);
    put(removeEntryRedux, payload.id);
    // put({ type: "REMOVE_ENTRY", payload: { id: payload.id } });
  }
}

export function* deleteEntrie(id) {
  axios.delete(`${url}/entries/${id}`);
  axios.delete(`${url}/values/${id}`);
}
