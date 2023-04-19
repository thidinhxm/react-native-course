import { View, Text, Pressable, Image, StyleSheet, Platform, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import MealDetails from '../MealDetails';

interface Props {
  id: string
  title: string;
  imageUrl: ImageSourcePropType;
  duration: number;
  complexity: string;
  affordability: string;
}


function MealItem( { id, title , imageUrl, duration, complexity, affordability } : Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'MealDetail'>>();

  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable 
        style={({ pressed }) => pressed ? styles.buttonPressed : null } 
        android_ripple={{ color: '#ccc'}}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}> 
          <View>
            <Image source={imageUrl} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails 
            duration={duration} 
            complexity={complexity} 
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
})