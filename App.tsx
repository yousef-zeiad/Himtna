import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './components/Navigation/Naigation';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <Provider store={store}>
      <StatusBar barStyle='light-content' />
      <Navigation />
    </Provider>
  );
};

export default App;
