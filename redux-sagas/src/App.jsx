import { Container } from 'semantic-ui-react';
import { MainHeader } from './components/MainHeader';
import './App.css';
import { NewEntryForm } from './components/NewEntryForm';
import { DisplayBalance } from './components/DisplayBalance';
import { DisplayBalances } from './components/DisplayBalances';
import { EntryLine } from './components/EntryLine';

export const App = () => (
  <Container>
    <MainHeader title="Budget" />
    <DisplayBalance title="Your Balance" value="2.550,53" size="small" />
    <DisplayBalances />
    <MainHeader type="h3" title="History" />
    <EntryLine description="Padaria" value="$10.00" isExpense />
    <EntryLine description="Meliantos" value="$100.00" />
    <EntryLine description="Agua" value="$100.00" isExpense />
    <MainHeader title="Add new Transaction" type="h3" />
    <NewEntryForm />
  </Container>
);
