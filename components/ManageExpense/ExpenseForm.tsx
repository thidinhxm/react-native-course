import { StyleSheet, Text, View, Alert } from 'react-native';
import Input from './Input';
import Button from '../UI/Button';
import { useState } from 'react';
import { AddExpense, Expense, UpdateExpense } from '../../types/common';
import { getFormattedDate } from '../../utils/date';
import { GlobalStyles } from '../../constants/styles';

type InputIdentifier = 'amount' | 'date' | 'description';

type Props = {
  onCancel: () => void,
  onSubmit: (expenseData: AddExpense | UpdateExpense) => void,
  submitButtonLabel: string,
  defaultValue: Expense | undefined
}
function ExpenseForm({onCancel, onSubmit, submitButtonLabel, defaultValue}: Props) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValue ? getFormattedDate(defaultValue.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description: '',
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier: InputIdentifier, enteredValue: string) {
    setInputs((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      }
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    setInputs((curInputs) => {
      return {
        amount: { value: curInputs.amount.value, isValid: amountIsValid },
        date: { value: curInputs.date.value, isValid: dateIsValid },
        description: { value: curInputs.description.value, isValid: descriptionIsValid},
      }
    });
    
    if (amountIsValid && dateIsValid && descriptionIsValid) {
      onSubmit(expenseData);
      return;
    }
    
  }

  const formIsInvalid = !inputs.amount.isValid 
                      || !inputs.date.isValid 
                      || !inputs.description.isValid;
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input 
          label='Amount' 
          textInputProps={{
            keyboardType: 'decimal-pad',
            onChangeText: (enteredValue) => inputChangeHandler('amount', enteredValue),
            value: inputs.amount.value,
          }}
          style={styles.rowInput}
          invalid={!inputs.amount.isValid}
        />
        <Input 
          label='Date' 
          textInputProps={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: (enteredValue) => inputChangeHandler('date', enteredValue),
            value: inputs.date.value,
          }}
          style={styles.rowInput}
          invalid={!inputs.date.isValid}
        />
      </View>
      <Input 
        label='Description' 
        textInputProps={{
          multiline: true,
          // autoCapitalize: 'none',
          // autoCorrect: false,
          onChangeText: (enteredValue) => inputChangeHandler('description', enteredValue),
            value: inputs.description.value,

        }}
        invalid={!inputs.description.isValid}
        />
      {formIsInvalid && <Text style={styles.errorText}>
        Invalid input values - please check your entered data!</Text>}
      <View style={styles.buttons}>
        <Button  
          mode='flat' 
          onPress={onCancel} 
          style={styles.button}
        >
          Cancel
        </Button>
        <Button 
          onPress={submitHandler}
          style={styles.button}
        >
          {submitButtonLabel}
        </Button>
      </View>
    </View>
    
  )
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});