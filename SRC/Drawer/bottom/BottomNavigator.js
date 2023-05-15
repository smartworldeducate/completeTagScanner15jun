import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllEvents from '../../screens/AllEvents'
import RegisterScreen from '../../screens/RegisterScreen'
import SignInScreen from '../../component/combocomponent/SignInScreen'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Scaner from 'react-native-vector-icons/MaterialIcons';
import Speker from 'react-native-vector-icons/FontAwesome';
const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      
      <Bottom.Screen
        name="Event"
        component={AllEvents}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Icon name='event' size={35} color='blue'/>
            );
          },
        }}
      />
      <Bottom.Screen
      
        name="Scaner"
        component={SignInScreen}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Scaner name='qr-code-scanner' size={35} color='blue'/>
            );
          },
        }}
      />
      <Bottom.Screen
        name="User"
        component={RegisterScreen}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Speker name='user' size={35} color='blue'/>
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
