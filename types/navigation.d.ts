import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';

export type RootStackParamList = {
  MealsOverview: { categoryId: string};
  MealDetail: { mealId: string };
  Drawer: undefined
};

export type RootDrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
  MealsOverview: { categoryId: string};
}

export type CategoriesScreenProps = 
DrawerScreenProps<RootDrawerParamList, 'Categories'>;

export type MealsCategoriesScreenProps = 
  NativeStackScreenProps<RootStackParamList, 'MealsCategories'>;

export type MealDetailScreenProps = 
  NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

export type MealsOverviewScreenProps = 
  NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;