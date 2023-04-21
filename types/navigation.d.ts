import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  ManageExpense: { expenseId: string };
  ExpensesOverview: undefined;
};

export type BottomTabsParamList = {
  RecentExpenses: undefined;
  AllExpenses: undefined;
};

export type ManageExpenseNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ManageExpense'>;

export type ManageExpenseScreenProps = NativeStackScreenProps<RootStackParamList, 'ManageExpense'>;
