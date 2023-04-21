import { View, StyleSheet, Text } from 'react-native'
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { Expense } from '../../types/common';
import { GlobalStyles } from '../../constants/styles';

type Props = {
  expenses: Expense[],
  expensesPeriod: string,
  fallbackText: string,
}
function ExpensesOutput({expenses, expensesPeriod, fallbackText }: Props) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }
 
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses}/>
      {content}
    </View>
  )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  }
})