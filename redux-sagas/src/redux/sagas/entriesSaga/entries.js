import { call, take, put, fork } from "redux-saga/effects";
import entriesTypes, {
  populationEntries,
  populationEntriesDetails,
} from "../../store/actions/entries";
import axios from "axios";

let url = "http://localhost:3333";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  const { data, status } = yield call(axios, `${url}/entries`);
  try {
    if (status === 200) {
      yield put(populationEntries(data));
      //{ type: entriesTypes.POPULATION_ENTRIES, payload: data } - substituido pela chamada
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(`getAllEntries error`, error);
  }
}

export function* getEntryDetails(id) {
  try {
    const { data, status } = yield call(axios, `${url}/values/${id}`);
    if (status === 200) {
      yield put(populationEntriesDetails(id, data));
      // yield put({
      //   type: entriesTypes.POPULATION_ENTRIES_DETAILS,
      //   payload: { id, entry: data },
      // });
    }
  } catch (error) {
    console.log(`getEntryDetails error`, error);
  }
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATION_ENTRIES);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    //antes de termionar com essa ele executa a de cima
    yield fork(getEntryDetails, entry.id);
  }
}
