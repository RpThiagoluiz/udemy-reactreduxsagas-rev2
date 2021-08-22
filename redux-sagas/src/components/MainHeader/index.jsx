import { Header } from 'semantic-ui-react'

export const MainHeader = ({ title, type = 'h1' }) => (
  <Header as={type}>{title}</Header>
)
