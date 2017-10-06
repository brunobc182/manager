import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
