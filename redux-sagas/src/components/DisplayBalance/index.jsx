import { Statistic } from 'semantic-ui-react'

export const DisplayBalance = ({
  color = 'black',
  value = '00.00',
  title = 'None',
  size = 'tiny',
}) => (
  <Statistic size={size} color={color}>
    <Statistic.Label style={{ textAlign: 'left' }}>{title}: </Statistic.Label>
    <Statistic.Value>{value}</Statistic.Value>
  </Statistic>
)
