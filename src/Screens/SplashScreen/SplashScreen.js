import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./SplashScreenStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as resources from 'resources';


const SplashScreen = ({ navigation,  }) => {
setTimeout(() => {
	navigation.navigate('Home')
}, 2000);
	

	
	return (
		<View  style={[styles.container]}>
			<Image  source={resources.APP_LOGO} style={styles.imgLogo}/>
		</View>
	);
}



export default SplashScreen;
