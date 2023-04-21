import { AddExpense, Expense, UpdateExpense } from "../types/common";
import { ExpensesContext } from "./expenses-context";
import { useReducer, ReactNode } from 'react';

type Action = {
  type: string,
  payload: any,
}

const DUMMY_EXPENSES : Expense[] = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-12-19')
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2023-01-05')
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2022-12-01')
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2023-02-18')
  },
  {
    id: 'e5',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-12-19')
  },
  {
    id: 'e6',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2023-01-05')
  },
  {
    id: 'e7',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2022-12-01')
  },
  {
    id: 'e8',
    description: 'A book',
    amount: 14.99,
    date: new Date('2023-04-18')
  },
  {
    id: 'e9',
    description: 'A book',
    amount: 14.99,
    date: new Date('2023-04-18')
  }
];

function expensesReducer(state: Expense[], action: Action ): Expense[] {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id }, ...state]
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
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData: AddExpense) {
    dispatch({ type: 'ADD', payload: expenseData});
  }

  function deleteExpense(id: string) {
    dispatch({ type: 'DELETE', payload: id});
  }

  function updateExpense(id: string, expenseData: UpdateExpense) {
    dispatch({ type: 'UPDATE', payload: {id: id, data: expenseData }});
  }

  const value = {
    expenses: expensesState, 
    addExpense, 
    deleteExpense,
    updateExpense
  }
  return <ExpensesContext.Provider value={value}>
    {children}
  </ExpensesContext.Provider>
}

export default ExpensesContextProvider;