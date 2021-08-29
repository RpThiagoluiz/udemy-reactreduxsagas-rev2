/* eslint no-return-assign: "error" */
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { MainHeader } from "./components/MainHeader";
import "./App.css";
import { NewEntryForm } from "./components/NewEntryForm";
import { DisplayBalance } from "./components/DisplayBalance";
import { DisplayBalances } from "./components/DisplayBalances";
import { EntryLineList } from "./components/EntryLineList";
import { ModalEdit } from "./components/ModalEdit";
import { getAllEntries } from "./redux/store/actions/entries";

export const App = () => {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState({}); //if null other away

  const entries = useSelector((state) => state.entries);
  const { isOpen: isOpenRedux, id } = useSelector((state) => state.modals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpenRedux, id, entries]);

  useEffect(() => {
    let totalExpense = 0;
    let totalIncome = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      }
      return (totalIncome += Number(entry.value));
    });
    setExpenseTotal(totalExpense);
    setIncomeTotal(totalIncome);
    setTotal(totalIncome - totalExpense);
  }, [entries]);

  return (
    <>
      <Container>
        <MainHeader title="Budget" />
        <DisplayBalance title="Your Balance" value={total} size="small" />
        <DisplayBalances
          incomeTotal={incomeTotal}
          expenseTotal={expenseTotal}
        />
        <MainHeader type="h3" title="History" />
        <EntryLineList data={entries} />
        <MainHeader title="Add new Transaction" type="h3" />
        <NewEntryForm />
      </Container>
      {/* // pegar os dados vc pode passar stread e pegar so os valores modificados  <ModalEdit isOpen={isOpenRedux} entry={entry} /> */}
      {/* <ModalEdit isOpen={isOpenRedux} {...entry} /> */}
      <ModalEdit isOpen={isOpenRedux} entry={entry} />
    </>
  );
};
