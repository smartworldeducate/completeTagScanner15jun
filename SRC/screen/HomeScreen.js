import { View, Text, StatusBar, TouchableOpacity, ActivityIndicator, Image, RefreshControl } from 'react-native';
import Menu from 'react-native-vector-icons/AntDesign';
import React, { useCallback, useEffect, useState } from 'react';
// import Sop from 'react-native-vector-icons/Entypo';
import Gpt from 'react-native-vector-icons/FontAwesome5';
import Saminar from 'react-native-vector-icons/MaterialIcons';
import Camra from 'react-native-vector-icons/MaterialCommunityIcons';
import Ball from 'react-native-vector-icons/MaterialIcons';
import Filter from 'react-native-vector-icons/Octicons';
import Search from 'react-native-vector-icons/Feather';
import Bell from 'react-native-vector-icons/EvilIcons';
import Drop from 'react-native-vector-icons/FontAwesome5';
// import Glob from 'react-native-vector-icons/Entypo';
// import Film from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTags } from '../features/tags/tagSlice';
import { getAllCats } from '../features/category/allCatSlice';
import { filterCats } from '../features/category/singleCatSlice';
// import Okey from 'react-native-vector-icons/Entypo';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from "react-native-modal";

import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = props => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [success, setSuccess] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const [animodal, setAnimodal] = useState(false);
  const [animation, setAnimation] = useState(true)
  const [tagData, setTagData] = useState([])
  const [catgory, setCategory] = useState([])

  const handleTags = async () => {
    setAnimodal(true)
    const tagData = await dispatch(getAllTags())
    if (tagData !== "") {
      await setTagData(tagData.payload)
    }
    setInterval(() => {
      setAnimodal(false)
    }, 1000);
  }

  const getAllCatHandle = async () => {
    const catData = await dispatch(getAllCats())
    if (catData !== "") {
      await setCategory(catData.payload)
      //  console.log("tagdata here",data.payload)
    }
  }

  const handleFilter = async (category_id) => {
    setAnimodal(true)
    console.log("fsdgfdghfgjgfj", category_id)
    const flData = await dispatch(filterCats(category_id))
    if (flData !== "") {
      setTagData(flData.payload)
      console.log("filter  here", flData.payload)
    }
    setInterval(() => {
      setAnimodal(false)
    }, 1000);

  }
  // console.log("tagdata here",tagData)

  useFocusEffect(
    useCallback(() => {
      handleTags()
    }, [])
  )
  useEffect(() => {
    handleTags()
    getAllCatHandle()
  }, [])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    handleTags()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={'#4A43EC'}
        barStyle="Light-content"
      />
      {animation && (<View >
        <Modal isVisible={animodal}>
          <View style={{ width: wp(90), height: hp(20), backgroundColor: '#EAFAF1', borderRadius: hp(1), justifyContent: 'center', alignItems: 'center' }}>

            <View style={{}}>
              <ActivityIndicator animating={animation} size={'large'} />

            </View>
            <View style={{}}>
              <Text>please wait</Text>
            </View>

          </View>
        </Modal>
      </View>)}
      <View
        style={{
          width: wp(100),
          height: hp(23),
          backgroundColor: '#4A43EC',
          borderBottomLeftRadius: hp(5),
          borderBottomRightRadius: hp(5),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp(90),
            marginHorizontal: hp(2.5)

          }}>
          <View style={{ width: wp(20) }}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <View style={{ flexDirection: 'row', marginTop: hp(2.5) }}>
                <Menu
                  style={{ marginTop: hp(1) }}
                  name="menu-fold"
                  size={25}
                  color="#fff"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ width: wp(30), marginTop: hp(3) }}>
            <View style={{ width: wp(30) }}>
              <Text style={{ color: 'gray' }}>
                current Location{' '}
                <Drop name="caret-down" size={15} color="#fff" />
              </Text>
            </View>
            <View>
              <Text style={{ color: '#fff' }}>Lahore Pakistan</Text>
            </View>
          </View>
          <View
            style={{
              width: wp(12),
              marginTop: hp(3),
              height: hp(6),
              marginLeft: hp(3),
              borderRadius: hp(50),
              backgroundColor: '#5D56F3',
            }}>
            <Bell
              style={{ marginTop: hp(1.2), marginHorizontal: hp(1.2) }}
              name="bell"
              size={30}
              color="#fff"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',

            width: wp(90),

            marginHorizontal: hp(2.5)
          }}>
          <View style={{ width: wp(20), flexDirection: 'row' }}>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: hp(2),

                }}>
                <Search
                  style={{ marginTop: hp(1) }}
                  name="search"
                  size={25}
                  color="#fff"
                />
                <View
                  style={{
                    width: wp(0.5),
                    height: hp(3),
                    backgroundColor: 'gray',
                    marginLeft: hp(1.5),
                    marginTop: hp(1),
                  }}></View>
                <View style={{ marginTop: hp(1), marginLeft: hp(1) }}>
                  <Text style={{ color: 'gray', fontSize: hp(2.5) }}>
                    Search ....
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ width: wp(30), marginTop: hp(3) }}></View>
          <View
            style={{
              width: wp(25),
              flexDirection: 'row',
              marginTop: hp(3),
              height: hp(5),
              marginLeft: hp(7.6),
              borderRadius: hp(20),
              backgroundColor: '#5D56F3',
            }}>
            <View style={{ width: wp(6), height: hp(3), borderRadius: hp(50), backgroundColor: '#3D56F0', marginVertical: hp(1), marginLeft: hp(1.5) }}>
              <Filter style={{ marginVertical: hp(0.5), marginHorizontal: hp(0.5) }} name="filter" size={15} color="#fff" />
            </View>
            <TouchableOpacity onPress={handleTags} style={{ width: wp(15) }}><Text
              style={{
                marginTop: hp(1.3),
                marginHorizontal: hp(1.4),
                color: '#fff',
                fontSize: hp(1.8)
              }}>
              {' '}
              Filter
            </Text></TouchableOpacity>

          </View>
        </View>

      </View>
      <ScrollView horizontal={true} style={{ width: wp(100), height: hp(8), paddingLeft: hp(2.5), marginTop: hp(-4) }} showsHorizontalScrollIndicator={false} refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#2A72B6', '#203B88']}
          progressBackgroundColor={{ color: 'blue' }}
          tintColor={{ color: 'blue' }}
        />
      }>
        {catgory?.map((e, i) => {
          const icon = ["grid-view", "pause-presentation", "card-giftcard", "flight-land"]
          const bgcolor = ['#46CDFB', '#F0635A', '#F19561', '#29D697', '#46CDFB', '#F19561', '#F19561']
          if (i == 4) {
            i = 0
          }
          const { category_id, category_name } = e
          return (<View style={{ marginRight: hp(1) }} key={category_id}>
            <TouchableOpacity onPress={() => handleFilter(category_id)}>
              <View style={{ height: hp(5), paddingHorizontal: hp(1.5), borderRadius: hp(5), backgroundColor: bgcolor[i], flexDirection: 'row' }}>
                <View style={{ marginLeft: hp(1), marginVertical: hp(1.2) }}>
                  <Ball name={icon[i]} mr="sm" color="white" size={20} />
                </View>
                <View style={{ marginVertical: hp(1), marginLeft: hp(0.2) }}>
                  <Text style={{ color: 'white', fontSize: hp(2) }}>{category_name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>)
        })}
      </ScrollView>

      {tagData.length >= 6 ? (<ScrollView style={{ marginTop: hp(3) }}>

        {tagData?.map((e, i) => {
          // console.log(e.tag_logo)
          const { tag_id, tag_desc, tag_logo, setup_name, scan_time, setup_id } = e
          return (<TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen', e)} key={i}>
            <View
              style={{
                width: wp(90),
                height: hp(7.9),
                flexDirection: 'row',
                marginHorizontal: hp(2.5),
                marginBottom: hp(2),
                backgroundColor: 'white',
                borderRadius: hp(1.3),
              }}>
              <View
                style={{
                  width: wp(12),
                  height: hp(6),
                  backgroundColor: '#58D68D ',
                  borderRadius: hp(2),
                  marginVertical: hp(1),
                  marginHorizontal: hp(1.5),
                  marginRight: hp(3),
                }}>
                <Image style={{ width: wp(12), height: hp(6), borderRadius: hp(1) }} source={{ uri: tag_logo }} resizeMode='cover' />

              </View>
              <View>
                <View>
                  <Text
                    style={{ color: '#120D26', fontSize: hp(2.5), fontWeight: '600', marginTop: hp(1.3), fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>
                    {tag_desc}
                  </Text>
                </View>
                {scan_time == null && (<View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                  <View style={{ marginRight: hp(1) }}>
                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>
                      Attendence-Only
                    </Text>
                  </View>

                </View>)}
                {scan_time && (<View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                  <View style={{ marginRight: hp(1) }}>
                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>
                      TIME {setup_id == 1 ? 'IN' : 'OUT'} <Text style={{ color: '#5669FF' }}>{scan_time}</Text>
                    </Text>
                  </View>

                </View>)}
              </View>
              <View style={{ marginVertical: hp(2.5), marginHorizontal: hp(3) }}>

                <Image style={{ width: wp(6), height: hp(3) }} source={{ uri: setup_id == 1 ? 'yelo' : 'listicon' }} resizeMode='cover' />
              </View>
            </View>
          </TouchableOpacity>)
        })}


      </ScrollView>) : (<View style={{ marginTop: hp(3) }}>

        {tagData?.map((e, i) => {
          // console.log(e.tag_logo)
          const { tag_id, tag_desc, tag_logo, setup_name, scan_time, setup_id } = e
          return (<TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen', e)} key={i}>
            <View
              style={{
                width: wp(90),
                height: hp(7.9),
                flexDirection: 'row',
                marginHorizontal: hp(2.5),
                marginBottom: hp(2),
                backgroundColor: 'white',
                borderRadius: hp(1.3),
              }}>
              <View
                style={{
                  width: wp(12),
                  height: hp(6),
                  backgroundColor: '#58D68D ',
                  borderRadius: hp(2),
                  marginVertical: hp(1),
                  marginHorizontal: hp(1.5),
                  marginRight: hp(3),
                }}>
                <Image style={{ width: wp(12), height: hp(6), borderRadius: hp(1) }} source={{ uri: tag_logo }} resizeMode='cover' />

              </View>
              <View>
                <View>
                  <Text
                    style={{ color: '#120D26', fontSize: hp(2.5), fontWeight: '600', marginTop: hp(1.3), fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>
                    {tag_desc}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                  <View style={{ marginRight: hp(1) }}>
                    {scan_time == null && (<Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>
                       <Text style={{ color: '#5669FF' }}>Attendence+-Only</Text>
                    </Text>)}
                   {scan_time !== null && ( <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>
                      TIME {setup_id == 1 ? 'IN' :'OUT'} <Text style={{ color: '#5669FF' }}>{scan_time}</Text>
                    </Text>)}
                  </View>

                </View>
              </View>
              <View style={{ marginVertical: hp(2.5), marginHorizontal: hp(3) }}>

                <Image style={{ width: wp(6), height: hp(3) }} source={{ uri: setup_name == 'in' ? 'yelo' : 'listicon' }} resizeMode='cover' />
              </View>
            </View>
          </TouchableOpacity>)
        })}


      </View>)}

    </>
  );
};

export default HomeScreen;