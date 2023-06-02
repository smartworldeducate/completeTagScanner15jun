import React, { useState, useRef, Fragment } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Left from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import {
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Text,
    Linking,
    View,
    StatusBar,
    ScrollView,
    ImageBackground,
} from 'react-native';
import MainHeader from '../component/MainHeader';
// import axios from 'axios';
const ScannerScreen = (props) => {
    const [state, setState] = useState({
        scan: false,
        ScanResult: false,
        result: '',
    });

    const { scan, ScanResult, result } = state;

    var ncode = result?.data;

    var [barcode, setBarcode] = useState({
        item: [],
    });

    // console.log(barcode.item)

    const addCode = data => {
        const newCode = barcode.item.concat(data);
        setBarcode({ item: newCode });
    };

    console.log(barcode.item);

    const reaadCode = () => {
        return barcode.item?.map((v, index) => {
            console.log(v);
            if (v !== '') {
                return (
                    <View style={styles.cardsWrapper} key={index}>
                        <View style={styles.card}>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>data : {v.data}</Text>

                                <Text style={styles.cardDetails}>type of data : {v.type}</Text>
                            </View>
                        </View>
                    </View>
                );
            }
        });
    };

    // const setCodes = () => {r
    //   setShow(true);
    //   axios
    //     .post('http://192.168.6.227:5000/code', {code: dta})
    //     .then(function (response) {
    //       setShow(false);
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // };
    const scanner = useRef(null);

    const data = result;

    const onSuccess = e => {
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
            setState({
                result: e,
                scan: false,
                ScanResult: true,
            });
        }
    };

    const activeQR = e => {
        setState({
            scan: true,
        });
    };
    const scanAgain = () => {
        setState({
            scan: true,
            ScanResult: false,
        });
        addCode(state.result);
    };
    return (
        <View style={styles.parant}>
            <Fragment>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(100),height:hp(8),backgroundColor:'#041677'}}>
           <TouchableOpacity onPress={()=>props.navigation.goBack()}>
           <View style={{flexDirection:'row',marginTop:hp(2)}}>
           <Left style={{marginTop:hp(1),marginLeft:hp(1)}} name='arrowleft' size={25} color="#fff"/>
             <Text style={{fontSize:hp(3),marginLeft:hp(2),marginTop:hp(1),color:"#fff",fontFamily:'Roboto-Medium'}}>Scanner</Text>
           </View>
           </TouchableOpacity>
        

        </View>
                {!scan && !ScanResult && (
                   <>
                  <View>
                  <TouchableOpacity
                            style={[styles.categoryBtn, { marginTop: hp(10) }]}
                            onPress={() => activeQR('active qr')}>
                            <View style={styles.categoryIcon}>
                                <Fontisto name="shopping-barcode" size={35} color="#FF6347" />
                                {/* <ImageBackground resizeMode='contain' style={{width:wp(100),height:hp(160)}} source={{uri:"https://cdn.vectorstock.com/i/preview-1x/81/60/3d-fingerprint-recognition-vector-45768160.jpg"}}/> */}
                            </View>
                            <Text style={styles.categoryBtnTxt}>Scan Now</Text>
                        </TouchableOpacity>
                  </View>
                   </>
                )}

                {ScanResult && (
                    <>
                        <View>
                            <TouchableOpacity onPress={() => { }}>
                                <Text style={styles.text}>save now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={scanAgain}>
                                <Text style={styles.text}>
                                    <Icon name="shopping-barcode" size={60} color="white" />
                                   
                                </Text>
                               
                            </TouchableOpacity>
                        </View>
                        <ScrollView>{reaadCode()}</ScrollView>
                    </>
                )}

                {scan && (
                    <QRCodeScanner
                        reactivate={true}
                        showMarker={true}
                        ref={scanner}
                        onRead={onSuccess}
                        bottomContent={
                            <View style={{ paddingTop: 30 }}>
                                <TouchableOpacity onPress={() => scanner.reactivate()}>
                                    <Text>OK. Got it!</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => setState({ scan: false })}>
                                    <Text>Stop Scan</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                )}
            </Fragment>
        </View>
    );
};
export default ScannerScreen;

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        width: wp(100),
        alignSelf: 'center',
        marginTop: 25,
        
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fdeae7' ,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35',
    },

    parant: {
        flex: 1,
        height: 750,
        backgroundColor: '#041677',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    cardsWrapper: {
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        flexDirection: 'row',
        shadowColor: '#999',
        marginBottom: 10,
    },

    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
});