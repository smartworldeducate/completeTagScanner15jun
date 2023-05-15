import { View, Text, TextInput ,StyleSheet} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  

const Test = () => {
  return (
   
    <View style={{width:wp(85),flexDirection:'row', borderColor:'gray', borderWidth:1,borderRadius:hp(1)}}>
    <View>
    <Icon style={styles.searchIcon} name="mail-outline" size={20} color="#000"/>
    </View>
   <View>
   <TextInput
        style={styles.input}
        placeholder="User Nickname"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
    />
   </View>
    </View>

  )
}

export default Test

const styles=StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor:'gray',
        borderWidth:1,
       
        
        paddingTop: 10,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
       
        backgroundColor: '#fff',
        color: '#424242',
    },
})

