import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { handleScaneer } from '../features/scan/scanSlice'
import { filterCats } from '../features/category/singleCatSlice';
import Modal from "react-native-modal";
import { Toast } from 'galio-framework';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Check from 'react-native-vector-icons/AntDesign';
import Tin from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomSheet } from '@rneui/themed';
import { useDispatch } from 'react-redux';
const DetailScreen = props => {
  const dispatch = useDispatch()
  const [sData, setSdata] = useState([])
  const [animodal, setAnimodal] = useState(false);
  const [animation, setAnimation] = useState(true)
  const [isShow, setShow] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(false)
  const data = props.route.params;
  console.log(data.user_id)
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({
    scan: false,
    ScanResult: false,
    result: '',
  });

  const getcatHandle = async (user_id) => {
    setAnimodal(true)
    const data = await dispatch(filterCats({ user_id: user_id }))
    // console.log("single data", data.payload)
    if (data !== "") {
      await setSdata(data.payload)
      // console.log("tagdata here", data.payload)
      setAnimodal(false)
    }
  }

  useEffect(() => {
    getcatHandle(data.user_id)
  }, [])

  const { scan, ScanResult, result } = state;

  var ncode = result?.data;

  var [barcode, setBarcode] = useState({
    item: [],
  });

  const addCode = data => {
    const newCode = barcode.item.concat(data);
    setBarcode({ item: newCode });
  };
  // console.log(barcode.item);


  const scanner = useRef(null);

  const scanData = result;

  const onSuccess = async e => {
    console.log(data.user_id, ' ==  ', e);

    data.user_id == e.data ? alert(" success") : setShow(true)
    setInterval(() => {
      setShow(false)
    }, 4000);
    const check = e.data.substring(0, 4);
    setState({
      result: e,
      scan: false,
      ScanResult: true,
    });
    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    } else {
      await dispatch(handleScaneer({ tag_id: e.data, user_id: data.user_id,setup_id:data.setup_id }))


      setState({
        result: e,
        scan: false,
        ScanResult: true,
      });
      setVisible(false)
      console.log("scan data", e.data)
      const catData = await dispatch(filterCats({ user_id: data.user_id }))
      await setSdata(catData.payload)
    }

  };

  const activeQR = e => {
    setState({
      scan: true,
    });
  };


  const handleQrcode = () => {
    // setShow(true)
    setVisible(true)
    activeQR('active qr')

  }

  const handleReset = () => {
    // setShow(true)
    setState({ scan: false })
    setVisible(false)
    // setInterval(() => {
    //   setShow(false)
    // }, 2000);
  }


  return (
    <>
      <Toast isShow={isShow} positionIndicator="top" style={{ backgroundColor: '#F1948A', width: wp(90), marginHorizontal: hp(2.5), borderRadius: 5 }}>
        <Text style={{ color: '#fff' }}>please enter valid Qrcode</Text>
      </Toast>

      {animation && (<View >
        <Modal isVisible={animodal}>
        <View style={{ width: wp(90), height: hp(20), backgroundColor: '#EAFAF1', borderRadius: hp(1),justifyContent:'center',alignItems:'center' }}>

<View style={{}}>
    <ActivityIndicator animating={animation} size={'large'}/>
    
  </View>
  <View style={{}}>
  <Text>please wait</Text>
  </View>

</View>
        </Modal>
      </View>)}
      <BottomSheet isVisible={visible} style={{ width: wp(100), height: hp(100), backgroundColor: '#fff', flex: 1 }}>
        <TouchableOpacity onPress={handleReset} style={{ width: wp(100), position: 'relative', zIndex: 1, marginBottom: hp(20) }}>
          <View style={{ position: 'absolute', top: 20, left: hp(45) }}>
            <Text style={{ color: 'black' }}>X</Text>
          </View>
        </TouchableOpacity>

        {scan && (
          <QRCodeScanner
            cameraStyl={{ height: hp(120) }}
            reactivate={true}
            showMarker={true}
            ref={scanner}
            onRead={onSuccess}
            bottomContent={
              <View style={{ paddingTop: hp(8), flexDirection: 'row', marginTop: hp(8) }}>


              </View>
            }
          />
        )}
      </BottomSheet>
      <View>
        {sData?.map((e, i) => {
          const { setup_id ,scan_time} = e
          console.log("map fdata",e)

          return (<View key={i}>
            <View style={{ width: wp(100) }}>
              <ImageBackground
                style={{ width: wp(100), height: hp(30) }}
                source={{ uri: e.tag_banner }}
                resizeMode="cover">
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <View style={{ width: wp(90), marginTop: hp(3), marginLeft: hp(2) }}>
                    <Check name='arrowleft' size={30} color='white' />
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </View>

            <View style={{ width: wp(90), marginLeft: hp(3) }}>
              <Text style={{ fontSize: hp(4), color: 'black', fontWeight: '600', fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>{e.tag_desc}</Text>
            </View>
            <View style={{ width: wp(90), marginHorizontal: hp(3.5), marginTop: hp(5) }}>
              <Text style={{ fontSize: hp(2), fontWeight: 'bold', color: 'black' }}>About</Text>
            </View>
            <View style={{ width: wp(90), marginHorizontal: hp(3.5), marginTop: hp(2) }}>
              <Text style={{ lineHeight: 28, fontSize: hp(2), color: '#AEB6BF' }}>
                {e.tag_text}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', width: wp(90), marginTop: hp(5) }}>

              {e.scan_time == null && (<View style={{ flexDirection: 'row', width: wp(45), marginLeft: hp(7) }}>
                <View style={{ width: wp(14), height: hp(7), borderRadius: hp(2), backgroundColor: setup_id == 1 ? '#D6EAF8' : '#5DADE2' }}>
                  <Tin style={{ marginVertical: hp(1.5), marginHorizontal: hp(1.7) }} name='clock-time-nine' size={30} color={setup_id == 1 ? '#5DADE2' : '#D6EAF8'} />
                </View>
                <View style={{ marginLeft: hp(1.5), marginTop: hp(0.5) }}>
                  <View>
                    <Text style={{ fontSize: hp(2), color: 'black' }}>Attendence-Only</Text>
                  </View>
                  {/* <View style={{ marginTop: hp(0.5) }}>
                    <Text style={{ color: '#2C3E50' }}>{setup_id == 1 ? 'IN' : 'OUT'}  Time</Text>
                  </View> */}
                </View>
              </View>)}
              {e.scan_time !== null && (<View style={{ flexDirection: 'row', width: wp(45), marginLeft: hp(7) }}>
                <View style={{ width: wp(14), height: hp(7), borderRadius: hp(2), backgroundColor: setup_id == 1 ? '#D6EAF8' : '#5DADE2' }}>
                  <Tin style={{ marginVertical: hp(1.5), marginHorizontal: hp(1.7) }} name='clock-time-nine' size={30} color={setup_id == 1 ? '#5DADE2' : '#D6EAF8'} />
                </View>
                <View style={{ marginLeft: hp(1.5), marginTop: hp(0.5) }}>
                  <View>
                    <Text style={{ fontSize: hp(2), color: 'black' }}>{e.scan_time}</Text>
                  </View>
                  <View style={{ marginTop: hp(0.5) }}>
                    <Text style={{ color: '#2C3E50' }}>{setup_id == 1 ? 'IN' : 'OUT'}  Time</Text>
                  </View>
                </View>
              </View>)}


            </View>

            <View style={{ marginTop: hp(3), backgroundColor: "#5669FF", width: wp(100), height: hp(7), position: 'absolute', top: hp(90), left: 0, right: 0, bottom: 0, }}>
              <TouchableOpacity onPress={handleQrcode} disabled={scan_time == null ? false :setup_id == 2 ? false:true} style={{ opacity: visibleBtn ? 0.5 : 1 }}>
                <View style={{ width: wp(80), height: hp(8), backgroundColor: '#5669FF', flexDirection: 'row', marginHorizontal: hp(4) }}>
                  <View style={{ width: wp(40), marginVertical: hp(2), marginLeft: hp(8) }}>
                    <Text style={{ color: 'white', fontSize: hp(2.5) }}>SCAN NOW</Text>
                  </View>
                  <View style={{ width: wp(40), marginRight: hp(3), marginTop: hp(1) }}>
                    <Tin style={{ marginVertical: hp(1.2), marginHorizontal: hp(1.3) }} name='barcode-scan' size={30} color='white' />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

          </View>)

        })}
      </View>

    </>
  );
};

export default DetailScreen;

