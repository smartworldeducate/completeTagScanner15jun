import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../screen/HomeScreen';
import Dashbord from '../screen/Dashbord';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{drawerPosition:"right"}}>
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Dashbord"
        component={Dashbord}
        options={{headerShown: false}}
      />
       <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
       <Drawer.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
     
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
