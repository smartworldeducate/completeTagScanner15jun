import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import Build from 'react-native-vector-icons/FontAwesome';
import User from 'react-native-vector-icons/AntDesign';
import Lock from 'react-native-vector-icons/Ionicons';
import Aero from 'react-native-vector-icons/AntDesign';
import Camra from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native';
import Check from 'react-native-vector-icons/AntDesign';

const RegisterScreen = (props) => {
  const [show, setShow] = useState(true)
  const [image, setImage] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [country, setCountry] = useState([
    { label: 'Admin', value: '1' },
    { label: 'User', value: '2' },
  ]);
  const takePhotoFromCamera = () => {
    setImage('');
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      setShow(false)
    });
  }
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
            {/* <View style={{ marginLeft: hp(1.5),mt:hp(0.3) }}>
                            <Text style={{color: '#120D26', fontSize: hp(2.4),fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal'}}>Create Tags</Text>
                        </View> */}
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {image && (<View style={{ width: wp(100), backgroundColor: '#fff' }}>

          <View style={{ width: wp(90), position: 'relative', marginHorizontal: hp(16), marginTop: hp(3), marginBottom: hp(2) }}>
            <TouchableOpacity onPress={takePhotoFromCamera} style={{ width: wp(8), height: hp(4), borderRadius: hp(50), position: 'absolute', top: hp(2.5), left: hp(11), zIndex: 1 }}>
              <Camra

                name="camera"
                size={30}
                color="gray"
              />
            </TouchableOpacity>
            <Image
              style={{ width: wp(25), height: hp(12), marginHorizontal: hp(2), marginTop: hp(2), borderRadius: hp(50) }}
              source={{ uri: image }} resizeMode='cover' />
          </View>


        </View>)}
        {show && (<View style={{ width: wp(100), backgroundColor: '#fff' }}>

          <View style={{ width: wp(90), position: 'relative', marginHorizontal: hp(16), marginTop: hp(3), marginBottom: hp(2) }}>
            <TouchableOpacity onPress={takePhotoFromCamera} style={{ width: wp(8), height: hp(4), borderRadius: hp(50), position: 'absolute', top: hp(1), left: hp(11), zIndex: 1 }}>
              <Camra

                name="camera"
                size={30}
                color="gray"
              />
            </TouchableOpacity>
            <Image
              style={{ width: wp(25), height: hp(12.5), marginHorizontal: hp(2), marginTop: hp(2) }}
              source={{ uri: 'group' }} resizeMode='cover' />
          </View>


        </View>)}


        <View
          style={{ width: wp(100), height: hp(100), backgroundColor: '#fff' }}>
          <View style={{ marginTop: hp(1) }}>

            <View style={{ width: wp(90), marginHorizontal: hp(2.6), marginBottom: hp(2) }}>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={{ color: '#807A7A' }}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={country}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Admin/User  ' : '...'}
                searchPlaceholder="Search..."
                value={countryData}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item, i) => {
                  setCountryData(item.label);
                  setIsFocus(false);
                }}
              />
            </View>

            <View
              style={{
                width: wp(95),
                marginHorizontal: hp(2.6),
                marginBottom: hp(3),
              }}>
              <View
                style={{
                  width: wp(90),
                  height: hp(7.5),
                  flexDirection: 'row',
                  borderColor: '#E4DFDF',
                  borderWidth: 1,
                  borderRadius: hp(1.2),
                }}>
                <View>
                  <Build
                    style={styles.searchIcon}
                    name="building-o"
                    size={20}
                    color="#807A7A"
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Company Name"

                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: wp(95),
                marginHorizontal: hp(2.6),
                marginBottom: hp(3),
              }}>
              <View
                style={{
                  width: wp(90),
                  height: hp(7.5),
                  flexDirection: 'row',
                  borderColor: '#E4DFDF',
                  borderWidth: 1,
                  borderRadius: hp(1.2),
                }}>
                <View>
                  <User
                    style={styles.searchIcon}
                    name="user"
                    size={20}
                    color="#807A7A"
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Full Name"

                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: wp(95),
                marginHorizontal: hp(2.6),
                marginBottom: hp(3),
              }}>
              <View
                style={{
                  width: wp(90),
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
                    placeholder="Email"

                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: wp(95),
                marginHorizontal: hp(2.6),
                marginBottom: hp(3),
              }}>
              <View
                style={{
                  width: wp(90),
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
                width: wp(95),
                marginHorizontal: hp(2.6),
                marginBottom: hp(3),
              }}>
              <View
                style={{
                  width: wp(90),
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
                    placeholder="Confirm Password"

                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>


            <View style={{ width: wp(90), marginHorizontal: hp(6), marginTop: hp(2.5) }}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                <View style={{ width: wp(75), height: hp(7.5), borderRadius: hp(1.5), borderWidth: 1, borderColor: 'white', backgroundColor: '#5669FF', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <View style={{ width: wp(15) }}></View>
                  <View style={{ width: wp(20), marginVertical: hp(2) }}>
                    <Text style={{ color: 'white', fontSize: hp(2) }}>SIGN UP</Text>
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

            <View style={{ width: wp(90), marginHorizontal: hp(6), marginTop: hp(2.5) }}>
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
            <View style={{ width: wp(90), marginHorizontal: hp(11.5), marginTop: hp(2), marginBottom: hp(5) }}>
              <Text style={{ color: 'black' }}>Dont Have AN Account ? <Text style={{ color: '#5669FF' }}>Sign Up</Text></Text>
            </View>


          </View>
        </View>

      </ScrollView>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  dropdown: {
    height: hp(7.5),
    borderColor: '#E4DFDF',
    borderWidth: 1,
    borderRadius: hp(1.2),
    paddingVertical: hp(3),
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingLeft: hp(2),
  },
  label: {
    position: 'absolute',
    backgroundColor: 'blue',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  searchSection: {
    width: wp(90),
    height: hp(20),

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
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
  iconStyle: {
    marginRight: hp(2)
  }
});
