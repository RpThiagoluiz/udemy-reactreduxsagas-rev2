import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { useEntryDetails } from "../../hooks/useEntryDetails";
import { closeEditModal } from "../../redux/store/actions/modals";
import { NewEntryForm } from "../NewEntryForm";

export const ModalEdit = ({ isOpen, entry }) => {
  const dispatch = useDispatch();
  // !important - msm dando update aq, vc precisa passar o useEffect no hook pra pegar.

  const entryUpdate = useEntryDetails(
    entry?.description,
    entry?.value,
    entry?.isExpense
  );

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <NewEntryForm
          inModal
          description={entryUpdate?.description}
          setDescription={entryUpdate.setDescription}
          value={entryUpdate?.value}
          setValue={entryUpdate.setValue}
          isExpense={entryUpdate?.isExpense}
          setIsExpense={entryUpdate.setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Cancel</Button>
        <Button onClick={() => entryUpdate.updateEntry(entry?.id)} primary>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
