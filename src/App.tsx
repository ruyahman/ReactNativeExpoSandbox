import {NavigationContainer} from '@react-navigation/native';
import {RootStackNav} from 'navigation';
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

import { Header } from 'react-native-elements'
import { View, ActivityIndicator, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const App = () => {
  loading = () => {
    return <ActivityIndicator style={{ flex: 1, bottom: "30%" }}
                              color='hsla(0, 100%, 50%, 0.9)'
                              size='large' />
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          centerComponent={{
            text: 'WebView',
            style: {
              color: 'lightblue',
              fontSize: 24,
              fontFamily: 'Baskerville-Bold',
            }
          }}
          leftComponent={
            <Icon
              name="chevron-left"
              size={20} color="white"
              style={{ marginLeft: 5 }}
              onPress={() => this.webView.goBack()}
            />
          }
          rightComponent={
            <Icon
              name="chevron-right"
              size={20}
              color="white"
              style={{ marginRight: 5 }}
              onPress={() => this.webView.goForward()}
            />
          }
          backgroundColor="black"
          barStyle="light-content"
        />
        <View style={{ flex: 1 }}>
        <WebView
          ref={ref => this.webView = ref}
          source={{ uri: 'https://www.google.com' }}
          renderLoading={() => this.loading()}
          startInLoadingState={true}
        />
        <View style={styles.floatingButton}>
          <Button title={"Native Button"}/>  
        </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    flex: 1,
    position: "absolute",
    backgroundColor: "#0000FF",
    top: "75%",
    left: "60%",
    opacity: 0.5,
  }
});
