import React from 'react';
import {Provider} from "react-redux";
import {configureStore} from './src/Store';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import Containers from './src/Containers';

const store = configureStore();

class App extends React.Component {
    constructor(props) {
		super(props);
    }
    
    render() {
		const persistor = persistStore(store);
		return (
            <Provider store={store}>
				<PersistGate persistor={persistor} >
						<Containers />
				</PersistGate>
			</Provider>
        );
    }
};

export default App;
