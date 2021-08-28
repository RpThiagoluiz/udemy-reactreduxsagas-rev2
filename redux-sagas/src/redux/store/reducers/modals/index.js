import modalTypes from "../../actions/modals";

const initialState = {
  isOpen: false,
  id: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalTypes.OPEN_EDIT_MODAL:
      return { ...state, isOpen: true, id: action.payload.id };
    case modalTypes.CLOSE_EDIT_MODAL:
      return { ...state, isOpen: false, id: null };
    default:
      return state;
  }
};

export default modalReducer;
