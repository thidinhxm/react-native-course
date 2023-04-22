import { createContext } from 'react';
import { AddExpense, UpdateExpense, Expense } from '../types/common';

export const ExpensesContext = createContext({
  expenses: [] as Expense[],
  addExpense: (id: string, {description, amount, date} : AddExpense) => {},
  setExpenses: (expenses: Expense[]) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, {description, amount, date}: UpdateExpense) => {}
});