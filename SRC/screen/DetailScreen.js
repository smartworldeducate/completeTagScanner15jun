import {View, Text, StatusBar, ImageBackground,TouchableOpacity} from 'react-native';
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import Check from 'react-native-vector-icons/AntDesign';
  import Tin from 'react-native-vector-icons/MaterialCommunityIcons';
  import Tout from 'react-native-vector-icons/MaterialCommunityIcons';


const DetailScreen = props => {
  return (
    <>
    <StatusBar
        backgroundColor={'trasparent'}
        barStyle="Light-content"
        hidden={false}
      />
      <View style={{width:wp(100)}}>
      <ImageBackground
        style={{width: wp(100), height: hp(30)}}
        source={{uri: 'chatgpt'}}
        resizeMode="cover">
          <TouchableOpacity onPress={()=>props.navigation.goBack()}>
         <View style={{width:wp(90),marginTop:hp(3),marginLeft:hp(3)}}>
           <Check name='arrowleft' size={30} color='white'/>
         </View>
         </TouchableOpacity>
      </ImageBackground>
      </View>

      <View style={{width:wp(90),marginLeft:hp(3)}}>
        <Text style={{fontSize:hp(4),color:'black'}}>CHAT GPT Introduction</Text>
      </View>
      <View style={{width:wp(90),marginHorizontal:hp(3.5),marginTop:hp(5)}}>
        <Text style={{fontSize:hp(2),fontWeight:'bold',color:'black'}}>About</Text>
      </View>
      <View style={{width:wp(90),marginHorizontal:hp(3.5),marginTop:hp(2)}}>
        <Text style={{lineHeight:28,fontSize:hp(2),color:'black'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Text>
      </View>
      <View style={{flexDirection:'row',width:wp(90),marginTop:hp(2)}}>
        <View style={{flexDirection:'row',width:wp(45),marginLeft:hp(7)}}>
          <View style={{width:wp(14),height:hp(7),borderRadius:hp(2),borderColor:'blue',borderWidth:1,backgroundColor:'#ADDFF7 '}}>
          <Tin style={{marginVertical:hp(1.2),marginHorizontal:hp(1.3)}} name='clock-time-nine' size={30} color='#5669FF'/>
          </View>
          <View style={{marginLeft:hp(1.5)}}>
            <View>
              <Text style={{fontSize:hp(2),color:'black'}}>09:00</Text>
            </View>
            <View style={{marginTop:hp(2)}}>
              <Text>In Time</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row',width:wp(45)}}>
          <View style={{width:wp(14),height:hp(7),borderRadius:hp(2),borderColor:'blue',borderWidth:1,backgroundColor:'#A3DEFC '}}>
          <Tout style={{marginVertical:hp(1.2),marginHorizontal:hp(1.3)}} name='clock-time-three' size={30} color='#5669FF'/>
          </View>
          <View style={{marginLeft:hp(1.5)}}>
            <View>
              <Text style={{fontSize:hp(2),color:'black'}}>03:00</Text>
            </View>
            <View style={{marginTop:hp(2)}}>
              <Text>Out Time</Text>
            </View>
          </View>
        </View>
      </View>
     <View style={{width:wp(80),marginHorizontal:hp(4.5),marginTop:hp(2.5)}}>
     <TouchableOpacity onPress={()=>props.navigation.navigate('TagcreateScreen')}>
        <View style={{width:wp(80),height:hp(8),borderRadius:hp(2),borderWidth:1,borderColor:'white',backgroundColor:'#5669FF',flexDirection:'row'}}>
           <View style={{width:wp(40),marginVertical:hp(2),marginLeft:hp(8)}}>
            <Text style={{color:'white',fontSize:hp(2.5)}}>SCAN NOW</Text>
           </View>
           <View style={{width:wp(40),marginRight:hp(3),marginTop:hp(1)}}>
           <Tin style={{marginVertical:hp(1.2),marginHorizontal:hp(1.3)}} name='barcode-scan' size={30} color='white'/>
           </View>
        </View>
      </TouchableOpacity>
     </View>
    </>
  );
};

export default DetailScreen;
