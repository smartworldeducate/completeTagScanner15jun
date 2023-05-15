import {View, ImageBackground, StatusBar, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(async () => {
      props.navigation.navigate('Drawer');
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={'#17202A  '}
        barStyle="dark-content"
        hidden={true}
      />
      <ImageBackground
        style={{width: wp(100), height: hp(100)}}
        source={{uri: 'splash'}} resizeMode='cover'>
        <View
          style={{
            width: wp(80),
            height: hp(40),
        
            marginVertical: hp(35),
          }}>
          <View style={{width:wp(80),marginHorizontal:hp(17)}}>
          <ImageBackground
            style={{width: wp(40), height: hp(20)}}
            source={{uri: 'logo'}}
            resizeMode="contain">
            
          </ImageBackground>
          </View>
          <View style={{w:wp(90),marginLeft:hp(4)}}>
                <Text style={{fontSize: hp(4), color: '#fff',marginLeft:hp(8),fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal'}}>
                  TAG SCANNER
                </Text>
              </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
