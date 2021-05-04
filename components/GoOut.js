
import * as React from 'react';
import {Text,StyleSheet,View, SafeAreaView, TextInput, FlatList,Image, Button, ScrollView, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import selectionData from '../assets/data/selectionData';
import imageData from '../assets/data/imageData';
import imageData2 from '../assets/data/imageData2';

Entypo.loadFont();
Feather.loadFont();
EvilIcons.loadFont();

const renderTextWrapper = ({ item }) => (
    <View style={[styles.item,{paddingLeft:item.id==1?25:0}]}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

const GoOut = ({navigation}) => {

    return( 
        <View>
            
            <View style={styles.firstHeader}>
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <View style={styles.headerWrapper1}>
                            <Entypo name="location-pin" size={24} color={colors.black}/>
                            <Text style={styles.hyder}>Hyderabad</Text>
                        </View>
                        <Feather name="align-left" size={24} color={colors.black}>

                        </Feather>
                    </View>
                </SafeAreaView>

                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input}>
                        <EvilIcons name="search" size={20} color={colors.secondary}/>
                        Restaurant name, cuisine, or a dish...
                    </TextInput>
                </View>

                <View style={styles.textWrapper}>
                    <FlatList
                    data={selectionData}
                    renderItem={renderTextWrapper}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    />
                </View>
            </View>

            <ScrollView>
                
                <View style={styles.slides}>

                </View>

                <Text style={styles.eatWrapper}>Popular restaurants around you</Text>
                <View style={styles.cardWrapper}>
                        {popularData.map((item) => (
                            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Details',{item:item})}>
                                <View style={styles.cardWrap}>
                                    <Image style={styles.popularDataimage} source={item.image} />
                                    <View style={styles.titleWrapper}>
                                        <Text>{item.title}</Text>
                                        <Text style={styles.ratingText}>{item.rating}</Text>
                                    </View>
                                    <View style={styles.descriptionWrap}>
                                        <Text style={styles.ratingText}>{item.description}</Text>
                                        <Text style={styles.ratingText}>{item.price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                </View>
            </ScrollView>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    firstHeader:{
        marginBottom:10,
    },
    headerWrapper:{
        flexDirection :'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
    },
    hyder:{
       fontSize: 18,
       fontWeight:'bold',
    },
    headerWrapper1:{
        flexDirection:'row',
        alignItems:'center',
    },
    input:{
        height:40,
        margin:12,
        borderWidth:0.2,
        borderRadius:10,
        color: 'grey',
        alignItems:'center',
        fontSize: 12,
        
    },
    inputWrapper:{
       paddingHorizontal: 20,
    },
    title:{
        fontSize:12,
        padding:5,
        marginHorizontal:4,
        borderWidth:1,
        borderRadius:5,
        fontWeight:'bold'
        
    },
    item:{
        marginTop:8,
     },
     popularDataimage:{
        borderTopLeftRadius:37,
        borderTopRightRadius:37,
        marginLeft:20,
        marginTop:15,
    },
    titleWrapper:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:25,
      marginTop:15,
    },
    descriptionWrap:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:25,
      marginBottom:25,
    },
    ratingText:{
        fontFamily: 'Roboto-Light'
    },
    eatWrapper:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:28,
        marginLeft:27,
    },
})

export default GoOut;