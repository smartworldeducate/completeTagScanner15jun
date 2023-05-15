import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {Input, Checkbox} from 'galio-framework';
// import Icon from 'react-native-vector-icons/AntDesign';
import Left from 'react-native-vector-icons/AntDesign';
import Moment from 'moment';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const TagList = props => {
  const tagList = [
    {id: 1, lable: 'CHAT GPT Introduction'},
    {id: 2, lable: 'MyStore Attendence'},
    {id: 3, lable: 'Movie Show'},
    {id: 4, lable: 'WWW Seminar'},
    {id: 5, lable: 'Airport In'},
  ];
  return (
    <>
      <StatusBar backgroundColor={'#041677'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: wp(100),
          height: hp(8),
          backgroundColor: '#041677',
        }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View style={{flexDirection: 'row', marginTop: hp(2)}}>
            <Left
              style={{marginTop: hp(1), marginLeft: hp(1)}}
              name="arrowleft"
              size={25}
              color="#fff"
            />
            <Text
              style={{
                fontSize: hp(3),
                marginLeft: hp(2),
                marginTop: hp(1),
                color: '#fff',
                fontFamily: 'Roboto-Medium',
              }}>
              TagList
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{width: wp(100), backgroundColor: '#041677'}}>
        <View style={{width: wp(50), marginTop: hp(0)}}>
          <View style={{width: wp(50), marginHorizontal: hp(18)}}>
            <Icon name="bookmarks" size={100} color="#fff" />
          </View>
          <View
            style={{width: wp(50), marginHorizontal: hp(13), marginTop: hp(3)}}>
            <Text style={{fontSize: hp(4), color: '#fff'}}>Tag Scanner</Text>
          </View>
        </View>
      </View>
      <View
        style={{width: wp(100), height: hp(100), backgroundColor: '#041677'}}>
        <View style={{marginTop: hp(5)}}>
          <View
            style={{width: wp(90), marginLeft: hp(15), marginBottom: hp(5)}}>
            <Text style={{fontSize: hp(5), color: 'white'}}>Tag List</Text>
          </View>
          <View style={{width: wp(90), marginHorizontal: hp(3)}}>
            {tagList.map((item, i) => {
              return (
                <View key={i} style={{marginBottom: hp(2), marginLeft: hp(3)}}>
                  <Checkbox
                    onChange={() => props.navigation.navigate('TagScanner')}
                    iconColor="success"
                    checkboxStyle={{
                      marginHorizontal: hp(2),
                      marginLeft: hp(3),
                      height: hp(3),
                      width: wp(6),
                    }}
                    labelStyle={{fontSize: hp(2.5), color: '#fff'}}
                    color="white"
                    flexDirection="row"
                    label={item.lable}
                  />
                </View>
              );
            })}
          </View>
          <View
            style={{
              width: wp(80),
              height: 1,
              marginTop: hp(5),
              marginLeft: hp(5),
              backgroundColor: '#fff',
            }}></View>
          <View style={{width: wp(90), marginLeft: hp(12), marginTop: hp(3)}}>
            <Text style={{fontSize: hp(2), color: 'white'}}>
              Date : {Moment().format('MMM Do YY')} / {Moment().format('LTS')}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default TagList;
