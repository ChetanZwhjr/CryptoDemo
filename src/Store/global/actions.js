import * as types from './actionTypes'
import ApiList from "../../webservice/ApiList";
import { AlertHelper } from '../../Constants/AlertHelper';

export const apiLoadingStart = () => ({type: types.API_LOADING_START});
export const apiLoadingStop = () => ({type: types.API_LOADING_STOP});
export const noInternetConnected = (isConnected) => ({type: types.IS_INTERNET_CONNECTED, payload:isConnected});

export const getCryptoListAction = () => {	
	return  (dispatch) => {
		return  ApiList.getCryptoList().then(response => {
			if(response.status && response.status.total_count > 0){
				dispatch({ type: types.CONFIG_SUCCESS, payload: response});
			
			}else{
				dispatch({ type: types.CONFIG_ERROR, payload:response.error});
				setTimeout(() => { AlertHelper.warning(response.error); }, 100);
			}
		}).catch((error) => {
			dispatch({ type: types.CONFIG_ERROR, payload: error });
			setTimeout(() => { AlertHelper.warning(error); }, 100);

		});
	};
};


export const setCurrentRouteName = (routeName) => {	
	return (dispatch) => {
		dispatch({ type: types.SET_CURRENT_ROUTE_NAME, payload: routeName });

	};
};