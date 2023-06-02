import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Lock from 'react-native-vector-icons/Ionicons';
import Aero from 'react-native-vector-icons/AntDesign';
import { Toggle } from 'react-native-magnus';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import { loginUser } from '../features/register/loginSlice'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
const LoginScreen = (props) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [on, toggle] = useState(false);
  const [loaduiung, setLoding] = useState(false)
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState('')
 
  const handleLogin = async () => {
   props.navigation.navigate("Home");

    // if (email && password !== "") {
    //   var login_data = await dispatch(loginUser({ email: email, password: password }))
    //   setData(login_data?.payload?.message)
    //   setLoding(true)
    //   if (login_data?.payload?.success == 1) {
    //     props.navigation.navigate("Home");
    //     setLoding(false)
    //   } else {
    //     ToastAndroid.showWithGravity(  
    //       login_data?.payload?.message,  
    //       ToastAndroid.LONG,  
    //       ToastAndroid.CENTER  
    //     );  
    //   }
    // } else {
    //   ToastAndroid.showWithGravity(  
    //     "enter valid username and password",  
    //     ToastAndroid.LONG,  
    //     ToastAndroid.CENTER  
    //   );  
    // }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '249159142983-3r1307q40tb9de7qctsm4ckk244etg9h.apps.googleusercontent.com',
    });
  }, [])


  const signinWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const { id,name,email,givenName } = userInfo?.user
      console.log(userInfo?.user)
      // props.navigation.navigate('Home');

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <StatusBar
          backgroundColor={'#fff'}
          barStyle="dark-content"
          hidden={false}
        />

        {/* <View style={styles.container}>
          <Container position="top" />

          
        </View> */}

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
              <Text style={{ fontSize: hp(2.4), color: '#120D26', fontWeight: '600', fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>Sign In</Text>
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
                    value={email}
                    onChangeText={((e) => setEmail(e))}
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
                    value={password}
                    onChangeText={((e) => setPassword(e))}
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
                onPress={() => props.navigation.navigate('ForgetScreen')}
                style={{ width: wp(45), marginLeft: hp(4), marginTop: hp(0.5) }}>
                <Text style={{ color: '#120D26' }}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: wp(90), marginHorizontal: hp(6), marginTop: hp(3) }}>
              <TouchableOpacity onPress={handleLogin}>
                <View style={{ width: wp(75), height: hp(7.5), borderRadius: hp(1.5), borderWidth: 1, borderColor: 'white', backgroundColor: '#5669FF', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <View style={{ width: wp(15), marginTop: hp(1.5) }}>
                    {loaduiung && (<ActivityIndicator size="large" color="#0000ff" animating={loaduiung} />)}
                  </View>
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
              <TouchableOpacity onPress={() => signinWithGoogle().then(res => {
                console.log("respo:", res)
              }).catch(error => {
                console.log(error)
              })}>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
