import { FlatList, Text } from 'react-native'
import { Expense } from '../../types/common'
import ExpenseItem from './ExpenseItem'

type Props = {
  expenses: Expense[],
}

function renderExpenseItem(item: Expense) {
  return (
    <ExpenseItem {...item}/>
  )
}
function ExpensesList({ expenses } : Props) {
  return (
    <FlatList 
      data={expenses}
      renderItem={(itemData) => renderExpenseItem(itemData.item)}
      keyExtractor={(item) => item.id}
    />
  )
}

export default ExpensesList