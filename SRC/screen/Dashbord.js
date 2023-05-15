import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Menu from 'react-native-vector-icons/AntDesign';
import Left from 'react-native-vector-icons/AntDesign';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

const Dashbord = (props) => {

  return (
    <>
      <StatusBar
        backgroundColor={'#ED7531'}
        barStyle="light-content"
        hidden={false}
      />
      <View style={{ width: wp(100), height: hp(30), backgroundColor: '#ED7531' }}>
        <View
          style={{
            flexDirection: 'row',

            width: wp(90),


          }}>
          <View style={{ width: wp(40), marginTop: hp(2) }}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>

              <Menu
                style={{ marginTop: hp(1), marginLeft: hp(3) }}
                name="menu-fold"
                size={25}
                color="#fff"
              />

            </TouchableOpacity>
          </View>
          <View style={{ width: wp(40), marginTop: hp(3.5) }}>
            <View style={{ width: wp(30), justifyContent: 'flex-start' }}>
              <Text style={{ color: '#fff', fontSize: hp(2.5),fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal'  }}>
                Dashboard{' '}

              </Text>
            </View>

          </View>

        </View>
        <View style-={{ width: wp(50) }}>
          <View style={{ width: wp(50), marginHorizontal: hp(16.5), marginTop: hp(1) }}>
            <Text style={{ fontSize: hp(8), color: 'white',fontWeight:'700' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>1528</Text>
            <View style={{marginLeft:hp(1.5)}}>
              <Text style={{ color: 'white',fontSize:hp(1.8),fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal'  }}>ACTIVE USER NOW</Text>
            </View>
          </View>
        </View>

        <View style={{ width: wp(100), height: hp(100), backgroundColor: '#F5F5F5', borderRadius: hp(5),marginTop:hp(5) }}>
          <View style={{ width: wp(90), flexDirection: 'row', marginHorizontal: hp(2.5), marginTop: hp(3) }}>
            <View style={{ width: wp(45) }}>
              <Text style={{ color: '#120D26', fontSize: hp(2),fontWeight:'700' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>Audience Overview</Text>
            </View>
            <View style={{ flexDirection: 'row', width: wp(45), marginLeft: hp(5), marginTop: hp(0.5) }}>
              <View>
                <Left

                  name="left"
                  size={20}
                  color="gray"
                />
              </View>
              <View>
                <Text style={{ color: 'gray' }}>

                  01 Apr -- 30 Apr
                </Text>
              </View>
              <View>
                <Left

                  name="right"
                  size={20}
                  color="gray"
                />
              </View>

            </View>
          </View>
          <View style={{ width: wp(90), justifyContent: 'space-evenly', marginTop: hp(5), flexDirection: 'row', marginLeft: hp(1) }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Users')}>
              <View style={{ width: wp(28), height: hp(18), borderRadius: hp(3), backgroundColor: '#4A43EC', marginLeft: hp(3), marginRight: hp(3.5) }}>
                <View style={{ width: wp(25), marginLeft: hp(2), marginTop: hp(2) }}>
                  <Text style={{ color: 'white' }}>Users</Text>
                </View>
                <View style={{ width: wp(25), marginLeft: hp(2), marginTop: hp(2) }}>
                  <Text style={{ color: 'white', fontSize: hp(4), fontWeight: 'bold' }}>175</Text>
                </View>
                <View style={{ width: wp(25), marginLeft: hp(2), marginTop: hp(2) }}>
                  <Text style={{ color: 'white', fontSize: hp(2) }}>
                    <Left

                      name="arrowup"
                      size={20}
                      color="white"
                    />
                    76.5%
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ width: wp(28), height: hp(18), borderRadius: hp(3), backgroundColor: 'white', marginRight: hp(3.5) }}>
              <View style={{ width: wp(25), marginLeft: hp(2), marginTop: hp(2) }}>
                <Text style={{ color: 'gray' }}>Sessions</Text>
              </View>
              <View style={{ width: wp(26), marginLeft: hp(2), marginTop: hp(2) }}>
                <Text style={{ color: 'black', fontSize: hp(4), fontWeight: 'bold' }}>95</Text>
              </View>
              <View style={{ width: wp(25), marginLeft: hp(2), marginTop: hp(2) }}>
                <Text style={{ color: 'green', fontSize: hp(2) }}>
                  <Left

                    name="arrowup"
                    size={20}
                    color="green"
                  />
                  54.8%
                </Text>
              </View>
            </View>
            <View style={{ width: wp(28), height: hp(18), borderRadius: hp(3), backgroundColor: 'white' }}>
              <View style={{ width: wp(25), marginLeft: hp(2), marginTop: hp(2) }}>
                <Text style={{ color: 'gray' }}>New Users</Text>
              </View>
              <View style={{ width: wp(25), marginLeft: hp(2), marginTop: hp(2) }}>
                <Text style={{ color: 'black', fontSize: hp(4), fontWeight: 'bold' }}>83</Text>
              </View>
              <View style={{ width: wp(25), marginLeft: hp(2), marginTop: hp(2) }}>
                <Text style={{ color: '#F0635A', fontSize: hp(2) }}>
                  <Left

                    name="arrowdown"
                    size={20}
                    color="#F0635A"
                  />
                  12.5%
                </Text>
              </View>
            </View>

          </View>

          <View style={{ width: wp(90), marginHorizontal: hp(2.5), marginTop: hp(3), height: hp(37), borderRadius: hp(3), backgroundColor: 'white', }}>
            <View style={{ width: wp(90), flexDirection: 'row'}}>
              <View style={{ width: wp(45), marginLeft: hp(1.5), marginTop: hp(1) }}>
                <Text style={{ color: '#120D26', fontSize: hp(2.5),fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal'  }}>Users</Text>
              </View>
              <View style={{ width: wp(45), marginHorizontal: hp(6), marginTop: hp(1), flexDirection: 'row' }}>
                <View style={{marginTop:hp(1)}}>
                  <Text style={{ color: 'blue',fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal'  }}>Last 7 Days</Text>
                </View>
                <View>
                  <Left
                    style={{marginTop:hp(1.3)}}
                    name="down"
                    size={18}
                    color="blue"
                  />
                </View>
              </View>
            </View>
            <Chart
              style={{ height: hp(30), width: wp(90), backgroundColor: 'white' }}
              data={[
                { x: -2, y: 15 },
                { x: -1, y: 10 },
                { x: 0, y: 12 },
                { x: 1, y: 7 },
                { x: 2, y: 6 },
                { x: 3, y: 8 },
                { x: 4, y: 10 },
                { x: 5, y: 8 },
                { x: 6, y: 12 },
                { x: 7, y: 14 },
                { x: 8, y: 12 },
                { x: 9, y: 13.5 },
                { x: 10, y: 18 },
              ]}
              padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
              xDomain={{ min: -2, max: 10 }}
              yDomain={{ min: 0, max: 20 }}
            >
              <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
              <HorizontalAxis tickCount={6} />
              <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } } }} />
              <Line theme={{ stroke: { color: '#ffa502', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 } } }} />
            </Chart>

          </View>

        </View>

      </View>
    </>
  )
}

export default Dashbord