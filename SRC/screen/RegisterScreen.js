import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Build from 'react-native-vector-icons/FontAwesome';
import User from 'react-native-vector-icons/AntDesign';
import Lock from 'react-native-vector-icons/Ionicons';
import Okey from 'react-native-vector-icons/Entypo';
import Aero from 'react-native-vector-icons/AntDesign';
import Camra from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import RNFetchBlob from "rn-fetch-blob";
const fs = RNFetchBlob.fs;
import Toast from 'react-native-root-toast';
import Modal from "react-native-modal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native';
import Check from 'react-native-vector-icons/AntDesign';
import { registerUser } from '../features/users/userSlice';
const RegisterScreen = (props) => {
  const dispatch = useDispatch()
  const message = useSelector((state) => state.register)
  console.log(message)
  const [isModalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Admin', value: 'Y' },
    { label: 'User', value: 'N' }
  ]);
  console.log("dropdown value",value)
  const [animodal, setAnimodal] = useState(false);
  const [success, setSuccess] = useState(false)
  const [comp, setComp] = useState('')
  const [full_name, setFname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpass, setConfirmpass] = useState('')
  const [show, setShow] = useState(true)
  const [image, setImage] = useState('');
  const [imgBase64, setImgBase64] = useState(null);
  const [animation, setAnimation] = useState(true)
  const [gData, setGdata] = useState('')
  

  const handleRwegister = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (value == "") {
      ToastAndroid.showWithGravity(
        "select user is required",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
    else if (gData.name == "") {
      ToastAndroid.showWithGravity(
        "name is required",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
    else if (reg.test(gData.email) === false) {
      ToastAndroid.showWithGravity(
        "email is not correct",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
    else if (password !== confirmpass) {
      ToastAndroid.showWithGravity(
        "Passwoad and confirm password should be same",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
    else if (value && gData.name && gData.email && password != " ") {
      setAnimodal(true)
      dispatch(registerUser({ user_type: value, full_name: gData.name, email: gData.email, password: password, photo: imgBase64, comp_name: comp, google_id: gData.id }))
      setGdata('')
      setImgBase64(null)
      setPassword('')
      setConfirmpass('')
      setShow(true)
      setAnimodal(message?.isLoading)
      setSuccess(message?.isSuccess)
      setInterval(() => {
        setSuccess(false)
      }, 5000);
      props.navigation.navigate("Login")


    } else {
      ToastAndroid.showWithGravity(
        "All Fields are  required",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
  };


  const takePhotoFromCamera = () => {
    setModalVisible(false);
    setShow(false)
    setImage('');
    ImagePicker.openCamera({
      mediaType: 'photo',
      includeBase64: true,
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then((image) => {
      setImage(image.path);
      setImgBase64(image.data)

    });
  }

  const choosePhotoFromLibrary = () => {
    setModalVisible(false);
    setShow(false)
    setImage('');
    ImagePicker.openPicker({
      includeBase64: true,
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log("library image", image.data)
      setImgBase64(image.data)
      setImage(image.path);


    });
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '249159142983-3r1307q40tb9de7qctsm4ckk244etg9h.apps.googleusercontent.com',
    });
  }, [])
  const signinWithGoogle = async () => {
    setImage('')
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const { user } = userInfo
      setImage(user.photo)
      await setGdata(user)
      let imagePath = null;
      await RNFetchBlob.config({
        fileCache: true
      })
        .fetch("GET", user.photo)
        // the image is now dowloaded to device's storage
        .then(resp => {
          // the image path you can use it directly with Image component
          imagePath = resp.path();
          return resp.readFile("base64");
        })
        .then(base64Data => {
          // here's base64 encoded image
          console.log(base64Data);
          setImgBase64(base64Data)
          // remove the file from storage
          return fs.unlink(imagePath);
        });


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
      <StatusBar
        backgroundColor={'#fff'}
        barStyle="dark-content"
        hidden={false}
      />

      {success && (<View style={{ flex: 1 }}>
        <Modal isVisible={success}>
          <View style={{ width: wp(90), height: hp(20), backgroundColor: '#EAFAF1', borderRadius: hp(1) }}>
            <View style={{ width: wp(15), height: hp(7.5), backgroundColor: '#82E0AA', borderRadius: hp(50), marginHorizontal: hp(18), marginTop: hp(2.5) }}>
              <Okey style={{ marginHorizontal: hp(0.5), marginVertical: hp(0.5) }} name='check' size={50} color='#1D8348' />
            </View>
            <View style={{ marginTop: hp(2), marginHorizontal: hp(7), width: wp(80) }}>
              <Text style={{ fontSize: hp(2.5), color: '#82E0AA' }}>user register successfully</Text>
            </View>

          </View>
        </Modal>
      </View>)}
      {animation && (<View style={{ flex: 1 }}>
        <Modal isVisible={animodal}>
          <View style={{width: wp(30), height: hp(15), backgroundColor: '#EAFAF1', borderRadius: hp(2), justifyContent: 'center', alignItems: 'center',marginHorizontal:hp(15) }}>

            <View style={{ marginTop: hp(8) }}>
              <ActivityIndicator animating={animation} size={'large'} />
            </View>

          </View>
        </Modal>
      </View>)}
      {isModalVisible && (<View style={{ flex: 1 }}>
        <Modal isVisible={isModalVisible}>
          <View style={{ width: wp(90), height: hp(25), backgroundColor: '#fff', borderRadius: hp(1) }}>


            <View style={{ width: wp(80), height: 1, borderRadius: 50, backgroundColor: '#5669FF', marginHorizontal: hp(2.5), marginVertical: hp(1) }}></View>
            <TouchableOpacity onPress={takePhotoFromCamera} style={{ width: wp(90), marginVertical: hp(1.5), alignItems: 'center' }}>
              <Text style={{ fontSize: hp(2), color: '#5669FF' }}>choose from camara</Text>
            </TouchableOpacity>
            <View style={{ width: wp(80), height: 1, borderRadius: 50, backgroundColor: '#5669FF', marginHorizontal: hp(2.5), marginVertical: hp(1) }}></View>

            <TouchableOpacity onPress={choosePhotoFromLibrary} style={{ width: wp(90), marginVertical: hp(1.5), alignItems: 'center' }}>
              <Text style={{ fontSize: hp(2), color: '#5669FF' }}>choose from gallary</Text>
            </TouchableOpacity>

            <View style={{ width: wp(80), height: 1, borderRadius: 50, backgroundColor: '#5669FF', marginHorizontal: hp(2.5), marginVertical: hp(1) }}></View>




            <TouchableOpacity onPress={toggleModal} style={{ width: wp(90), marginVertical: hp(1.5), alignItems: 'center' }}>
              <Text style={{ fontSize: hp(2), color: '#5669FF' }}>cancel</Text>
            </TouchableOpacity>


          </View>
        </Modal>
      </View>)}
      <View style={{ width: wp(100), paddingHorizontal: hp(3), backgroundColor: 'white' }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View style={{ flexDirection: 'row', marginTop: hp(2) }}>
            <View style={{ marginTop: hp(0.5) }}>
              <Check name='arrowleft' size={25} color='black' />
            </View>

          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {!image && (<View style={{ width: wp(100), backgroundColor: '#fff' }}>

          <View style={{ width: wp(90), position: 'relative', marginHorizontal: hp(16), marginTop: hp(3), marginBottom: hp(2) }}>
            <TouchableOpacity onPress={toggleModal} style={{ width: wp(8), height: hp(4), borderRadius: hp(50), position: 'absolute', top: hp(2.5), left: hp(11), zIndex: 1 }}>
              <Camra

                name="camera"
                size={30}
                color="gray"
              />
            </TouchableOpacity>
            <Image
              style={{ width: wp(25), height: hp(12), marginHorizontal: hp(2), marginTop: hp(2), borderRadius: hp(50) }}
              source={{ uri: 'group' }} resizeMode='cover' />
          </View>


        </View>)}
        {image && (<View style={{ width: wp(100), backgroundColor: '#fff' }}>

          <View style={{ width: wp(90), position: 'relative', marginHorizontal: hp(16), marginTop: hp(3), marginBottom: hp(2) }}>
            <TouchableOpacity onPress={toggleModal} style={{ width: wp(8), height: hp(4), borderRadius: hp(50), position: 'absolute', top: hp(1), left: hp(11), zIndex: 1 }}>
              <Camra

                name="camera"
                size={30}
                color="gray"
              />
            </TouchableOpacity>
            <Image
              style={{ width: wp(25), height: hp(12.5), marginHorizontal: hp(2), marginTop: hp(2), borderRadius: hp(50) }}
              source={{ uri: image }} resizeMode='cover' />
          </View>


        </View>)}
        <View
          style={{ width: wp(100), height: hp(100), backgroundColor: '#fff' }}>


          <View style={{ marginTop: hp(1) }}>
            <View style={{ width: wp(90), marginHorizontal: hp(2.6), marginBottom: hp(2), zIndex: 1 }}>
              <DropDownPicker
              placeholder='Admin/User'
              placeholderStyle={{color:'gray'}}
              style={{
                borderColor: '#E4DFDF',
                borderWidth: 1,
                borderRadius: hp(1.2),
                height: hp(7.5),
              }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
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
                    name='company_name'
                    placeholder="Company Name"
                    onChangeText={((e) => setComp(e))}
                    value={comp}
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
                    name="full_name"
                    placeholder="Full Name"
                    value={gData.name}
                    onChangeText={((e) => setFname(e))}

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
                    name="email"
                    placeholder="Email"
                    value={gData.email}
                    onChangeText={(e) => setEmail(e)}
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
                    name="password"
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
                    name="confirm_password"
                    placeholder="Confirm Password"
                    value={confirmpass}
                    onChangeText={((e) => setConfirmpass(e))}

                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>

            <View style={{ width: wp(90), marginHorizontal: hp(6), marginTop: hp(2.5) }}>
              <TouchableOpacity onPress={handleRwegister}>
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
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{ width: wp(90), marginHorizontal: hp(11.5), marginTop: hp(2), marginBottom: hp(5) }}>
              <Text style={{ color: 'black' }}>Already Have an Account ? <Text style={{ color: '#5669FF' }}>Sign In</Text></Text>
            </TouchableOpacity>


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
