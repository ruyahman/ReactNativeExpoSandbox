import {NavigationContainer} from '@react-navigation/native';
import {RootStackNav} from 'navigation';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

export const App = () => {
  return (
    <WebView
      source={{ uri: 'https://www.google.com/' }}
    />
  );
};
