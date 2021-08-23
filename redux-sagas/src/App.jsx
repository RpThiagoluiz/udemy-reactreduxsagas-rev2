/* eslint no-return-assign: "error" */
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { MainHeader } from "./components/MainHeader";
import "./App.css";
import { NewEntryForm } from "./components/NewEntryForm";
import { DisplayBalance } from "./components/DisplayBalance";
import { DisplayBalances } from "./components/DisplayBalances";
import { EntryLineList } from "./components/EntryLineList";
import { ModalEdit } from "./components/ModalEdit";

export const App = () => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState("");
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const entries = useSelector((state) => state.entries);

  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      // setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line
  }, [isOpen]);

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

  const addEntry = () => {
    const result = entries.concat({
      id: entries.lenght + 1,
      description,
      value,
      isExpense,
    });
    console.log(result);
    //setEntries(result);
    resetEntry();
  };

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setEntryId(entry.id);
      setIsOpen(true);
    }
  };

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
        <EntryLineList data={entries} editEntry={editEntry} />
        <MainHeader title="Add new Transaction" type="h3" />
        <NewEntryForm />
      </Container>
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </>
  );
};
