/*
 *@Author Vaibhav Biturwar
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppNav} from './src/nav/AppNav';

const App = () => {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
