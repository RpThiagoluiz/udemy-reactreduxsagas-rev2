import { Segment, Grid } from 'semantic-ui-react';
import { DisplayBalance } from '../DisplayBalance';

export const DisplayBalances = () => (
  <Segment textAlign="center">
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <DisplayBalance title="Income" value="1502.52" color="green" />
        </Grid.Column>
        <Grid.Column>
          <DisplayBalance title="Expense" value="69.69" color="red" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);
