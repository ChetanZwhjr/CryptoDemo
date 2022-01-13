import React, { useEffect } from 'react';
import { SafeAreaView,BackHandler, StatusBar, StyleSheet,} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "./Navigation";
import { setCurrentRouteName } from "./Store/global";
import { theme } from './Constants/Theme';
import { color } from './Constants/Color';

const Containers = ({  }) => {
	const dispatch = useDispatch();
	const stateGlobal = useSelector(state => state.global);
	const [bgBarColor, setBgBarColor] = React.useState(color._WHITE);
	const [bgBarCotentColor, setBgBarCotentColor] = React.useState('dark-content');
	const [translucentMode, setTranslucentMode] = React.useState(false);


	const effectDependency = stateGlobal.currentRouteName

	useEffect(() => {
		_StatusBar()

	}, [effectDependency]);

	const _StatusBar = () => {
	 if (stateGlobal.currentRouteName === 'Home'|| stateGlobal.currentRouteName === 'Detail'){
			setBgBarColor('transparent')
			setBgBarCotentColor('light-content')
			setTranslucentMode(true)
		}
		else {
			setBgBarColor(color._WHITE)
			setBgBarCotentColor('dark-content')
			setTranslucentMode(false)
		}
	}

	const backHandlerListener = (value) => {
		if (stateGlobal.currentRouteName == 'Home') {
			
			return true;
		} else {
			BackHandler.removeEventListener("hardwareBackPress", backHandlerListener);
			return false;
		}
	};
	useEffect(() => {
		BackHandler.addEventListener("hardwareBackPress", backHandlerListener);
		return () => {
			BackHandler.removeEventListener("hardwareBackPress", backHandlerListener);
		};
	}, [backHandlerListener])

	return (
		<>
			<SafeAreaView style={{ flex: 1, backgroundColor: theme.PRIMARY_BG }}>
				<StatusBar
					animated={true}
					backgroundColor={bgBarColor}
					barStyle={bgBarCotentColor}
					translucent={translucentMode}
				/>
				<Navigation setCurrentRouteName={(value) => { dispatch(setCurrentRouteName(value)); }} />
		</SafeAreaView>


		</>
	);
}

export default Containers;

const styles = StyleSheet.create({
	headerContainer: {
		flex: 1.4,
	}
})