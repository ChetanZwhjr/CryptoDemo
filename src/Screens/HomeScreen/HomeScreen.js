import React from "react";
import { View, TouchableOpacity, Text, FlatList,ActivityIndicator } from "react-native";
import styles from "./HomeScreenStyles";
import {getCryptoListAction} from '../../Store/global/actions'
import {useSelector, useDispatch } from "react-redux";
import  * as Organisms from '../../Components/organisms';
import NetInfo  from "@react-native-community/netinfo";

const HomeScreen = ({ navigation,  }) => {
	const dispatch = useDispatch();
	const stateGlobal = useSelector(state => state.global);
	const [criptoData , setCriptoData]= React.useState([])
	
	React.useEffect(()=>{
		_checkNetWorkAvailable()
	},[]);

	function _checkNetWorkAvailable() {
		NetInfo.fetch().then(state => {
			console.log("Connection type", state.type);
			console.log("Is connected?", state.isConnected);
			
			if(state.isConnected === true){
				dispatch(getCryptoListAction());
			}
		
			
		});
	}

	React.useEffect(()=>{
		if ( stateGlobal.criptoListData != undefined && stateGlobal.criptoListData.length > 0) {
			setCriptoData(stateGlobal.criptoListData)
		}
	},[stateGlobal.criptoListData]);

	React.useEffect(()=>{
		let focusListener = navigation.addListener('focus', () => {
		if ( stateGlobal.criptoListData != undefined && stateGlobal.criptoListData.length > 0) {

				setCriptoData(stateGlobal.criptoListData)
			}
		});
		return focusListener;
	});

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity style={styles.mainRow} onPress={()=>{navigation.navigate('Detail',{data:item.quote.USD})}}>
				<View style={styles.twoColumnView}>
					<View>
						<Text style={styles.text}><Text style={styles.textTitle}>{item.symbol}</Text> {' / USD'}</Text>
						<Text style={styles.text}>{item.name}</Text>
					</View>
					<View style={styles.priceView}>
						<Text style={styles.priceText}>{'$'+(item.quote.USD.price).toFixed(2)}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	return (
		<View  style={[styles.container]}>
			<Organisms.Header  
			title={'Crypto' }
			/>
			{criptoData.length > 0 ?
				<FlatList
				data={criptoData}
				renderItem={renderItem}
			/>
			:
			<View style={[styles.container]}>
				<Text  style={styles.emptyTxt} >{'No Record Found'}</Text>
				</View>}
		</View>
	);
}

export default HomeScreen;
