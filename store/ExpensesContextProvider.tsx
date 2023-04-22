import { AddExpense, Expense, UpdateExpense } from "../types/common";
import { ExpensesContext } from "./expenses-context";
import { useReducer, ReactNode } from 'react';

type Action = {
  type: string,
  payload: any,
}

function expensesReducer(state: Expense[], action: Action ): Expense[] {
  switch (action.type) {
    case 'ADD':
      return [{...action.payload }, ...state];
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({children} : {children: ReactNode}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(id: string, expenseData: AddExpense) {
    dispatch({ type: 'ADD', payload: {...expenseData, id}});
  }

  function setExpenses(expenses: Expense[]) {
    dispatch({ type: 'SET', payload: expenses });
  } 

  function deleteExpense(id: string) {
    dispatch({ type: 'DELETE', payload: id});
  }

  function updateExpense(id: string, expenseData: UpdateExpense) {
    dispatch({ type: 'UPDATE', payload: {id: id, data: expenseData }});
  }

  const value = {
    expenses: expensesState, 
    setExpenses,
    addExpense, 
    deleteExpense,
    updateExpense
  }
  return <ExpensesContext.Provider value={value}>
    {children}
  </ExpensesContext.Provider>
}

export default ExpensesContextProvider;