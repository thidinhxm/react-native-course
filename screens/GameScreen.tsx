import { Alert, StyleSheet, View, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import { generateRandomBetween } from "../utils/generateRandomBetween";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Icon from 'react-native-vector-icons/Ionicons';
import GuessLogItem from "../components/game/GuessLogItem";

interface Props {
  userNumber: number;
  onGameOver: (numberOfRound: number) => void;
}

let minBoundary = 1;
let maxBoundary = 100
function GameScreen({ userNumber, onGameOver }: Props) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGetRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions(); 

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction: 'lower' | 'greater') {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)  
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry', style: 'cancel'}
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const randomNumberTemp = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(randomNumberTemp);
    setGetRounds(preRounds => [randomNumberTemp, ...preRounds]);
  }

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton 
              onPress={() => nextGuessHandler('lower')}
            >
              <Icon name='md-remove' size={24} color='white' />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton 
              onPress={() => nextGuessHandler('greater')}
            >
              <Icon name='md-add' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton 
              onPress={() => nextGuessHandler('lower')}
            >
              <Icon name='md-remove' size={24} color='white' />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton 
              onPress={() => nextGuessHandler('greater')}
            >
              <Icon name='md-add' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList 
          data={guessRounds} 
          renderItem={(itemData) => {
            return (
              <GuessLogItem 
                roundNumber={guessRounds.length - itemData.index}
                guess={itemData.item}
              />
            )}}
          keyExtractor={(item, index) => item.toString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
});