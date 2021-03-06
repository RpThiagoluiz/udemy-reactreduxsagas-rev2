import { Segment, Grid } from 'semantic-ui-react';
import { DisplayBalance } from '../DisplayBalance';

export const DisplayBalances = ({ expenseTotal, incomeTotal }) => (
  <Segment textAlign="center">
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <DisplayBalance title="Income" value={incomeTotal} color="green" />
        </Grid.Column>
        <Grid.Column>
          <DisplayBalance title="Expense" value={expenseTotal} color="red" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);
