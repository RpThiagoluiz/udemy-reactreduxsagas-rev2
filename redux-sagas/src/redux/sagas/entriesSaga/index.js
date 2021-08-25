import { call, take, put } from "redux-saga/effects";
import entriesTypes from "../../store/actions/entries";
import axios from "axios";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  const { data, status } = yield call(axios, "http://localhost:3333/entries");
  try {
    if (status === 200) {
      yield put({ type: entriesTypes.POPULATION_ENTRIES, payload: data });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(`getAllEntries error`, error);
  }
}
