/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { RootStackParamList } from './types/navigation';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {

  return (
    <>
      <StatusBar barStyle='light-content' />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: "#3f2f25"},
            headerTitleAlign: 'center'
          }}
        >
          <Stack.Screen 
            name='MealsCategories' 
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }} 
          />
          <Stack.Screen 
            name='MealsOverview' 
            component={MealsOverviewScreen} 
            // options={({route, navigation}) => {
            //   const categoryId = route.params.categoryId;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
          <Stack.Screen 
            name='MealDetail' 
            component={MealDetailScreen}
            options={{
              headerRight: () => {
                return <Text>In the header</Text>
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
    </>
   
  )
}

export default App;