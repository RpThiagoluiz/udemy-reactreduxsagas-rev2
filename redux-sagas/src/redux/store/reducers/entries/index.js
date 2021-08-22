import { initialEntries } from "../../../../api/fakedata"; // fake data

const entriesReducer = (state = initialEntries, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      const newEntries = state.concat({ ...action.payload });
      return newEntries;
    case "REMOVE_ENTRY":
      const removeEntry = state.filter(
        (entry) => entry.id !== action.payload.id
      );
      return removeEntry;

    default:
      return state;
  }
};
export default entriesReducer;
