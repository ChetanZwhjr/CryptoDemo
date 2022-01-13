import { combineReducers } from 'redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

import global from './global';


const config = {
	key: "root",
	debug: true,
	storage: AsyncStorage,
};

const AppReducers = combineReducers({
	global 
});

const rootReducer = (state, action) => {
	return AppReducers(state, action);
}

const pReducer = persistReducer(config, rootReducer);

export default pReducer;

