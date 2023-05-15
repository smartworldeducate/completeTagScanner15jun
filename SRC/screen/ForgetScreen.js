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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Check from 'react-native-vector-icons/AntDesign';

const ForgetScreen = (props) => {
  const [on, toggle] = useState(false);
  return (
    <>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle="dark-content"
        hidden={false}
      />
       <View style={{ width: wp(100), paddingHorizontal: hp(3), backgroundColor: 'white' }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View style={{ flexDirection: 'row', marginTop: hp(2) }}>
            <View style={{ marginTop: hp(0.5) }}>
              <Check name='arrowleft' size={25} color='black' />
            </View>
            
          </View>
        </TouchableOpacity>
      </View>
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
            <Text style={{ fontSize: hp(2.4), color: '#120D26',fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>
              Forgot Password
            </Text>
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
                <Lock
                  style={styles.searchIcon}
                  name="lock-closed-outline"
                  size={20}
                  color="#000"
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Your Password"

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
                  color="#000"
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"

                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
          </View>


          <View style={{ width: wp(90), marginHorizontal: hp(6), marginTop: hp(8) }}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                <View style={{ width: wp(75), height: hp(7.5), borderRadius: hp(1.5), borderWidth: 1, borderColor: 'white', backgroundColor: '#5669FF', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <View style={{ width: wp(15) }}></View>
                  <View style={{ width: wp(20), marginVertical: hp(2) }}>
                    <Text style={{ color: 'white', fontSize: hp(2) }}>SUBMIT</Text>
                  </View>
                  <View style={{ width: wp(8),height:hp(4), marginTop: hp(1.8),backgroundColor:'#3D56F0',borderRadius:hp(50) }}>
                    <Aero style={{ marginVertical: hp(0.7), marginHorizontal: hp(0.7) }} name='arrowright' size={20} color='white' />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

          <View
            style={{
              width: wp(90),
              marginHorizontal: hp(11.5),
              marginTop: hp(15),
            }}>
            <Text style={{color:'black'}}>Already have an account ? <Text style={{color:'#5669FF'}}>Sign Up</Text></Text>
          </View>
        </View>
      </View>



    </>
  );
};

export default ForgetScreen;

const styles = StyleSheet.create({
  searchSection: {
    width: wp(90),
    height: hp(20),

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#E4DFDF',
    borderWidth: 1,
  },
  searchIcon: {
    padding: 18,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,

    backgroundColor: '#fff',
    color: '#424242',
  },
 
});
