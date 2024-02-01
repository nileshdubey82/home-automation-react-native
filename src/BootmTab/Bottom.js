import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

//screen
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

// const Tab = createBottomTabNavigator();
export default function App() {
	return (
	//   <NavigationContainer>
	<Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#FAEBEFFF"
      barStyle={{ backgroundColor: '#2466A7FF' }}
    >
		  <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="glass" size={20}color="#900" />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={26} />
          ),
        }}
      />
		</Tab.Navigator>
	//   </NavigationContainer>
	);
  }
