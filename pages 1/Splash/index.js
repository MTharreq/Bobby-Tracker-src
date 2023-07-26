import React, { useEffect } from 'react';
import { StyleSheet, Image, View, StatusBar } from 'react-native';

function Splash({ navigation }) {

  useEffect(() => {
      setTimeout(() => {
        navigation.replace('MainApp');
      }, 2000)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/icons/logo.png')}
      />
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  tinyLogo: {
    height: 256,
    resizeMode: 'contain'
  },
})
