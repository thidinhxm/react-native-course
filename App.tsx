/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


interface Goal {
  id: string,
  text: string,
}

function App(): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([] as Goal[]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function stopAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(goalText: string) {
    setGoals((currentGoals) => [
      ...currentGoals, 
      { text: goalText, id: Math.random().toString() }
    ]);
    setModalIsVisible(false);
  };

  function deleteGoal(id: string) {
    setGoals((currentGoals) => currentGoals.filter(goal => goal.id !== id));
  }

  return (
    <>
    <StatusBar barStyle='light-content' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal' 
          color='#a065ec' 
          onPress={startAddGoalHandler} 
        />
        <Modal visible={modalIsVisible} animationType='slide'>
          <View style={styles.inputContainer}>
            <GoalInput onAddGoal={addGoalHandler} onCancel={stopAddGoalHandler}/>
          </View>
        </Modal>
        <View style={styles.goalsContainer}>
          <FlatList 
            data={goals}
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={false}
            renderItem={(itemData) => (
              <GoalItem 
                text={itemData.item.text} 
                onPress={() => deleteGoal(itemData.item.id)}
              />
            )}
          />
        </View>
      </View>
    </>
    
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
    padding: 16,
    backgroundColor: '#311b6b',
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
