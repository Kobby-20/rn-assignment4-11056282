import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './LoginScreen';
import HomepageScreen from './HomepageScreen';

export default function App() {
  const [currentScreen, setCurr
    entScreen] = useState('Login');

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Login' ? (
        <LoginScreen navigate={handleNavigate} />
      ) : (
        <HomepageScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
