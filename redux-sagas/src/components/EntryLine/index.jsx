import { Segment, Grid, Icon } from 'semantic-ui-react';

export const EntryLine = ({ description, value, isExpense = false }) => (
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
          <Icon name="trash" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);
