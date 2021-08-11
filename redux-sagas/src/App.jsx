import {
  Container,
  Grid,
  Header,
  Segment,
  Statistic,
  Icon,
} from 'semantic-ui-react';
import './App.css';

export const App = () => (
  <Container>
    <Header as="h1">Budget</Header>
    <Statistic size="small">
      <Statistic.Label>Your Balance:</Statistic.Label>
      <Statistic.Label>2.550,53</Statistic.Label>
    </Statistic>
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Statistic size="tiny" color="green">
              <Statistic.Label style={{ textAlign: 'left' }}>
                Incoming:
              </Statistic.Label>
              <Statistic.Value>1.045,50</Statistic.Value>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic size="tiny" color="red">
              <Statistic.Label style={{ textAlign: 'left' }}>
                Expenses:
              </Statistic.Label>
              <Statistic.Value>699,59</Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Header as="h3">History</Header>
    <Segment color="red">
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            Something
          </Grid.Column>
          <Grid.Column width={3} textAlign="left">
            $10,00
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" />
            <Icon name="trash" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment color="green">
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            Something
          </Grid.Column>
          <Grid.Column width={3} textAlign="left">
            $10,00
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" />
            <Icon name="trash" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment color="red">
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            Something
          </Grid.Column>
          <Grid.Column width={3} textAlign="left">
            $10,00
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" />
            <Icon name="trash" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
);
