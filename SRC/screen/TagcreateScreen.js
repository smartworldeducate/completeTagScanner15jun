import { View, Text, StatusBar, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Check from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from 'react-native-dropdown-picker';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import Tin from 'react-native-vector-icons/MaterialCommunityIcons';
import Tout from 'react-native-vector-icons/MaterialCommunityIcons';
import Date from 'react-native-vector-icons/Fontisto';
import Folder from 'react-native-vector-icons/MaterialCommunityIcons';
import Rite from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from "react-native-modal";
import { Button } from 'react-native-magnus';
const TagcreateScreen = (props) => {
    //datetimepicker start
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Admin', value: 'Y' },
        { label: 'User', value: 'N' }
    ]);
    const [endTimePickerVisible, setEndTimePickerVisibility] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [stime, setStime] = useState('')
    const [etime, setEtime] = useState('')
    const [dateView, setDateView] = useState(true)
    const [date, setDate] = useState('')
    const [starttime, setStarttime] = useState(true)
    const [endtime, setEndtime] = useState(true)

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


    //date
    const showDatePicker = () => {
        setDatePickerVisibility(true);
        setDate('')
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        console.log(date)
        const dt = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
        setDate(dt)
        hideDatePicker();
        setDateView(false)
    };

    //datetimepicker end
    const [logo, setLogo] = useState(true)
    const [banner, setBanner] = useState(true)
    const [countryData, setCountryData] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [country, setCountry] = useState([
        { label: 'Admin', value: '1' },
        { label: 'User', value: '2' },
    ]);
    const [tag, setTag] = useState(true)
    const [detail, setDetail] = useState(false)

    const handleTag = () => {
        setTag(true)
        setDetail(false)
    }
    const handleDetail = () => {
        setTag(false)
        setDetail(true)
    }
    const [image, setImage] = useState('');
    const [imageb, setImageb] = useState('');
    const [imgBase64, setImgBase64] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisibleb, setModalVisibleb] = useState(false);


    const takePhotoFromCamera = () => {
        setImage('');
        ImagePicker.openCamera({
            mediaType: 'photo',
            includeBase64: true,
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
            setLogo(false)
            setModalVisible(false)
        });
    }
    const takePhotoFromCamerab = () => {
        setImageb('');
        ImagePicker.openCamera({
            mediaType: 'photo',
            includeBase64: true,
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImageb(image.path);
            setBanner(false)
            setModalVisibleb(false)
        });
    }
    const choosePhotoFromLibrary = () => {
        setImage('');
        ImagePicker.openPicker({
            mediaType: 'photo',
            includeBase64: true,
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            setImgBase64(image.data)
            setImage(image.path);
            setLogo(false)
            setModalVisible(false);
        });
    }

    const choosePhotoFromLibraryb = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
            includeBase64: true,
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(imageb => {
            setImgBase64(imageb.data)
            setImageb(imageb.path);
            setBanner(false)
            setModalVisibleb(false);
        });
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const toggleModalb = () => {
        setModalVisibleb(!isModalVisibleb);
    };

    const handleReset = () => {
        setImage('');
        setLogo(true)
    }
    const handleResetb = () => {
        setImageb('');
        setBanner(true)
    }


    return (
        <>
            <StatusBar
                backgroundColor={'#ECF0F1'}
                barStyle="dark-content"
                hidden={false}
            />
            {isModalVisible && (<View style={{ flex: 1 }}>
                <Modal isVisible={isModalVisible}>
                    <View style={{ width: wp(90), height: hp(25), backgroundColor: '#fff', borderRadius: hp(1) }}>


                        <View style={{ width: wp(80), height: 1, borderRadius: 50, backgroundColor: '#5669FF', marginHorizontal: hp(2.5), marginVertical: hp(1) }}></View>
                        <TouchableOpacity onPress={takePhotoFromCamera} style={{ width: wp(90), marginVertical: hp(1.5), alignItems: 'center' }}>
                            <Text style={{ fontSize: hp(2), color: '#5669FF' }}>choose from camara</Text>
                        </TouchableOpacity>
                        <View style={{ width: wp(80), height: 1, borderRadius: 50, backgroundColor: '#5669FF', marginHorizontal: hp(2.5), marginVertical: hp(1) }}></View>

                        <TouchableOpacity onPress={choosePhotoFromLibrary} style={{ width: wp(90), marginVertical: hp(1.5), alignItems: 'center' }}>
                            <Text style={{ fontSize: hp(2), color: '#5669FF' }}>choose from gallary</Text>
                        </TouchableOpacity>

                        <View style={{ width: wp(80), height: 1, borderRadius: 50, backgroundColor: '#5669FF', marginHorizontal: hp(2.5), marginVertical: hp(1) }}></View>




                        <TouchableOpacity onPress={toggleModal} style={{ width: wp(90), marginVertical: hp(1.5), alignItems: 'center' }}>
                            <Text style={{ fontSize: hp(2), color: '#5669FF' }}>cancel</Text>
                        </TouchableOpacity>


                    </View>
                </Modal>
            </View>)}
            {isModalVisibleb && (<View style={{ flex: 1 }}>
                <Modal isVisible={isModalVisibleb}>
                    <View style={{ width: wp(90), height: hp(25), backgroundColor: '#fff', borderRadius: hp(1) }}>


                        <View style={{ width: wp(80), height: 1, borderRadius: 50, backgroundColor: '#5669FF', marginHorizontal: hp(2.5), marginVertical: hp(1) }}></View>
                        <TouchableOpacity onPress={takePhotoFromCamerab} style={{ width: wp(90), marginVertical: hp(1.5), alignItems: 'center' }}>
                            <Text style={{ fontSize: hp(2), color: '#5669FF' }}>choose from camara</Text>
                        </TouchableOpacity>
                        <View style={{ width: wp(80), height: 1, borderRadius: 50, backgroundColor: '#5669FF', marginHorizontal: hp(2.5), marginVertical: hp(1) }}></View>

                        <TouchableOpacity onPress={choosePhotoFromLibraryb} style={{ width: wp(90), marginVertical: hp(1.5), alignItems: 'center' }}>
                            <Text style={{ fontSize: hp(2), color: '#5669FF' }}>choose from gallary</Text>
                        </TouchableOpacity>

                        <View style={{ width: wp(80), height: 1, borderRadius: 50, backgroundColor: '#5669FF', marginHorizontal: hp(2.5), marginVertical: hp(1) }}></View>




                        <TouchableOpacity onPress={toggleModalb} style={{ width: wp(90), marginVertical: hp(1.5), alignItems: 'center' }}>
                            <Text style={{ fontSize: hp(2), color: '#5669FF' }}>cancel</Text>
                        </TouchableOpacity>


                    </View>
                </Modal>
            </View>)}
            <View style={{ width: wp(90), marginHorizontal: hp(3) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <View style={{ flexDirection: 'row', marginTop: hp(5) }}>
                        <View style={{ marginTop: hp(0.5) }}>
                            <Check name='arrowleft' size={25} color='black' />
                        </View>
                        <View style={{ marginLeft: hp(1.5), mt: hp(0.3) }}>
                            <Text style={{ color: '#120D26', fontSize: hp(2.4), fontWeight: '600', fontFamily: 'NunitoSans_7pt-Regular', fontStyle: 'normal' }}>Create Tags</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
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
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
            />
            <ScrollView>
                <View style={{ width: wp(90), flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: hp(2.4), marginTop: hp(4) }}>
                    <View style={{ width: wp(43), marginRight: hp(1.5) }}>
                        <Button
                            onPress={() => handleTag()}
                            w={wp(43)}
                            mt="lg"
                            px="xl"
                            py="lg"
                            bg={tag ? "#5669FF" : "#fff"}
                            borderWidth={1}
                            borderColor="#E4DFDF"
                            color="gray400"
                        >
                            TAG
                        </Button>
                    </View>
                    <View style={{ width: wp(43) }}>
                        <Button
                            onPress={() => handleDetail()}
                            w={wp(43)}
                            mt="lg"
                            px="xl"
                            py="lg"
                            bg={detail ? "#5669FF" : "#fff"}
                            borderWidth={1}
                            borderColor="#E4DFDF"
                            color="gray400"
                        >
                            DETAILS
                        </Button>
                    </View>
                </View>
                {tag && (<View>

                    <View style={{ width: wp(90), marginHorizontal: hp(2.5), marginBottom: hp(1), marginTop: hp(3), zIndex: 1 }}>
                        <DropDownPicker
                            placeholder='Admin/User'
                            placeholderStyle={{ color: 'gray' }}
                            style={{
                                borderColor: '#E4DFDF',
                                borderWidth: 1,
                                borderRadius: hp(1.2),
                                height: hp(7.5),
                            }}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                    </View>

                    <View>
                        <View
                            style={{
                                width: wp(90),
                                marginHorizontal: hp(2.5),
                                marginBottom: hp(2),

                            }}>
                            <View
                                style={{
                                    width: wp(90),
                                    height: hp(7.5),
                                    flexDirection: 'row',
                                    borderColor: '#E4DFDF',
                                    borderWidth: 1,
                                    borderRadius: hp(1.2),
                                    backgroundColor: '#FFFFFF'
                                }}>
                                <View>
                                    <Icon
                                        style={styles.searchIcon}
                                        name="tag"
                                        size={20}
                                        color="#E4DFDF"
                                    />
                                </View>
                                <View>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Tag name"

                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    {date && (<TouchableOpacity onPress={showDatePicker}>
                        <View
                            style={{
                                width: wp(90),
                                marginHorizontal: hp(2.5),
                                marginBottom: hp(2),
                            }}>
                            <View
                                style={{
                                    width: wp(90),
                                    height: hp(7.5),
                                    flexDirection: 'row',
                                    borderColor: '#E4DFDF',
                                    borderWidth: 1,
                                    borderRadius: hp(1.2),
                                    backgroundColor: '#FFFFFF'
                                }}>
                                <View>
                                    <Date
                                        style={styles.searchIcon}
                                        name='date'
                                        size={20}
                                        color="#E4DFDF"
                                    />
                                </View>
                                <View>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'Select Date'}
                                        value={date}
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>)}
                    {dateView && (<TouchableOpacity onPress={showDatePicker}>
                        <View
                            style={{
                                width: wp(90),
                                marginHorizontal: hp(2.5),
                                marginBottom: hp(2),
                            }}>
                            <View
                                style={{
                                    width: wp(90),
                                    height: hp(7.5),
                                    flexDirection: 'row',
                                    borderColor: '#E4DFDF',
                                    borderWidth: 1,
                                    borderRadius: hp(1.2),
                                    backgroundColor: '#FFFFFF'
                                }}>
                                <View>
                                    <Date
                                        style={styles.searchIcon}
                                        name="date"
                                        size={20}
                                        color="#E4DFDF"
                                    />
                                </View>
                                <View>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Date"

                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>)}
                    <View style={{ width: wp(90), flexDirection: 'row', marginHorizontal: hp(2.5), marginBottom: hp(2) }}>
                        {stime && (<TouchableOpacity onPress={showTimePicker} style={{ width: wp(43), height: hp(7.5), flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: hp(1.2), borderColor: '#E4DFDF', borderWidth: 1, marginRight: hp(2) }}>
                            <View style={{ marginVertical: hp(0.5) }}>
                                <Tin style={{ marginVertical: hp(1.2), marginHorizontal: hp(1.3) }} name='clock-time-nine' size={30} color='#E4DFDF' />


                            </View>
                            <View style={{ marginVertical: hp(2.5) }}>
                                <Text>{stime}</Text>
                            </View>

                        </TouchableOpacity>)}
                        {starttime && (<TouchableOpacity onPress={showTimePicker} style={{ width: wp(43), height: hp(7.5), flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: hp(1.2), borderColor: '#E4DFDF', borderWidth: 1, marginRight: hp(2) }}>
                            <View style={{ marginVertical: hp(0.5) }}>
                                <Tin style={{ marginVertical: hp(1.2), marginHorizontal: hp(1.3) }} name='clock-time-nine' size={30} color='#E4DFDF' />


                            </View>
                            <View style={{ marginVertical: hp(2.5) }}>
                                <Text>Start Time</Text>
                            </View>

                        </TouchableOpacity>)}
                        {etime && (<TouchableOpacity onPress={showEndTimePicker} style={{ width: wp(43), height: hp(7.5), flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: hp(1.2), borderColor: '#E4DFDF', borderWidth: 1 }}>
                            <View style={{ marginVertical: hp(0.5) }}>
                                <Tout style={{ marginVertical: hp(1.2), marginHorizontal: hp(1.3) }} name='clock-time-three' size={30} color='#E4DFDF' />


                            </View>
                            <View style={{ marginVertical: hp(2.5) }}>
                                <Text>{etime}</Text>
                            </View>

                        </TouchableOpacity>)}
                        {endtime && (<TouchableOpacity onPress={showEndTimePicker} style={{ width: wp(43), height: hp(7.5), flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: hp(1.2), borderColor: '#E4DFDF', borderWidth: 1 }}>
                            <View style={{ marginVertical: hp(0.5) }}>
                                <Tout style={{ marginVertical: hp(1.2), marginHorizontal: hp(1.3) }} name='clock-time-three' size={30} color='#E4DFDF' />


                            </View>
                            <View style={{ marginVertical: hp(2.5) }}>
                                <Text>End Time</Text>
                            </View>

                        </TouchableOpacity>)}
                    </View>
                    {image && (<View style={{
                        position: 'relative',
                        width: wp(90), height: hp(15), borderRadius: hp(1.2), borderColor: '#E4DFDF', borderWidth: 1, marginHorizontal: hp(2.5), backgroundColor: 'white', marginBottom: hp(2)
                    }}>

                        <View style={{ width: wp(5), height: hp(2.5), backgroundColor: 'red', borderRadius: hp(50), zIndex: 1, position: 'absolute', left: hp(43), bottom: hp(13.5) }}>
                            <TouchableOpacity onPress={handleReset}>
                                <Text style={{ color: '#fff', marginHorizontal: hp(0.7) }}>X</Text></TouchableOpacity>
                        </View>

                        <View style={{ width: wp(90), height: hp(15) }}>
                            <Image style={{ width: wp(90), height: hp(15), borderRadius: hp(1.5) }} source={{ uri: image }} resizeMode='stretch' />
                        </View>
                    </View>)}
                    {logo && (
                        <TouchableOpacity onPress={toggleModal}>
                            <View style={{ width: wp(90), height: hp(15), borderRadius: hp(1.2), marginBottom: hp(2), borderColor: '#E4DFDF', borderWidth: 1, marginHorizontal: hp(2.5), backgroundColor: 'white' }}>
                                <View style={{ width: wp(50), marginHorizontal: hp(12), marginTop: hp(1) }}>
                                    <View style={{ marginLeft: hp(5) }}>
                                        <Folder style={{ marginVertical: hp(1.2), marginHorizontal: hp(1.3) }} name='folder-upload-outline' size={50} color='#E4DFDF' />
                                    </View>
                                    <View style={{ marginLeft: hp(5) }}>
                                        <Text>Browse Logo</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}

                    {imageb && (<View style={{ position: 'relative', width: wp(90), height: hp(15), borderRadius: hp(2), borderColor: '#E4DFDF', borderWidth: 1, marginHorizontal: hp(2.5), backgroundColor: 'white', marginBottom: hp(2) }}>
                        <View style={{ width: wp(5), height: hp(2.5), backgroundColor: 'red', borderRadius: hp(50), zIndex: 1, position: 'absolute', left: hp(43), bottom: hp(13.5) }}>
                            <TouchableOpacity onPress={handleResetb}>
                                <Text style={{ color: '#fff', marginHorizontal: hp(0.7) }}>X</Text></TouchableOpacity>
                        </View>
                        <View style={{ width: wp(90), height: hp(15) }}>
                            <Image style={{ width: wp(90), height: hp(15), borderRadius: hp(2) }} source={{ uri: imageb }} resizeMode='stretch' />
                        </View>
                    </View>)}
                    {banner && (<TouchableOpacity onPress={toggleModalb}>
                        <View style={{ width: wp(90), height: hp(15), borderRadius: hp(2), borderColor: '#E4DFDF', borderWidth: 1, marginHorizontal: hp(2.5), backgroundColor: 'white' }}>
                            <View style={{ width: wp(50), marginHorizontal: hp(12), marginTop: hp(1) }}>
                                <View style={{ marginLeft: hp(5) }}>
                                    <Folder style={{ marginVertical: hp(1.2), marginHorizontal: hp(1.3) }} name='folder-upload-outline' size={50} color='#E4DFDF' />
                                </View>
                                <View style={{ marginLeft: hp(5) }}>
                                    <Text>Browse Banner</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>)}

                    <View style={{ width: wp(90), marginHorizontal: hp(6), marginTop: hp(2.5), marginBottom: hp(3) }}>
                        <TouchableOpacity >
                            <View style={{ width: wp(75), height: hp(7.5), borderRadius: hp(1.5), borderWidth: 1, borderColor: 'white', backgroundColor: '#5669FF', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={{ width: wp(15) }}></View>
                                <View style={{ width: wp(20), marginVertical: hp(2) }}>
                                    <Text style={{ color: 'white', fontSize: hp(2) }}>SUBMIT</Text>
                                </View>
                                <View style={{ width: wp(8), height: hp(4), marginTop: hp(1.8), backgroundColor: '#3D56F0', borderRadius: hp(50) }}>
                                    <Rite style={{ marginVertical: hp(0.7), marginHorizontal: hp(0.7) }} name='arrowright' size={20} color='white' />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>)}
                {detail && (
                    <>
                        <View style={{ width: wp(90), marginHorizontal: hp(2.5), height: hp(60), borderRadius: hp(1.2), borderColor: '#E4DFDF', borderWidth: 1, marginTop: hp(2), backgroundColor: 'white' }}>
                            <View style={{ marginLeft: hp(3), marginTop: hp(3) }}>
                                <Text>Type Here</Text>
                            </View>
                        </View>

                        <View style={{ width: wp(90), marginHorizontal: hp(6), marginTop: hp(2.5), marginBottom: hp(3) }}>
                            <TouchableOpacity >
                                <View style={{ width: wp(75), height: hp(7.5), borderRadius: hp(1.5), borderWidth: 1, borderColor: 'white', backgroundColor: '#5669FF', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <View style={{ width: wp(15) }}></View>
                                    <View style={{ width: wp(20), marginVertical: hp(2) }}>
                                        <Text style={{ color: 'white', fontSize: hp(2) }}>SUBMIT</Text>
                                    </View>
                                    <View style={{ width: wp(8), height: hp(4), marginTop: hp(1.8), backgroundColor: '#3D56F0', borderRadius: hp(50) }}>
                                        <Rite style={{ marginVertical: hp(0.7), marginHorizontal: hp(0.7) }} name='arrowright' size={20} color='white' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </>

                )}

            </ScrollView>
        </>
    )
}

export default TagcreateScreen



const styles = StyleSheet.create({
    dropdown: {
        height: hp(7.5),
        borderColor: '#E4DFDF',
        borderWidth: 1,
        borderRadius: hp(1.2),
        paddingVertical: hp(3),
        marginBottom: 10,
        backgroundColor: '#fff',
        paddingLeft: hp(2),
    },
    label: {
        position: 'absolute',
        backgroundColor: 'blue',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    searchSection: {
        width: wp(90),
        height: hp(20),

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: 'gray',
        borderWidth: 1,
    },
    searchIcon: {
        padding: 18,
        marginTop: hp(0)
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
    iconStyle: {
        marginRight: hp(2)
    }
});