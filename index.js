/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./src/redux/reducers";
import App from './src/components/App/App.jsx';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

LogBox.ignoreAllLogs();

const render = () => {
    let store = createStore(rootReducer, {}, applyMiddleware(thunk));

    return <Provider store={store}>
        <App />
    </Provider>;
}

AppRegistry.registerComponent(appName, () => render);
