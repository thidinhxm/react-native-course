/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { RootDrawerParamList, RootStackParamList } from './types/navigation';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FavoritesContextProvider from './store/context/FavoritesContextProvider';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401'},
      headerTintColor: 'white',
      sceneContainerStyle: {backgroundColor: "#3f2f25"},
      headerTitleAlign: 'center',
      drawerContentStyle: { backgroundColor: '#351401'},
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
      drawerInactiveTintColor: 'white',

    }}>
      <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Icon name='list' color={color} size={size} />
          )   
        }}
      />
      <Drawer.Screen 
        name='Favorites' 
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name='star' color={color} size={size} />
          ) 
        }}  
      />
    </Drawer.Navigator>
  );
}


function App(): JSX.Element {

  return (
    <>
      <StatusBar barStyle='light-content' />
      <FavoritesContextProvider>
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
              name='Drawer' 
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }} 
            />
            <Stack.Screen 
              name='MealsOverview' 
              component={MealsOverviewScreen} 
            />
            <Stack.Screen 
              name='MealDetail' 
              component={MealDetailScreen}
              options={{
                title: 'About the Meal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
      
    
    </>
   
  )
}

export default App;