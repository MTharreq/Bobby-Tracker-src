import * as React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, Settings, Monitor, Splash } from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator initialRouteName='Monitor'
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconSource;

        if (route.name === 'Monitor') {
          iconSource = focused
            ? require('../assets/icons/card-active.png')
            : require('../assets/icons/card.png');
        } 
        else if (route.name === 'Settings') {
          iconSource = focused
          ? require('../assets/icons/settings-active.png')
          : require('../assets/icons/settings.png');
        }

        return (
          <Image
            style={{
              height: '100%',
              resizeMode: 'contain',
              width: '80%',
            }}
            source={iconSource}
          />
        );
      },

      tabBarActiveTintColor: '#7E9A09',
      tabBarInactiveTintColor: '#4C4646',
      tabBarStyle:{
        height: '8%',
        paddingTop: 6,
        backgroundColor: '#F5F7EF',
      },
      tabBarLabelStyle:{
        fontSize: 12,
        paddingBottom: 8,
        paddingTop: 0,
      },
    })}
    >
      <Tab.Screen name="Monitor" component={Monitor} options={{ headerShown: false }}/>
      <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Router;