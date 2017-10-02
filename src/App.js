import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyADBHZh_XkoerG4kLoce-8Ef4BuZBOtPT4',
            authDomain: 'manager-e762f.firebaseapp.com',
            databaseURL: 'https://manager-e762f.firebaseio.com',
            projectId: 'manager-e762f',
            storageBucket: 'manager-e762f.appspot.com',
            messagingSenderId: '322273502019'
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
