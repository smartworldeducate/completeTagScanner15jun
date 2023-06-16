import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Event from 'react-native-vector-icons/MaterialCommunityIcons';
import Session from 'react-native-vector-icons/Ionicons';
import Hand from 'react-native-vector-icons/FontAwesome5';
import Notification from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import Contact from 'react-native-vector-icons/FontAwesome';
import Help from 'react-native-vector-icons/Feather';
import Out from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';


const CustomDrawer = ({navigation}) => {
  const [user,setUser]=useState('')
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userinfo')
      if(value !== null) {
        await setUser(value)
        console.log("userbasync data",value)
      }
    } catch(e) {
      // error reading value
    }
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('userinfo', null)
    } catch (e) {
      // saving error
    }
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{width:wp(80),height:hp(5),marginTop:wp(5),marginBottom:hp(10)}}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('Home')
            navigation.closeDrawer();
          }}>
            <View>
              <View style={{width:wp(50),marginLeft:hp(6),borderRadius:hp(50)}}>
              <Image style={{width:wp(16),height:hp(8),borderRadius:hp(50)}} source={{uri:'ayaz'}}/>
              </View>
              <View style={{marginLeft:hp(3.5),marginTop:hp(0.5)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(2.5),color:'#000000'}}>Ayaz Ahmed</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>
       <View style={{width:wp(50),height:hp(5),marginTop:wp(5)}}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('Home')
            navigation.closeDrawer();
          }}>
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
              <Icon name='home' size={25} color='gray'/>
              </View>
              <View style={{marginLeft:hp(2),marginTop:hp(0.3)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(2),color:'#120D26'}}>Home</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>
       <View style={{width:wp(50),height:hp(5),marginTop:wp(5)}}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('Dashbord')
            navigation.closeDrawer();
          }}>
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
                <Event name='view-dashboard-variant-outline' size={25} color="gray"/>
              </View>
              <View style={{marginLeft:hp(2),marginTop:hp(0.3)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(2),color:'#120D26'}}>Dashboard</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>
       <View style={{width:wp(50),height:hp(5),marginTop:wp(5)}}>
          <TouchableOpacity onPress={()=>navigation.navigate("TagcreateScreen")}>
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
                <Session name='create-outline' size={25} color="gray"/>
              </View>
              <View style={{marginLeft:hp(2),marginTop:hp(0.3)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(2),color:'#120D26'}}>Create Tag</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>
       <View style={{width:wp(50),height:hp(5),marginTop:wp(5)}}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('Home2')
            navigation.closeDrawer();
          }}>
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
                <Hand name='clipboard-list' size={25} color="gray"/>
              </View>
              <View style={{marginLeft:hp(2),marginTop:hp(0.3)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(2),color:'#120D26'}}>Tag List</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>
       <View style={{width:wp(50),height:hp(5),marginTop:wp(5)}}>
          <TouchableOpacity >
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
                <Notification name='bookmark' size={25} color="gray"/>
              </View>
              <View style={{marginLeft:hp(2),marginTop:hp(0.3)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(2),color:'#120D26'}}>Bookmark</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>
        
       <View style={{width:wp(50),height:hp(5),marginTop:wp(5)}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Test')}>
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
                <Contact name='envelope-o' size={25} color="gray"/>
              </View>
              <View style={{marginLeft:hp(2),marginTop:hp(0.3)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(2),color:'#120D26'}}>Contact Us</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>
       <View style={{width:wp(50),height:hp(5),marginTop:wp(5)}}>
          <TouchableOpacity >
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
                <Help name='help-circle' size={25} color="gray"/>
              </View>
              <View style={{marginLeft:hp(2),marginTop:hp(0.3)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(2),color:'#120D26'}}>Helps & FAQs</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>
       <View style={{width:wp(50),height:hp(5),marginTop:wp(5)}}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('FormTest')
            navigation.closeDrawer();
          }}>
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
              <Icon name='home' size={25} color='gray'/>
              </View>
              <View style={{marginLeft:hp(2),marginTop:hp(0.3)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(2),color:'#120D26'}}>WebForm</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>
       <View style={{width:wp(50),height:hp(5),marginTop:wp(5)}}>
          <TouchableOpacity onPress={()=>{
            storeData({})
            navigation.navigate('Login')
            navigation.closeDrawer();
          }}>
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
                <Out name='sign-out' size={25} color="gray"/>
              </View>
              <View style={{marginLeft:hp(2),marginTop:hp(0.3)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(2),color:'#120D26'}}>Sign Out</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>
      
        
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;