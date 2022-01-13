import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color'
import { theme } from '../../../Constants/Theme'
const styles = StyleSheet.create({

	homeContainer: {
		backgroundColor: theme.THEME_COLOR,
		width: '100%',
		paddingHorizontal: 15,
		paddingTop: StatusBar.currentHeight,
		flexDirection: 'row',
		justifyContent: 'space-between',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		borderBottomWidth: 2,
		borderBottomColor: theme.THEME_COLOR_1,
	},

	headerLeft: {
		flex: 0.3,
		justifyContent: 'center',
		alignItems: 'flex-start',

	},
	homeLogo: {
		borderRadius: 10,
		height: 60,
		width: 150,
		marginLeft: 5,

	},
	homeText: {
		fontWeight: '700',
		fontSize: wp(6.5),
		color: color._WHITE,
		textAlignVertical: 'bottom'
	},




});
export default styles;