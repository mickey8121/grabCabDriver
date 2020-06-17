import React from 'react';
import AppContainer from './src/navigation/AppNavigator';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBpiq5QmsBtyGj-iSytITKSklgrqBEtmzk",
  authDomain: "ctr-new-database.firebaseapp.com",
  databaseURL: "https://ctr-new-database.firebaseio.com",
  projectId: "ctr-new-database",
  storageBucket: "ctr-new-database.appspot.com",
  messagingSenderId: "338139831512",
  appId: "1:338139831512:web:f1697f85abde8d485a0bad",
  measurementId: "G-JRVXVGELTN"
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  state = {
    assetsLoaded: false,
  };

  constructor(){
    super();
    console.disableYellowBox = true;
  }

//resource load at the time of app loading
  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/background.png'),
        require('./assets/images/logo.png'),
      ]),
      Font.loadAsync({
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      }),
    ]);
  };
  
  render() {
    return (
        this.state.assetsLoaded ? <AppContainer/>
        : (
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onFinish={() => this.setState({ assetsLoaded: true })}
            onError={console.warn}
            autoHideSplash={true}
          />
        )
    );
  }
}