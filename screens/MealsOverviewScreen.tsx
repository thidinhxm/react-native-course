import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { MealsOverviewScreenProps } from '../types/navigation';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

function MealsOverviewScreen({ route, navigation } : MealsOverviewScreenProps) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  function renderMealItem(meal: Meal) {
    return <MealItem {...meal}/>
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === categoryId)?.title,
    }) 
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});