import React, { useState } from 'react';
import { 
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
  View,
} from 'react-native'; 
// import { PRIMARY50, NEUTRAL20, NEUTRAL50 } from '../../styles/color';


export default function Login({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={-200}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.containerImg} >
            {/* <Image style={{width: '40%', height: '20%', resizeMode: 'contain', marginBottom: 30, marginTop: 30,}}
              source={require('../../assets/images/logo.png')}
            /> */}
            <Image style={{width: '80%', height: '65%',  resizeMode: 'contain', backgroundColor: 'white',}}
              source={require('../../assets/icons/flat-illustration.png')}
            />
          </View>

          <View style={styles.containerContent}>
            <Text style={styles.h1}>SSO Login</Text>
            <TextInput
              style={styles.input}
              placeholder="SSO Username"
              placeholderTextColor="#B1A9A9" 
              onChangeText={setUsername}
              value={username}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#B1A9A9" 
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={() =>
              navigation.navigate('MainApp')
            }>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
    // b
    button: {
      marginTop: 30,
      width: '80%',
      backgroundColor: '#B6D049',
      borderRadius: 50,
      paddingVertical: 12,
    },
    buttonText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
      fontFamily: 'PlusJakartaSans-SemiBold',
    },
    
    // c
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    containerContent: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      // backgroundColor:'yellow',
    },
    containerImg: {
      flex: 1.3,
      paddingTop: StatusBar.currentHeight,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor:'blue',
    },
    
    //h
    h1: {
      width: '80%',
      fontSize: 22,
      marginBottom: 12,
      fontFamily: "PlusJakartaSans-Bold",
      color: 'grey',
    },
    
    // i
    inner: {
      flex: 1,
      justifyContent: 'center',
    },
    input: {
      backgroundColor: 'white',
      width: '80%',
      padding: 10,
      borderWidth: 1,
      borderColor: 'grey',
      marginBottom: 10,
      borderRadius: 8,
      fontFamily: 'PlusJakartaSans-Regular',
    },
  });