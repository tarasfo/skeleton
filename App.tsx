import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';
import User from './src/screens/user';

export default function App() {
   return (
      <Provider store={store}>
         <View style={styles.container}>
            <StatusBar style="auto" />
            <User />
         </View>
      </Provider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
