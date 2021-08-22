import { Checkbox, Form, Segment } from 'semantic-ui-react';
import { ButtonSaveOrCancel } from '../ButtonSaveOrCancel';

export const NewEntryForm = ({
  addEntry,
  inModal,
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) => (
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
