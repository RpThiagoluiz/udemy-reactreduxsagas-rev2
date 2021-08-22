import { Button, Modal } from 'semantic-ui-react';
import { NewEntryForm } from '../NewEntryForm';

export const ModalEdit = ({
  isOpen,
  setIsOpen,
  addEntry,
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) => (
  <Modal open={isOpen}>
    <Modal.Header>Edit Entry</Modal.Header>
    <Modal.Content>
      <NewEntryForm
        inModal
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button onClick={() => setIsOpen(false)} primary>
        Ok
      </Button>
    </Modal.Actions>
  </Modal>
);
