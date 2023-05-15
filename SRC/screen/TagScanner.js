import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {Div} from 'react-native-magnus';
import React from 'react';
import Left from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TagScanner = (props) => {
  return (
    <>
      <StatusBar backgroundColor={'#041677'} />
      <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(100),height:hp(8),backgroundColor:'#041677'}}>
           <TouchableOpacity onPress={()=>props.navigation.goBack()}>
           <View style={{flexDirection:'row',marginTop:hp(2)}}>
           <Left style={{marginTop:hp(1),marginLeft:hp(1)}} name='arrowleft' size={25} color="#fff"/>
             <Text style={{fontSize:hp(3),marginLeft:hp(2),marginTop:hp(1),color:"#fff",fontFamily:'Roboto-Medium'}}>Tag Scanner</Text>
           </View>
           </TouchableOpacity>
        

        </View>
      <View style={{width: wp(100),backgroundColor:'#041677'}}>
            <View style={{width:wp(50),marginTop:hp(2)}}>
                <View style={{width:wp(50),marginHorizontal:hp(18)}}><Icon name='bookmarks' size={100} color='#fff'/></View>
                <View style={{width:wp(50),marginHorizontal:hp(13),marginTop:hp(2)}}>
                    <Text style={{fontSize:hp(4),color:'#fff'}}>Tag Scanner</Text>
                </View>
            </View>
        </View>

      <View
        style={{width: wp(100), height: hp(100), backgroundColor: '#041677'}}>
        <View style={{marginTop: hp(3)}}>
          <View style={{width: wp(90), marginLeft: hp(7), marginBottom: hp(3)}}>
            <Text style={{fontSize: hp(3.5), color: 'white',fontWeight:'400',fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal'}}>
              CHAT GPT Introduction
            </Text>
          </View>
          <View style={{width:wp(90),height:hp(35),marginHorizontal:hp(2.5),borderRadius:hp(3),borderWidth:1,borderColor:'#fff'}}>

            <View style={{width:wp(88),marginHorizontal:hp(2),marginVertical:hp(2)}}>
                <Text style={{fontWeight:'400',fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal',fontSize:hp(2),marginEnd:hp(1),color:"#fff",letterSpacing:0.5,lineHeight:25}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in augue ac tellus tempor tristique vel at ante. Nam in nisl eleifend, semper magna nec, pulvinar tortor. Aenean lorem ligula, mollis a vehicula at, facilisis tincidunt sapien. Nam dapibus tempus est pharetra interdum. </Text>
            </View>
          
          </View>
          <View style={{marginLeft: hp(2.5),marginTop:hp(5)}}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: '#356BF8',
                borderRadius: 10,
                alignItems: 'center',
                width: wp(90),
                paddingVertical: hp(1.5),
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{color: '#fff', fontSize: 20,textAlign:'center'}}>SCAN NOW</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default TagScanner;
