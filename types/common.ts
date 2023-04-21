export type Expense = {
  id: string,
  description: string,
  amount: number,
  date: Date
}

export type AddExpense = {
  description: string,
  amount: number,
  date: Date
};

export type UpdateExpense = AddExpense;