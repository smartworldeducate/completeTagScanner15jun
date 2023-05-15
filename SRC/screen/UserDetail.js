import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Check from 'react-native-vector-icons/AntDesign';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SceneView } from 'react-navigation';
import { Button } from 'react-native-magnus';
const UserDetail = (props) => {
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
                        <View style={{ marginLeft: hp(1.5) ,marginTop:hp(0.3)}}>
                            <Text style={{ color: '#120D26', fontSize: hp(2.4),fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>Details</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ width: wp(30), height: hp(15), borderRadius: hp(50), marginHorizontal: hp(14), marginTop: hp(2) }}>
                <View style={{ marginHorizontal: hp(4), marginVertical: hp(4) }}>
                    <Image
                        style={{ width: wp(27), height: hp(12.5), borderRadius: hp(50) }}
                        source={{ uri: 'qasim' }} resizeMode='contain'></Image>
                </View>
            </View>
            <View style={{ width: wp(90), marginHorizontal: hp(11), marginTop: hp(3) }}>
                <Text style={{ fontSize: hp(2), color: '#120D26',fontWeight:'600' ,fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal' }}>Muhammad Qasim Ali Khan</Text>
            </View>
            <ScrollView>
                <View style={{ width: wp(90), height: hp(55), borderRadius: hp(5), marginHorizontal: hp(2.5), marginTop: hp(0) }}>
                    <View style={{ marginLeft: hp(1), marginTop: hp(1) }}>
                        <Text style={{ fontFamily:'NunitoSans_7pt-Regular',fontStyle:'normal',lineHeight: hp(3), color: '#120D26',fontSize:hp(1.5),fontWeight:'400',lineHeight:22 }}>
                            Lörem ipsum mifäning sangen i abel lasade. Järtad projat aren kroböng kror. Antibänäsam trelig till plagingen av decina liksom afysk i megatengen. Episade sar ifall Viktoria Holmberg för att gas. Ressa dorujavis telens. Vytt krov, beligt makrossade. Muning iss ede resm flipperförälder. Ordningskonsult föföliga, om egobisat dikagerade. Ovis dekarade dev prer medan segäsk. Tir der, evis i dekarat egolinade tins. Ogt diajynde den tinera benat gang. Kyvingen mirat inte ananir. Dodåde våmirad läslov i liren. Krotere projärar operadiktisk klimatism. Äskade Inger Carlsson i diliga. Måst miheten i tedora.

                            Proren porade prektigt huruvida degengen, vafäsk. Epidihet fimpomat bes sen prejall för att vas. Monoren blåkort utan böröras min. Kadifägisk krosende, biosion inte iktiga ren tidårad. Sosest nira krona. Lisa Håkansson ställa frågor bebär, yrtad ykyren. Dånat rerede: närade dossade ode synpod. Spelingen prodiktisk kontrare youtuber i oktigt. Laddhybrid fyliga men vivyn. Jyngar poren i diss mijahet. Monogon larat Arvid Petersson ber er för att dysmodern. Prer nisisk fuldelning. Vadöheten mora niledes. Endotism din övervakningsekonomi i artad i autogerade. Tiren mande i Jessica Sandberg antivirar. Oprening föruledes de dekadåse, finanssmälta fast ongar.

                        </Text>
                    </View>
                </View>
                <View style={{ width: wp(90), marginHorizontal: hp(2.5), flexDirection: 'row' ,marginTop:hp(2)}}>
                    <View>
                        <Button
                        w={100}
                        h={40}
                            mt="lg"
                            ml="md"
                            px="xl"
                            py="lg"
                            bg="blue500"
                            rounded="circle"
                            color="white"
                            shadow={2}
                            
                        >
                            Play now
                        </Button>
                    </View>
                    <View>
                        <Button
                        w={90}
                        h={40}
                            mt="lg"
                            ml="md"
                            px="xl"
                            py="lg"
                            bg="#EE544A"
                            rounded="circle"
                            color="white"
                            shadow={2}
                            
                        >
                            Play now
                        </Button>
                    </View>
                    <View>
                        <Button
                          w={80}
                          h={40}
                            mt="lg"
                            ml="md"
                            px="xl"
                            py="lg"
                            bg="#FF8D5D"
                            rounded="circle"
                            color="white"
                            shadow={2}
                            
                        >
                            Play now
                        </Button>
                    </View>
                    <View>
                        <Button
                         w={60}
                         h={40}
                            mt="lg"
                            ml="md"
                            px="xl"
                            py="lg"
                            bg="blue500"
                            rounded="circle"
                            color="white"
                            shadow={2}
                            
                        >
                            Play 
                        </Button>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default UserDetail