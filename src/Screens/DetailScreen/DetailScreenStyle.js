import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from '../../Constants/Theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '50%',
		paddingHorizontal:25,
		backgroundColor:theme.Disabled_TabColor,
	},
	loader:{
		width:20,
		height:20,
	},
	
});
export default styles;