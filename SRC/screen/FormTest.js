import { View, Text, TouchableOpacity ,ActivityIndicator} from 'react-native'
import { WebView } from 'react-native-webview';
import Check from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
import React, { useCallback, useEffect, useState } from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FormTest = (props) => {
  const [animodal, setAnimodal] = useState(false);
  const [animation, setAnimation] = useState(true)
  useEffect(() => {
    setAnimodal(true)
    setInterval(()=>{
      setAnimodal(false)
    },4000)
    
  }, [])
  return (
    <>

      {animation && (<View >
        <Modal isVisible={animodal}>
          <View style={{ width: wp(30), height: hp(15), backgroundColor: '#EAFAF1', borderRadius: hp(2), justifyContent: 'center', alignItems: 'center', marginHorizontal: hp(15) }}>

            <View style={{}}>
              <ActivityIndicator animating={animation} size={'large'} />

            </View>
            {/* <View style={{}}>
              <Text>please wait</Text>
            </View> */}

          </View>
        </Modal>
      </View>)}
      {/* <View style={{ width: wp(90), marginHorizontal: hp(3) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <View style={{ flexDirection: 'row', marginTop: hp(5) }}>
                        <View style={{ marginTop: hp(0.5) }}>
                            <Check name='arrowleft' size={25} color='black' />
                        </View>
                        <View style={{ marginLeft: hp(1.5),marginTop:hp(0.5) }}>
                            <Text style={{ color: '#120D26', fontSize: hp(2.4), fontWeight: '600', fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>WebForm</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View> */}
      <WebView
        source={{
          uri: 'https://www.youtube.com/',
        }}
        style={{ marginTop: 20 }}
      />
    </>
  )
}

export default FormTest


// https://b2training.beaconhouse.net/student-medical-history/testweb_form.php