import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {AuthScreen} from "./screens/AuthScreen";
import {RegistrationScreen} from "./screens/RegistrationScreen";
import {ConnectionScreen} from "./screens/ConnectionScreen";

const App = () => {
  return (
    // <SafeAreaView>
    //   <AuthScreen/>
    //   <RegistrationScreen/>
      <ConnectionScreen/>
    // </SafeAreaView>
  );
};


export default App;
