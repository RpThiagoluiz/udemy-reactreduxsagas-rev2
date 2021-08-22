import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import { MainHeader } from './components/MainHeader'
import './App.css'
import { NewEntryForm } from './components/NewEntryForm'
import { DisplayBalance } from './components/DisplayBalance'
import { DisplayBalances } from './components/DisplayBalances'
import { EntryLine } from './components/EntryLine'
import { initialEntries } from './api/fakedata'
import { EntryLineList } from './components/EntryLineList'

export const App = () => {
  const [entries, setEntries] = useState(initialEntries)

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id)
    setEntries(result)
  }
  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance title='Your Balance' value='2.550,53' size='small' />
      <DisplayBalances />
      <MainHeader type='h3' title='History' />
      <EntryLineList data={entries} onDeleteEntry={deleteEntry} />
      <MainHeader title='Add new Transaction' type='h3' />
      <NewEntryForm />
    </Container>
  )
}
