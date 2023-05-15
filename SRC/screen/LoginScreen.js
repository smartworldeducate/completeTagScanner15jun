import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Lock from 'react-native-vector-icons/Ionicons';
import Aero from 'react-native-vector-icons/AntDesign';
import { Toggle } from 'react-native-magnus';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LoginScreen = (props) => {
  const [on, toggle] = useState(false);
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <StatusBar
          backgroundColor={'#fff'}
          barStyle="dark-content"
          hidden={false}
        />
        <View style={{ width: wp(100), backgroundColor: '#fff' }}>
          <View style={{ width: wp(50), marginTop: hp(8) }}>
            <View style={{ width: wp(50), marginHorizontal: hp(17) }}>
              <Image style={{ width: wp(35), height: hp(17.5) }} source={{ uri: 'logo' }} />
            </View>
          </View>
        </View>
        <View style={{ width: wp(100), height: hp(100), backgroundColor: '#fff' }}>
          <View style={{ marginTop: hp(5) }}>
            <View style={{ width: wp(90), marginLeft: hp(4), marginBottom: hp(2) }}>
              <Text style={{ fontSize: hp(2.4), color: '#120D26',fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal'  }}>Sign In</Text>
            </View>
            <View
              style={{
                width: wp(90),
                marginHorizontal: hp(3.8),
                marginBottom: hp(3),
              }}>
              <View
                style={{
                  width: wp(85),
                  height: hp(7.5),
                  flexDirection: 'row',
                  borderColor: '#E4DFDF',
                  borderWidth: 1,
                  borderRadius: hp(1.2),
                }}>
                <View>
                  <Icon
                    style={styles.searchIcon}
                    name="mail-outline"
                    size={20}
                    color="#807A7A"
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Test@gmail.com"

                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>
            <View style={{ width: wp(90), marginHorizontal: hp(3.8) }}>
              <View
                style={{
                  width: wp(85),
                  height: hp(7.5),
                  flexDirection: 'row',
                  borderColor: '#E4DFDF',
                  borderWidth: 1,
                  borderRadius: hp(1.2),
                }}>
                <View>
                  <Lock
                    style={styles.searchIcon}
                    name="lock-closed-outline"
                    size={20}
                    color="#807A7A"
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"

                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: wp(90),
                marginLeft: hp(4),
                marginTop: hp(3),
                flexDirection: 'row',
              }}>
              <View style={{ width: wp(45), flexDirection: 'row' }}>
                <View style={{ marginTop: hp(0.5), marginLeft: hp(0.5) }}>
                  <Toggle
                    on={on}
                    onPress={() => toggle(!on)}
                    bg="gray200"
                    circleBg="blue500"
                    activeBg="blue700"
                    h={20}
                    w={35}
                  />
                </View>
                <View style={{ marginLeft: hp(2), marginTop: hp(0.5) }}>
                  <Text style={{ color: '#120D26' }}>Remember Me</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={()=>props.navigation.navigate('ForgetScreen')}
                style={{ width: wp(45), marginLeft: hp(4), marginTop: hp(0.5) }}>
                <Text style={{ color: '#120D26' }}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>

            <View style={{ width: wp(90), marginHorizontal: hp(6), marginTop: hp(3) }}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                <View style={{ width: wp(75), height: hp(7.5), borderRadius: hp(1.5), borderWidth: 1, borderColor: 'white', backgroundColor: '#5669FF', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <View style={{ width: wp(15) }}></View>
                  <View style={{ width: wp(20), marginVertical: hp(2) }}>
                    <Text style={{ color: 'white', fontSize: hp(2) }}>SIGN IN</Text>
                  </View>
                  <View style={{ width: wp(8), height: hp(4), marginTop: hp(1.8), backgroundColor: '#3D56F0', borderRadius: hp(50) }}>
                    <Aero style={{ marginVertical: hp(0.7), marginHorizontal: hp(0.7) }} name='arrowright' size={20} color='white' />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: wp(50), marginHorizontal: hp(25), marginTop: hp(3) }}>
              <Text>OR</Text>
            </View>
            <View style={{ width: wp(90), marginHorizontal: hp(6), marginTop: hp(3) }}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                <View style={{ width: wp(75), height: hp(7.5), borderRadius: hp(2), borderWidth: 1, borderColor: 'white', backgroundColor: '#F2F3F4', flexDirection: 'row' }}>
                  <View style={{ width: wp(15), marginTop: hp(1.5), marginLeft: hp(6.5) }}>
                    <Image style={{ width: wp(10), height: hp(5) }} source={{ uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png' }} />
                  </View>

                  <View style={{ width: wp(50), marginVertical: hp(2.5) }}>
                    <Text style={{ color: '#120D26', fontSize: hp(2) }}>Login with Google</Text>
                  </View>

                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}><View style={{ width: wp(90), marginHorizontal: hp(11.5), marginTop: hp(5) }}>
              <Text style={{ color: '#120D26' }}>Dont Have AN Account ?   <Text style={{ color: '#5669FF' }}>Sign Up</Text></Text>
            </View></TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({

  searchIcon: {
    padding: 18,
  },
  input: {
    flex: 1,
    paddingTop: 6,
    paddingRight: 10,
    paddingBottom: 6,
    paddingLeft: 0,

    backgroundColor: '#fff',
    color: '#424242',
  },
});
