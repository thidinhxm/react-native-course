import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { useContext, useEffect, useState } from 'react';
import { fetchExpenses } from '../utils/http';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses');
      }
      setIsFetching(false);
    }
    getExpenses();
    
  }, []);

  function errorHandler() {
    setError('');

  }
  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }
  
  return (
    <ExpensesOutput 
      expensesPeriod='Total' 
      expenses={expensesCtx.expenses}
      fallbackText='No registered expenses found'
    />
  )
}

export default AllExpenses;