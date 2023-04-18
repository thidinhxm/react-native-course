/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootDrawerParamList } from './types/navigation';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function App(): JSX.Element {

  return (
    <>
      <StatusBar barStyle='light-content' />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#3c0a6b'},
            headerTintColor: 'white',
            drawerActiveBackgroundColor: '#f0e1ff',
            drawerActiveTintColor: '#3c0a6b',
            // drawerStyle: { backgroundColor: '#ccc'}
          }}
        >
          <Drawer.Screen 
            name='Welcome' 
            component={WelcomeScreen} 
            options={{
              drawerLabel: 'Welcome Screen',
              drawerIcon: ({ color, size }) => <Icon name='home' color={color} size={size} />
            }}
          />
          <Drawer.Screen 
            name='User' 
            component={UserScreen} 
            options={{
              drawerIcon: ({ color, size }) => <Icon name='person' color={color} size={size} />
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
   
  )
}

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  styleImage: {
    opacity: 0.15,
  }
})
