import { useState } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, Form, Segment } from "semantic-ui-react";
import { addEntryRedux } from "../../redux/store/actions/entries";
import { ButtonSaveOrCancel } from "../ButtonSaveOrCancel";
import { uuid } from "uuidv4";

export const NewEntryForm = ({ inModal }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);

  const dispatch = useDispatch();

  const resetState = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  const addEntry = () => {
    try {
      dispatch(
        addEntryRedux({
          id: uuid(),
          description,
          value,
          isExpense,
        })
      );
      resetState();
    } catch (error) {
      console.log(`erro addEntry`, error);
    }
  };

  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
        />
        <Form.Input
          icon="dollar"
          iconPosition="left"
          width={4}
          label="Value"
          placeholder=" 100.00"
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          label="is expense"
          toggle
          checked={isExpense}
          onChange={() => setIsExpense((prevState) => !prevState)}
        />
      </Segment>
      {!inModal && <ButtonSaveOrCancel addEntry={addEntry} />}
    </Form>
  );
};
