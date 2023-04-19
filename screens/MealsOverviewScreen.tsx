import { CATEGORIES, MEALS } from '../data/dummy-data';
import { MealsOverviewScreenProps } from '../types/navigation';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation } : MealsOverviewScreenProps) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === categoryId)?.title,
    }) 
  }, []);
  return (
    <MealsList items={displayedMeals} />
  )
};

export default MealsOverviewScreen;