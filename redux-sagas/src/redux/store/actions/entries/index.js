const addEntryRedux = (payload) => {
  return { type: "ADD_ENTRY", payload };
};

const removeEntryRedux = (id) => {
  return { type: "REMOVE_ENTRY", payload: { id } };
};

// eslint-disable-next-line
export default { addEntryRedux, removeEntryRedux };
