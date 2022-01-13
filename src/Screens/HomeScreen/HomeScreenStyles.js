import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from '../../Constants/Theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor:theme.THEME_COLOR_1,
	},
	emptyTxt: {
		fontSize:wp(4.5),
		alignSelf:'center',
		textAlign:'center',
		fontWeight:'900',
		color:color._WHITE
	},
	mainRow:{
		backgroundColor:theme.THEME_COLOR,
		width: '100%',
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginBottom: 1,
	},
	twoColumnView:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems:'center',
	},
	priceView:{
		// a: 'center',
		justifyContent: 'space-between',
	},
	priceText:{
		color:color._01baf2	,
		fontSize:wp(3),
	},
	textTitle:{
		color:color._WHITE,
		fontSize:wp(3),
		fontWeight: '900',
		marginBottom: 3,
	},
	text:{
		color:color._01baf2	,
		fontSize:wp(3),
	},
	
});
export default styles;