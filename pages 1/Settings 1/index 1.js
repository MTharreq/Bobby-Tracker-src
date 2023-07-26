import React, { useState, useCallback } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking} from 'react-native';

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.h1}>Settings</Text>
        {
        // <Image style={styles.profilePicture}
        //   source={require('../../assets/img/picture-profile.png')}
        // /> 
        }
      </View>

      {/* LIST OF CONTENT */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.h2}>About</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Help</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title} onPress={() => {
            Linking.openURL('https://www.instagram.com/mtharreqq/');
          }}>Follow us on Instagram</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Legal & Privacy</Text>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.section}>
          <Text style={styles.h2}>Version</Text>
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.title}>My Solar Panel Tracker</Text>
            <Text style={styles.subtitle}>Thank you for downloading. Enjoy!</Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <TouchableOpacity style={styles.button} onPress={() =>
          navigation.navigate('Splash')
          }>
          <Text style={styles.logout}>Go to Splash</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  //c
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },

  //d
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#CDC5C5',
  },

  //h
  h1: {
    color: '#372F2F',
    fontSize: 22,
    fontFamily: 'PlusJakartaSans_400Regular'

  },
  h2: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  header: {
    // backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
  },

  //i
  // icon: {
  //   height: 20,
  //   width: 20,
  // },

  //l
  logout: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#EA5455'
  },

  //p
  // profilePicture: {
  //   height: 32,
  //   width: 32,
  // },

  //s
  section: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -1,
    paddingTop: 20,
    flexDirection: 'row',

  },
  subtitle: {
    color: '#7D7676',
    fontSize: 14,
  },

  //t
  title: {
    color: '#372F2F',
    fontSize: 16,
    fontWeight: '500',
  },
});
