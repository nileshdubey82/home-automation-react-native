import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens

import SplashScreen from '../screens/splash';
import BottomTab from './Bottom';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Result from '../screens/result';
import Date from '../screens/date';
import login from '../screens/login';

const Stack = createNativeStackNavigator();

export default function Navigation() {

	const [splash, setsplash] = useState(true);

	useEffect(() => {

		setTimeout(() => {
			setsplash(false)
		}, 2000);
	}, []);


	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerStyle: {
					backgroundColor: '#2466A7FF',
				},
				headerTintColor: 'white',
			}}>
				{splash ? <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> : null}
				<Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
				<Stack.Screen name="HOME" component={Home} options={{ headerShown: true }} />
				<Stack.Screen name="Result" component={Result} options={{ headerShown: true }} />
				<Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
				<Stack.Screen name="Date" component={Date} options={{ headerShown: true }} />
				<Stack.Screen name="FeedBack" component={login} options={{ headerShown: true }} />

			</Stack.Navigator>
		</NavigationContainer>
	)
}
