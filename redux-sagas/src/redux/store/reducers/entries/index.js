//import { initialEntries } from "../../../../api/fakedata"; // fake data
import entriesTypes from "../../actions/entries";

const initialEntries = [];

const entriesReducer = (state = initialEntries, action) => {
  switch (action.type) {
    case entriesTypes.POPULATION_ENTRIES:
      return action.payload;

    case entriesTypes.ADD_ENTRY:
      const newEntries = state.concat({ ...action.payload });
      return newEntries;
    case entriesTypes.REMOVE_ENTRY:
      const removeEntry = state.filter(
        (entry) => entry.id !== action.payload.id
      );
      return removeEntry;
    case entriesTypes.POPULATION_ENTRIES_DETAILS:
    case entriesTypes.UPDATE_ENTRY:
      const updateEntries = [...state];
      const index = updateEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      updateEntries[index] = {
        ...updateEntries[index],
        ...action.payload.entry,
      };

      return updateEntries;

    default:
      return state;
  }
};
export default entriesReducer;
