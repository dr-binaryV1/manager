import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Router from './router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAc3tqZd1Ymw-jII2MA0TTHtZ5TLkwIdi8",
            authDomain: "manager-c0eb6.firebaseapp.com",
            databaseURL: "https://manager-c0eb6.firebaseio.com",
            projectId: "manager-c0eb6",
            storageBucket: "",
            messagingSenderId: "940370723422"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View>
                    <Router />
                </View>
            </Provider>
        );
    }
}

export default App;