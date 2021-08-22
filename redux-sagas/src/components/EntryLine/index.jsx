import { Segment, Grid, Icon } from 'semantic-ui-react';

//descostruir a props entries. ou passar cada uma
export const EntryLine = ({
  entry: { id, description, value, isExpense = false },
  onDeleteEntry,
}) => (
  <Segment color={isExpense ? 'red' : 'green'}>
    <Grid columns={3} textAlign="right">
      <Grid.Row>
        <Grid.Column width={10} textAlign="left">
          {description}
        </Grid.Column>
        <Grid.Column width={3} textAlign="left">
          {value}
        </Grid.Column>
        <Grid.Column width={3}>
          <Icon name="edit" />
          <Icon name="trash" onClick={() => onDeleteEntry(id)} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);
