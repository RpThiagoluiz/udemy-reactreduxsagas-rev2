import { Segment, Grid, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeEntryRedux } from "../../redux/store/actions/entries";
import { openEditModal } from "../../redux/store/actions/modals";

//  descostruir a props entries. ou passar cada uma
export const EntryLine = ({
  entry: { id, description, value, isExpense = false },
}) => {
  const dispatch = useDispatch();

  const onClickDelete = () => {
    dispatch(removeEntryRedux(id));
  };

  const handleOpenMolda = (key) => {
    dispatch(openEditModal(key));
  };

  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="left">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" onClick={() => handleOpenMolda(id)} />
              <Icon name="trash" onClick={onClickDelete} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};
