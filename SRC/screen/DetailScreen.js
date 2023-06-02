import {View, Text, StatusBar, ImageBackground,TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import Check from 'react-native-vector-icons/AntDesign';
  import Tin from 'react-native-vector-icons/MaterialCommunityIcons';
  import Tout from 'react-native-vector-icons/MaterialCommunityIcons';
  import DateTimePickerModal from "react-native-modal-datetime-picker";
  import Modal from "react-native-modal";
  import Okey from 'react-native-vector-icons/Entypo';
  import { getSingleTag } from '../features/tagsingle/singletagSlice';
  import { useSelector,useDispatch } from 'react-redux';
  import { Div } from "react-native-magnus";
const DetailScreen = props => {
  const dispatch=useDispatch()
  const data=props.route.params;
  console.log("detail screen",data)
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [endTimePickerVisible, setEndTimePickerVisibility] = useState(false);
  const [stime, setStime] = useState('')
  const [etime, setEtime] = useState('')
  const [starttime, setStarttime] = useState(true)
  const [endtime, setEndtime] = useState(true)
  const [tagData,setTagData]=useState([])

  // const handleTags= async()=>{
  //   console.log("function me id",tag_id)

  //   const data=await dispatch(getSingleTag(tag_id))
  //   if(data !== ""){
  //    await setTagData(data.payload)
  //    console.log("detail screen data",data.payload)
  //   }
  // }

  // useEffect(()=>{
  //   handleTags()
  // },[])
  //datetimepicker start
  const showTimePicker = () => {
    setTimePickerVisibility(true);
    setStime('')
};
const hideTimePicker = () => {
    setTimePickerVisibility(false);
};

const handleSconfirm = (time) => {
    
    const x = time.toLocaleTimeString();
    setStime(x);
    hideTimePicker();
    setStarttime(false);
}

//ent time
const showEndTimePicker = () => {
    setEndTimePickerVisibility(true);
    setEtime('')
};
const hideEndTimePicker = () => {
    setEndTimePickerVisibility(false);
};

const handleEndConfirm = (time) => {
    
    const x = time.toLocaleTimeString();
    setEtime(x);
    hideEndTimePicker();
    setEndtime(false);
}

//datetimepicker end
  return (
    <>
    <StatusBar
        backgroundColor={'trasparent'}
        barStyle="Light-content"
        
      />
      
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleSconfirm}
                onCancel={hideTimePicker}
            />
             <DateTimePickerModal
                isVisible={endTimePickerVisible}
                mode="time"
                onConfirm={handleEndConfirm}
                onCancel={hideEndTimePicker}
            />
      <View style={{width:wp(100)}}>
      <ImageBackground
        style={{width: wp(100), height: hp(30)}}
        source={{uri:data.tag_banner}}
        resizeMode="cover">
          <TouchableOpacity onPress={()=>props.navigation.goBack()}>
         <View style={{width:wp(90),marginTop:hp(3),marginLeft:hp(2)}}>
           <Check name='arrowleft' size={30} color='white'/>
         </View>
         </TouchableOpacity>
      </ImageBackground>
      </View>

      <View style={{width:wp(90),marginLeft:hp(3)}}>
        <Text style={{fontSize:hp(4),color:'black',fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal'}}>{data.tag_desc}</Text>
      </View>
      <View style={{width:wp(90),marginHorizontal:hp(3.5),marginTop:hp(5)}}>
        <Text style={{fontSize:hp(2),fontWeight:'bold',color:'black'}}>About</Text>
      </View>
      <View style={{width:wp(90),marginHorizontal:hp(3.5),marginTop:hp(2)}}>
        <Text style={{lineHeight:28,fontSize:hp(2),color:'#AEB6BF '}}>
          {data.tag_text}
        </Text>
      </View>
      <View style={{flexDirection:'row',width:wp(90),marginTop:hp(5)}}>
       
        {starttime && (<TouchableOpacity style={{flexDirection:'row',width:wp(45),marginLeft:hp(7)}}>
          <View style={{width:wp(14),height:hp(7),borderRadius:hp(2),backgroundColor:'#D6EAF8'}}>
          <Tin style={{marginVertical:hp(1.2),marginHorizontal:hp(1.3)}} name='clock-time-nine' size={30} color='#5669FF'/>
          </View>
          <View style={{marginLeft:hp(1.5),marginTop:hp(0.5)}}>
            <View>
              <Text style={{fontSize:hp(2),color:'black'}}>09:00</Text>
            </View>
            <View style={{marginTop:hp(0.5)}}>
              <Text>In Time</Text>
            </View>
          </View>
        </TouchableOpacity>)}
        
       
        {endtime && (<TouchableOpacity style={{flexDirection:'row',width:wp(45)}}>
          <View style={{width:wp(14),height:hp(7),borderRadius:hp(2),backgroundColor:'#D6EAF8'}}>
          <Tout style={{marginVertical:hp(1.2),marginHorizontal:hp(1.3)}} name='clock-time-three' size={30} color='#5669FF'/>
          </View>
          <View style={{marginLeft:hp(1.5),marginTop:hp(0.5)}}>
            <View>
              <Text style={{fontSize:hp(2),color:'black'}}>03:00</Text>
            </View>
            <View style={{marginTop:hp(0.5)}}>
              <Text>Out Time</Text>
            </View>
          </View>
        </TouchableOpacity>)}
      </View>
     

     <View style={{marginTop:hp(3),backgroundColor:"#5669FF",width:wp(100),height:hp(7),position: 'absolute', left: 0, right: 0, bottom: 0}}>
     <TouchableOpacity onPress={()=>props.navigation.navigate('Scanner')}>
        <View style={{width:wp(80),height:hp(8),backgroundColor:'#5669FF',flexDirection:'row',marginHorizontal:hp(4)}}>
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
