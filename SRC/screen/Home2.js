import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Sop from 'react-native-vector-icons/Entypo';
import Gpt from 'react-native-vector-icons/FontAwesome5';
import Filter from 'react-native-vector-icons/Octicons';
import Search from 'react-native-vector-icons/Feather';
import Bell from 'react-native-vector-icons/EvilIcons';
import Drop from 'react-native-vector-icons/FontAwesome5';
import Glob from 'react-native-vector-icons/Entypo';
import Film from 'react-native-vector-icons/Feather';
import Edit from 'react-native-vector-icons/Entypo';
import Left from 'react-native-vector-icons/AntDesign';

import { Button } from 'react-native-magnus';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native';

const Home2 = props => {
    const [active, setActive] = useState(true)
    const [inactive, setInactive] = useState(false)

    const handleActive = () => {
        setActive(true)
        setInactive(false)
    }
    const handleInactive = () => {
        setActive(false)
        setInactive(true)
    }
    return (
        <>
            <StatusBar
                backgroundColor={'#4A43EC'}
                barStyle="Light-content"
                hidden={false}
            />
            <View
                style={{
                    width: wp(100),
                    height: hp(23),
                    backgroundColor: '#4A43EC',
                    borderBottomLeftRadius: hp(4),
                    borderBottomRightRadius: hp(4),
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: wp(90),
                        marginHorizontal: hp(2.5)


                    }}>
                    <View style={{ width: wp(20) }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <View style={{ flexDirection: 'row', marginTop: hp(3) }}>
                                <Left name='arrowleft' size={25} color='white' />
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
                        justifyContent: 'space-between',
                        width: wp(90),

                        marginHorizontal: hp(1.9)
                    }}>
                    <View style={{ width: wp(45), flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: hp(2),
                                    marginLeft: hp(1),
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
                                <View style={{ marginTop: hp(1) }}>
                                    <Text style={{ color: 'gray', fontSize: hp(2.5) }}>
                                        Search ....
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
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
                        <View style={{ width: wp(15) }}><Text
                            style={{
                                marginTop: hp(1.3),
                                marginHorizontal: hp(1.4),
                                color: '#fff',
                                fontSize: hp(1.8)
                            }}>
                            {' '}
                            Filter
                        </Text></View>

                    </View>

                    {/* <View
                        style={{
                            width: wp(45),
                            flexDirection: 'row',
                        }}>
                        <View style={{
                            width: wp(20),
                            flexDirection: 'row',
                            marginTop: hp(3),
                            height: hp(5),
                            borderRadius: hp(20),
                            backgroundColor: '#5D56F3',
                            marginLeft: hp(13)
                        }}>
                            <View style={{ marginLeft: hp(1.5), marginVertical: hp(1.8) }}>
                                <Filter name="filter" size={16} color="#fff" />
                            </View>
                            <View style={{ marginVertical: hp(0.5), marginLeft: hp(1) }}>
                                <Text
                                    style={{
                                        marginTop: hp(1),

                                        color: '#fff',
                                    }}>
                                    Filter

                                </Text>
                            </View>
                        </View>
                    </View> */}
                </View>

                <View style={{ flexDirection: 'row', width: wp(90), marginHorizontal: hp(2.5) }}>
                    <View style={{ width: wp(43), marginRight: hp(1.5), borderRadius: hp(5) }}>
                        <Button

                            onPress={() => handleActive()}
                            w={wp(43)}
                            mt="lg"
                            px="xl"
                            py="lg"
                            bg={active ? "#5669FF" : "#fff"}
                            borderWidth={1}
                            borderColor="gray"
                            color={active ? "#fff" : "#5669FF"}
                            rounded='circle'
                        >
                            ACTIVE
                        </Button>
                    </View>
                    <View style={{ width: wp(43), marginRight: hp(1.5) }}>
                        <Button
                            onPress={() => handleInactive()}
                            w={wp(43)}
                            mt="lg"
                            px="xl"
                            py="lg"
                            bg={inactive ? "#5669FF" : "#fff"}
                            borderWidth={1}
                            borderColor="gray"
                            color={inactive ? "#fff" : "#5669FF"}
                            rounded='circle'
                        >
                            IN ACTIVE
                        </Button>
                    </View>



                </View>
            </View>
            {active && (<ScrollView style={{ marginTop: hp(5) }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(7.9),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.6),
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
                            <Image style={{ width: wp(12), height: hp(6), borderRadius: hp(1) }} source={{ uri: 'listgpt' }} resizeMode='cover' />
                        </View>
                        <View>
                            <View>
                                <Text
                                    style={{ color: '#120D26', fontSize: hp(2.5), fontWeight: '600', marginTop: hp(1.3), fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>
                                    CHAT GPT Intoduction
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                                <View style={{ marginRight: hp(1) }}>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>
                                        TIME IN <Text style={{ color: '#5669FF' }}>00:00 |</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>TIME OUT <Text style={{ color: '#5669FF' }}>00:00 </Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: hp(2.5), marginHorizontal: hp(3.5) }}>
                            <Edit
                                name="edit"
                                color="#4A43EC"
                                size={25}

                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(7.9),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.6),
                        }}>
                        <View
                            style={{
                                width: wp(12),
                                height: hp(6),
                                backgroundColor: '#46CDFB',
                                borderRadius: hp(1.2),

                                marginVertical: hp(1),
                                marginHorizontal: hp(1.5),
                                marginRight: hp(3),
                            }}>
                            <Gpt
                                name="plane-arrival"
                                color="white"
                                size={35}
                                style={{ marginTop: hp(0.5), marginLeft: hp(0.5) }}
                            />
                        </View>
                        <View>
                            <View>
                                <Text
                                    style={{ color: '#120D26', fontSize: hp(2.5), fontWeight: '600', marginTop: hp(1.3), fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>
                                    Airport In
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                                <View style={{ marginRight: hp(1) }}>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>
                                        TIME IN <Text style={{ color: '#5669FF' }}>00:00 |</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>TIME OUT <Text style={{ color: '#5669FF' }}>00:00 </Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: hp(2.5), marginHorizontal: hp(5.3) }}>
                            <Edit
                                name="edit"
                                color="#4A43EC"
                                size={25}

                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(7.9),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.6),
                        }}>
                        <View
                            style={{
                                width: wp(12),
                                height: hp(6),
                                backgroundColor: '#F0635A',
                                borderRadius: hp(1.2),

                                marginVertical: hp(1),
                                marginHorizontal: hp(1.5),
                                marginRight: hp(3),
                            }}>
                            <Glob
                                name="globe"
                                color="white"
                                size={40}
                                style={{ marginTop: hp(0.4), marginLeft: hp(0.4) }}
                            />
                        </View>
                        <View>
                            <View>
                                <Text
                                    style={{ color: '#120D26', fontSize: hp(2.5), fontWeight: '600', marginTop: hp(1.3), fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>
                                    Movie Show
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                                <View style={{ marginRight: hp(1) }}>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>
                                        TIME IN <Text style={{ color: '#5669FF' }}>00:00 |</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>TIME OUT <Text style={{ color: '#5669FF' }}>00:00 </Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: hp(2.5), marginHorizontal: hp(5.3) }}>
                            <Edit
                                name="edit"
                                color="#4A43EC"
                                size={25}

                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(7.9),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.6),
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
                            <Image style={{ width: wp(12), height: hp(6), borderRadius: hp(1) }} source={{ uri: 'listgpt' }} resizeMode='cover' />
                        </View>
                        <View>
                            <View>
                                <Text
                                    style={{ color: '#120D26', fontSize: hp(2.5), fontWeight: '600', marginTop: hp(1.3), fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>
                                    CHAT GPT Intoduction
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                                <View style={{ marginRight: hp(1) }}>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>
                                        TIME IN <Text style={{ color: '#5669FF' }}>00:00 |</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>TIME OUT <Text style={{ color: '#5669FF' }}>00:00 </Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: hp(2.5), marginHorizontal: hp(3.5) }}>
                            <Edit
                                name="edit"
                                color="#4A43EC"
                                size={25}

                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(7.9),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.6),
                        }}>
                        <View
                            style={{
                                width: wp(12),
                                height: hp(6),
                                backgroundColor: '#46CDFB',
                                borderRadius: hp(1.2),

                                marginVertical: hp(1),
                                marginHorizontal: hp(1.5),
                                marginRight: hp(3),
                            }}>
                            <Gpt
                                name="plane-arrival"
                                color="white"
                                size={35}
                                style={{ marginTop: hp(0.5), marginLeft: hp(0.5) }}
                            />
                        </View>
                        <View>
                            <View>
                                <Text
                                    style={{ color: '#120D26', fontSize: hp(2.5), fontWeight: '600', marginTop: hp(1.3), fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>
                                    Airport In
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                                <View style={{ marginRight: hp(1) }}>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>
                                        TIME IN <Text style={{ color: '#5669FF' }}>00:00 |</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>TIME OUT <Text style={{ color: '#5669FF' }}>00:00 </Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: hp(2.5), marginHorizontal: hp(5.3) }}>
                            <Edit
                                name="edit"
                                color="#4A43EC"
                                size={25}

                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(7.9),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.6),
                        }}>
                        <View
                            style={{
                                width: wp(12),
                                height: hp(6),
                                backgroundColor: '#F0635A',
                                borderRadius: hp(1.2),

                                marginVertical: hp(1),
                                marginHorizontal: hp(1.5),
                                marginRight: hp(3),
                            }}>
                            <Glob
                                name="globe"
                                color="white"
                                size={40}
                                style={{ marginTop: hp(0.4), marginLeft: hp(0.4) }}
                            />
                        </View>
                        <View>
                            <View>
                                <Text
                                    style={{ color: '#120D26', fontSize: hp(2.5), fontWeight: '600', marginTop: hp(1.3), fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>
                                    Movie Show
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                                <View style={{ marginRight: hp(1) }}>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>
                                        TIME IN <Text style={{ color: '#5669FF' }}>00:00 |</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>TIME OUT <Text style={{ color: '#5669FF' }}>00:00 </Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: hp(2.5), marginHorizontal: hp(5.3) }}>
                            <Edit
                                name="edit"
                                color="#4A43EC"
                                size={25}

                            />
                        </View>
                    </View>
                </TouchableOpacity>



            </ScrollView>)}
            {inactive && (<ScrollView style={{ marginTop: hp(5) }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(7.9),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.6),
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
                            <Image style={{ width: wp(12), height: hp(6), borderRadius: hp(1) }} source={{ uri: 'listgpt' }} resizeMode='cover' />
                        </View>
                        <View>
                            <View>
                                <Text
                                    style={{ color: '#120D26', fontSize: hp(2.5), fontWeight: '600', marginTop: hp(1.3), fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>
                                    CHAT GPT Intoduction
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                                <View style={{ marginRight: hp(1) }}>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>
                                        TIME IN <Text style={{ color: '#5669FF' }}>00:00 |</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>TIME OUT <Text style={{ color: '#5669FF' }}>00:00 </Text></Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(7.9),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.6),
                        }}>
                        <View
                            style={{
                                width: wp(12),
                                height: hp(6),
                                backgroundColor: '#46CDFB',
                                borderRadius: hp(1.2),

                                marginVertical: hp(1),
                                marginHorizontal: hp(1.5),
                                marginRight: hp(3),
                            }}>
                            <Gpt
                                name="plane-arrival"
                                color="white"
                                size={35}
                                style={{ marginTop: hp(0.5), marginLeft: hp(0.5) }}
                            />
                        </View>
                        <View>
                            <View>
                                <Text
                                    style={{ color: '#120D26', fontSize: hp(2.5), fontWeight: '600', marginTop: hp(1.3), fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>
                                    Airport In
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                                <View style={{ marginRight: hp(1) }}>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>
                                        TIME IN <Text style={{ color: '#5669FF' }}>00:00 |</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>TIME OUT <Text style={{ color: '#5669FF' }}>00:00 </Text></Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen')}>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(7.9),
                            flexDirection: 'row',
                            marginHorizontal: hp(2.5),
                            marginBottom: hp(2),
                            backgroundColor: 'white',
                            borderRadius: hp(1.6),
                        }}>
                        <View
                            style={{
                                width: wp(12),
                                height: hp(6),
                                backgroundColor: '#F0635A',
                                borderRadius: hp(1.2),

                                marginVertical: hp(1),
                                marginHorizontal: hp(1.5),
                                marginRight: hp(3),
                            }}>
                            <Glob
                                name="globe"
                                color="white"
                                size={40}
                                style={{ marginTop: hp(0.4), marginLeft: hp(0.4) }}
                            />
                        </View>
                        <View>
                            <View>
                                <Text
                                    style={{ color: '#120D26', fontSize: hp(2.5), fontWeight: '600', marginTop: hp(1.3), fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>
                                    Movie Show
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                                <View style={{ marginRight: hp(1) }}>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>
                                        TIME IN <Text style={{ color: '#5669FF' }}>00:00 |</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#807A7A', fontSize: hp(1.5), fontWeight: '600' }}>TIME OUT <Text style={{ color: '#5669FF' }}>00:00 </Text></Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>


            </ScrollView>)}

        </>
    );
};

export default Home2;
