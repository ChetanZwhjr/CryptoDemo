import {apiConfig, HeaderSecretKey, mode,} from "../Constants/Config";
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as RootNavigation from './../Navigation';



class HTTP {
	constructor() {
	}

	GET = async (url) => {
		if(mode == 'production'){
			var mainDomain = apiConfig.productionApiURL;
		} else if(mode == 'testing'){
			var mainDomain = apiConfig.testingApiURL;
		} else {
			var mainDomain = apiConfig.developmentApiURL;	
		}
		let accessToken = await AsyncStorage.getItem('accessToken');
		if(accessToken == null || accessToken == undefined){
			accessToken = ''
		}

		try {			
			let response = await fetch(mainDomain + url, {
				method: "GET",
				credentials: 'same-origin',
				headers: {
					"X-CMC_PRO_API_KEY": 'b2a73c71-37d6-4ef0-82dd-fe8dfcff8aca',
					Accept: "application/json",
					'Content-Type': 'application/json;charset=utf-8'
				}
			});
			if(response.status === 401){
				RootNavigation.navigate('Login');
		   }
			if (response.status == 200) {
				
				const responseJson = await response.json();	
				if(responseJson.status === 401){
					RootNavigation.navigate('Login');
			   }
				if (responseJson) {
					return responseJson;
				} else if (!responseJson.status) {
					return {
						error: responseJson.error.message,
						status: "failed"
					};
				} else {
					return null
				}
			}else{
				return null
			}
		} catch (error) {
			return error;
		}
	}

}
export default new HTTP();