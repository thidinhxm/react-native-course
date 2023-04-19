import { Text, View, Image, StyleSheet, ScrollView } from "react-native"
import { MealDetailScreenProps } from "../types/navigation";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from 'react';
import IconButton from "../components/IconButton";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { addFavorite, removeFavorite } from "../redux/favorites";

function MealDetailScreen({ route, navigation }: MealDetailScreenProps) {
  const favoriteMealIds = useAppSelector((state) => state.favoriteMeals.ids);
  const dispatch = useAppDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  
  const mealIsFavorite = favoriteMealIds.includes(mealId);
  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite(mealId))
    } else {
      dispatch(addFavorite(mealId));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton 
          icon={mealIsFavorite ? 'star' : 'star-outline'} 
          color='white' 
          onPress={changeFavoriteStatusHandler}
        />
      )
    })
  }, [navigation, changeFavoriteStatusHandler])

  if (selectedMeal) {
    return (
      <ScrollView style={styles.rootContainer}>
        <Image source={selectedMeal.imageUrl} style={styles.image}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails 
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>

      </ScrollView>  
    )
  }
  return <></>;
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  }
});