import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

    componentWillMount(){
        var config = {
            apiKey: "AIzaSyCMe5WR21AItSdOGs1U59HO2BrWkCu6xQQ",
            authDomain: "manager-a8f00.firebaseapp.com",
            databaseURL: "https://manager-a8f00.firebaseio.com",
            projectId: "manager-a8f00",
            storageBucket: "",
            messagingSenderId: "996670503006"
        };
        firebase.initializeApp(config);
        
    }

  render() {
    return (
        <Provider store={ createStore(reducers, { }, applyMiddleware(ReduxThunk)) }>
            <View style={{ flex: 1, backgroundColor: '#FFF' }} >
                <Router />
            </View>
        </Provider>
    );
  }
}

export default App;
