// import { View, Text } from 'react-native'
import React from 'react';
import AppNav from './src/navigation/AppNavigator';
import AuthContextProvider from './src/context/AuthContext';
import Home from './src/screens/Home';
import H from './src/HHH';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
  return (
    <>
    <H/>
    </>
    // <AuthContextProvider>
    //   <AppNav />
    // </AuthContextProvider>

  );
}
