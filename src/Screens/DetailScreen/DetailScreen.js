import React from "react";
import { Dimensions, View, Text, ActivityIndicator } from "react-native";
import styles from "./DetailScreenStyle";
import {LineChart} from 'react-native-chart-kit'
const screenWidth = Dimensions.get("window").width;
import { theme } from '../../Constants/Theme';

const DetailScreen = ({ navigation, route }) => {
	const [criptoData , setCriptoData]= React.useState(null)
	const chartConfig = {
		backgroundGradientFrom: theme.THEME_COLOR,
		backgroundGradientFromOpacity: 0,
		backgroundGradientTo:theme.THEME_COLOR_1,
		backgroundGradientToOpacity: 0.5,
		barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"],
		strokeWidth: 2, 
		barPercentage: 0.5,
		useShadowColorFromDataset: false, 
		color: (opacity = 1) => `rgba(50, 93, 138, ${opacity})`,
	  };
	
	 
	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', (e) => {
		  if(route.params!=undefined){
			let data = route.params.data;
			const updateData = {
				labels: ["24 hour", "7 Days", "30 Days", "60 Days", "90 Days"],
				datasets: [
				  {
					data: [data['percent_change_24h'], data['percent_change_7d'], data['percent_change_30d'], data['percent_change_60d'], data['percent_change_90d']],
					color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, 
					strokeWidth: 2 
				  }
				],
				legend: ["Price"] 
			};
			setCriptoData(updateData);
		}
	   
		});
		return unsubscribe;
	  });


	return (
		<View  style={[styles.container]}>
			{(criptoData !== null && criptoData !== undefined) ?
		 	<LineChart
				data={criptoData}
				width={screenWidth}
				height={220}
				chartConfig={chartConfig}
				// xAxisLabel={'Days'}
				yAxisLabel={'$'}
			/>:
			<View style={[styles.container]}>
<ActivityIndicator color={'#000'}  style={styles.loader}/>
				</View>}
		</View>
	);
}



export default DetailScreen;
