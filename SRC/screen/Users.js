import { View, Text, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import Check from 'react-native-vector-icons/AntDesign';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Gpt from 'react-native-vector-icons/FontAwesome5';
import Sop from 'react-native-vector-icons/Entypo';

const Users = (props) => {
    return (
        <>
            <StatusBar
                backgroundColor={'#F5F5F5'}
                barStyle="dark-content"
                hidden={false}
            />
            <View style={{ width: wp(90), marginHorizontal: hp(3) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <View style={{ flexDirection: 'row', marginTop: hp(2) }}>
                        <View style={{ marginTop: hp(0.5) }}>
                            <Check name='arrowleft' size={25} color='black' />
                        </View>
                        <View style={{ marginLeft: hp(1.5),marginTop:hp(0.3) }}>
                            <Text style={{ color: '#120D26', fontSize: hp(2.4),fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>Users</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ marginTop: hp(5) }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('UserDetail')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(8),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.2),
                        }}>
                        <View
                            style={{
                                width: wp(14),
                                height: hp(7),

                                borderRadius: hp(2),


                                marginHorizontal: hp(1),
                                marginVertical: hp(1),
                                marginRight: hp(3),
                            }}>
                            <Image
                                style={{ width: wp(12), height: hp(6),borderRadius:hp(1.2) }}
                                source={{ uri: 'qasim' }} resizeMode='contain'></Image>
                        </View>
                        <View style={{ marginVertical: hp(0) }}>
                            <View>
                                <Text
                                    style={{ color: 'black', fontSize: hp(2), marginTop: hp(1.3),fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>
                                    Muhammad Qasim Ali Khan
                                </Text>
                            </View>

                            <View style={{ marginRight: hp(1) }}>
                                <Text style={{ color: 'gray', fontSize: hp(1.5),fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>
                                Manager Software Development
                                </Text>
                            </View>


                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('UserDetail')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(8),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.2),
                        }}>
                        <View
                            style={{
                                width: wp(14),
                                height: hp(7),

                                borderRadius: hp(2),


                                marginHorizontal: hp(1),
                                marginVertical: hp(1),
                                marginRight: hp(3),
                            }}>
                            <Image
                                style={{ width: wp(12), height: hp(6) ,borderRadius:hp(1)}}
                                source={{ uri: 'wajiha' }} resizeMode='contain'></Image>
                        </View>
                        <View style={{ marginVertical: hp(0) }}>
                            <View>
                                <Text
                                    style={{ color: 'black', fontSize: hp(2), marginTop: hp(1.3),fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>
                                     Wajiha Sohail Khan
                                </Text>
                            </View>

                            <View style={{ marginRight: hp(1) }}>
                                <Text style={{ color: 'gray', fontSize: hp(1.5),fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>
                                Senior Officer Coordinator
                                </Text>
                            </View>


                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('UserDetail')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(8),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.2),
                        }}>
                        <View
                            style={{
                                width: wp(14),
                                height: hp(7),

                                borderRadius: hp(2),


                                marginHorizontal: hp(1),
                                marginVertical: hp(1),
                                marginRight: hp(3),
                            }}>
                            <Image
                                style={{ width: wp(12), height: hp(6) ,borderRadius:hp(1)}}
                                source={{ uri: 'zeshan' }} resizeMode='contain'></Image>
                        </View>
                        <View style={{ marginVertical: hp(0) }}>
                            <View>
                                <Text
                                    style={{ color: 'black', fontSize: hp(2), marginTop: hp(1.3),fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>
                                     Zeeshan Hafeez
                                </Text>
                            </View>

                            <View style={{ marginRight: hp(1) }}>
                                <Text style={{ color: 'gray', fontSize: hp(1.5),fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>
                                Senior UI/UX Designer
                                </Text>
                            </View>


                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('UserDetail')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(8),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.2),
                        }}>
                        <View
                            style={{
                                width: wp(14),
                                height: hp(7),

                                borderRadius: hp(2),


                                marginHorizontal: hp(1),
                                marginVertical: hp(1),
                                marginRight: hp(3),
                            }}>
                            <Image
                                style={{ width: wp(12), height: hp(6) ,borderRadius:hp(1)}}
                                source={{ uri: 'umar' }} resizeMode='contain'></Image>
                        </View>
                        <View style={{ marginVertical: hp(0) }}>
                            <View>
                                <Text
                                    style={{ color: 'black', fontSize: hp(2), marginTop: hp(1.3),fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>
                                     Muhammad Omer Fayyaz
                                </Text>
                            </View>

                            <View style={{ marginRight: hp(1) }}>
                                <Text style={{ color: 'gray', fontSize: hp(1.5),fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>
                                Deputy Manager System Analyst
                                </Text>
                            </View>


                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('UserDetail')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(8),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.2),
                        }}>
                        <View
                            style={{
                                width: wp(14),
                                height: hp(7),

                                borderRadius: hp(2),


                                marginHorizontal: hp(1),
                                marginVertical: hp(1),
                                marginRight: hp(3),
                            }}>
                            <Image
                                style={{ width: wp(12), height: hp(6) ,borderRadius:hp(1)}}
                                source={{ uri: 'ayaz' }} resizeMode='contain'></Image>
                        </View>
                        <View style={{ marginVertical: hp(0) }}>
                            <View>
                                <Text
                                    style={{ color: 'black', fontSize: hp(2), marginTop: hp(1.3),fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>
                                     Muhammad Ayaz
                                </Text>
                            </View>

                            <View style={{ marginRight: hp(1) }}>
                                <Text style={{ color: 'gray', fontSize: hp(1.5),fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>
                                Assistant Manager Software Development
                                </Text>
                            </View>


                        </View>

                    </View>
                </TouchableOpacity>
               



            </ScrollView>

        </>
    )
}

export default Users