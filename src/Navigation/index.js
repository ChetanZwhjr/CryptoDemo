import * as React from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../Constants/Theme';
import { color } from '../Constants/Color';
import { Platform } from 'react-native';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';

const Stack = createStackNavigator();
const platform = Platform.OS;


export const navigationRef = React.createRef();

export default function Navigation(props) {
	const routeNameRef = React.useRef();
	return (
		<NavigationContainer
			ref={navigationRef}
			onReady={() =>
				(routeNameRef.current = navigationRef.current.getCurrentRoute().name)
			}
			onStateChange={() => {
				const previousRouteName = routeNameRef.current;
				const currentRouteName = navigationRef.current.getCurrentRoute().name;
				props.setCurrentRouteName(currentRouteName);
			}}>
			<Stack.Navigator>
				<Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} /> 
				<Stack.Screen options={{ headerShown: true ,headerStyle: {
        backgroundColor: theme.THEME_COLOR,
      }, headerTintColor: '#fff',}} name="Detail" component={DetailScreen} />
			

				

			</Stack.Navigator>
		</NavigationContainer>
	);
}
