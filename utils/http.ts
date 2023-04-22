import axios from 'axios';
import { AddExpense, Expense, UpdateExpense } from '../types/common';

const BACKEND_URL = 
  'https://react-native-course-541f9-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData: AddExpense) {
  const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');
  const expenses = [] as Expense[];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount as number,
      date: new Date(response.data[key].date),
      description: response.data[key].description as string,
    }
    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id: string, expenseData: UpdateExpense) {
  axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id: string) {
  axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
