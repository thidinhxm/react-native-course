import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import { useState } from 'react';

interface Props {
  onAddGoal: (goalText: string) => void,
  onCancel: () => void,
}

function GoalInput(props : Props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  
  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  
  return (
    <>
      <Image 
        source={require('../assets/images/goal.png')}
        style={styles.image}  
      />
      <TextInput 
        style={styles.textInput}
        placeholder='Your course goal'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button 
            title='Cancel' 
            onPress={props.onCancel} 
            color='#f31282'
          />
        </View>
        <View style={styles.button}>
          <Button 
            title='Add goal' 
            onPress={addGoalHandler} 
            color='#b180f0'
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});

export default GoalInput;