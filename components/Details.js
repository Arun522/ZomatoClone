import React from 'react';
import {View,Text, SafeAreaView, TouchableOpacity,StyleSheet, Image, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import recommendData from '../assets/data/recommendData';

Ionicons.loadFont()

const Details = ({route,navigation}) => {
    const {item} = route.params;
    return( 
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity
                        style={styles.backIcon}
                        onPress={()=>navigation.goBack()}>
                        <Ionicons name="chevron-back-sharp" size={24} color="black"/>
                    </TouchableOpacity>
                    <Text style={styles.hotelName}>{item.title}</Text>
                </View>
            </SafeAreaView>

            <View style={styles.menuWrapper}>
                <Text style={styles.menuTextWrap}>Menu</Text>
                <View style={styles.chooser}>
                    <View style={styles.vegContainer}>
                        <View style={styles.geenBox}></View>
                        <Text>Veg</Text>
                    </View>
                    <View style={styles.nonVefContainer}>
                        <View style={styles.redBox}></View>
                        <Text>Egg</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.recommend}>recommended</Text>
            <View >
                {recommendData.map((item)=>(
                    <View style={styles.cardWrapper} key={item.id}>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                            <Text>{item.price}</Text>
                        </View>
                        <View>
                            <Image source={item.image}/>
                            
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
        marginTop:10,
    },
    hotelName:{
        fontSize:24,
        fontWeight:'bold',
    },
    backIcon:{
        marginRight:10,
    },
    menuTextWrap:{
        fontSize:24,
    },

    menuWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:30,
        marginTop:40,
        alignItems:'center',
    },            
    chooser:{
        flexDirection:'row',
        
    },
    vegContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:0.5,
        marginRight:10,
        padding:5,
        borderRadius:10,
    },
    geenBox:{
        height:10,
        width:10,
        backgroundColor:'green',
        marginRight:4,
    },
    nonVefContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:0.5,
        padding:5,
        borderRadius:10,
        
    },
    redBox:{
        height:10,
        width:10,
        backgroundColor:'red',
        marginRight:4,
    },
    recommend:{
        fontSize:24,
        marginLeft:30,
        marginTop:20,
    },
    cardWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:30,
        marginTop:25,
        alignItems:'center',
    },
    

})

export default Details;