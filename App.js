/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/home';
import SearchResultScreen from './src/screens/searchResult';
import DestinationSearchScreen from './src/screens/destinationSearch';
import GuestsScreen from './src/screens/guests';
import Router from './src/navigation/router';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
        {/* <HomeScreen></HomeScreen> */}
        {/* <SearchResultScreen></SearchResultScreen> */}
        {/* <DestinationSearchScreen /> */}
        {/* <GuestsScreen></GuestsScreen> */}
      {/* </SafeAreaView> */}
      <Router />
    </>
  );
};

export default App;
