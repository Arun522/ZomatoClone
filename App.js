import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text,StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Donate from './components/Donate'
import GoOut from './components/GoOut'
import Details from './components/Details'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

SimpleLineIcons.loadFont();
MaterialCommunityIcons.loadFont();
FontAwesome.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabNavigator = () => {
  return(
    <Tab.Navigator tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: 'orange',
        inactiveTintColor: 'gray',
        showLabel: false,
    }}>
      <Tab.Screen 
        name="Orders" 
        component={Home}
        options={{
        tabBarIcon: ({color}) => (
            <FontAwesome name="shopping-bag" size={32} color={color} />
        ),
        }}
      />

      <Tab.Screen 
        name="Donate"
        component={Donate}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="hand-heart" size={32} color={color} />
          ),
        }}
      />
  
      <Tab.Screen 
        name="Go Out"
        component={GoOut}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="walk" size={35} color={color} />
          ),
        }}
      />
      
    </Tab.Navigator>
  )
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={tabNavigator} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Details" 
          component={Details} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});