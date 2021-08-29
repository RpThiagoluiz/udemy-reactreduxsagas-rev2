const types = {
  GET_ENTRIES: "GET_ENTRIES",
  POPULATION_ENTRIES: "POPULATION_ENTRIES",
  POPULATION_ENTRIES_DETAILS: "POPULATION_ENTRIES_DETAILS",
  ADD_ENTRY: "ADD_ENTRY",
  REMOVE_ENTRY: "REMOVE_ENTRY",
  UPDATE_ENTRY: "UPDATE_ENTRY",
};

export const getAllEntries = () => {
  return { type: types.GET_ENTRIES };
};

export const populationEntries = (entries) => {
  return { type: types.POPULATION_ENTRIES, payload: entries };
};

export const populationEntriesDetails = (id, entry) => {
  return {
    type: types.POPULATION_ENTRIES_DETAILS,
    payload: { id, entry },
  };
};

export const addEntryRedux = (payload) => {
  return { type: types.ADD_ENTRY, payload };
};

export const removeEntryRedux = (id) => {
  return { type: types.REMOVE_ENTRY, payload: { id } };
};

export const updateEntryRedux = (id, entry) => {
  return { type: types.UPDATE_ENTRY, payload: { id, entry } };
};

// eslint-disable-next-line
//export default { addEntryRedux, removeEntryRedux };

export default types;
