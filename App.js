import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './SRC/screen/HomeScreen'
import RegisterScreen from './SRC/screen/RegisterScreen'
import LoginScreen from './SRC/screen/LoginScreen'
import ScannerScreen from './SRC/screen/ScannerScreen'
import SplashScreen from './SRC/screen/SplashScreen'
import TagList from './SRC/screen/TagList'
import TagScanner from './SRC/screen/TagScanner'
import DrawerNavigator from './SRC/Drawer/DrawerNavigator';
import ForgetScreen from './SRC/screen/ForgetScreen';
import DetailScreen from './SRC/screen/DetailScreen';
import TagcreateScreen from './SRC/screen/TagcreateScreen';
import Home2 from './SRC/screen/Home2';
import Dashbord from './SRC/screen/Dashbord';
import Users from './SRC/screen/Users';
import UserDetail from './SRC/screen/UserDetail';
import EditProfileScreen from './SRC/screen/EditProfileScreen';

const Stack=createNativeStackNavigator()
const App = () => {
  return (
 
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Splash"}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Scanner" component={ScannerScreen} options={{headerShown:false}}/>
        <Stack.Screen name="TagList" component={TagList} options={{headerShown:false}}/>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="TagScanner" component={TagScanner} options={{headerShown:false}}/>
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="ForgetScreen" component={ForgetScreen} options={{headerShown:false}}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown:false}}/>
        <Stack.Screen name="TagcreateScreen" component={TagcreateScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home2" component={Home2} options={{headerShown:false}}/>
        <Stack.Screen name="Dashbord" component={Dashbord} options={{headerShown:false}}/>
        <Stack.Screen name="Users" component={Users} options={{headerShown:false}}/>
        <Stack.Screen name="UserDetail" component={UserDetail} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={EditProfileScreen} options={{headerShown:false}}/>

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App