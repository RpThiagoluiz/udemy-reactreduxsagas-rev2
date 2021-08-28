import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addEntryRedux,
  updateEntryRedux,
} from "../redux/store/actions/entries";
import { v4 as uuidv4 } from "uuid";
import { closeEditModal } from "../redux/store/actions/modals";

export function useEntryDetails(desc = "", val = "", isExp = true) {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  function resetValues() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

  function updateEntry(id) {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closeEditModal());
    resetValues();
  }

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    resetValues();
  }

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
    updateEntry,
  };
}
