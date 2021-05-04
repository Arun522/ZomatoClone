import React from 'react';
import {View,Text, SafeAreaView, Image, StyleSheet, ImageBackground, Button, Alert, ScrollView} from 'react-native';


const Donate = () => {
    return(
        <ScrollView>
        <View>
            <SafeAreaView>
                <View>
                    <ImageBackground source={require('../assets/images/covid.png')} style={styles.covidBack}>
                        <Text style={styles.feedText}>feeding india</Text>
                        
                    </ImageBackground>
                    <View style={styles.blabac}>
                        <Text style={styles.bol}>by ZOMATO</Text>
                        <View>
                            <Text style={styles.sma}>Providing Hospitals and patients with Oxygen and related</Text>
                            <Text style={styles.sma}>Suplies. Help us save thousands of lives.</Text>
                            <Text style={styles.sma}>#IndiaNeedsOxygen</Text>
                        </View>
                        <View style={styles.buttonWrap}>
                            <Button 
                                style={styles.DonateNow}
                                title="Donate Now"
                                color="white"
                                onPress={() => Alert.alert('Thanks for Donation')}
                            />
                        </View>
                    </View>
                    <View style={styles.head1}>
                        <Text style={styles.headSty}>India urgently needs oxygen concentrators to</Text>
                        <Text style={styles.headSty}>save thousands of lives</Text>
                    </View>
                    <View style={styles.head2}>
                        <Text style={styles.headsty1}>The current wave of the pandemic has  left out country</Text>
                        <Text style={styles.headsty1}>gasping. Our hospitals are Operating under dire</Text>
                        <Text style={styles.headsty1}>situation and patients are strugguling to get hold of </Text>
                        <Text style={styles.headsty1}>required oxygen</Text>
                    </View>
                    <View style={styles.head3}>
                        <Text style={styles.headsty1}>we need your help to provide them with oxygen and</Text>
                        <Text style={styles.headsty1}>related supplies for free</Text>
                    </View>
                    
                </View>
            </SafeAreaView>
        </View>
        </ScrollView>
    )
    
}

const styles = StyleSheet.create({
    feedText:{
        color:'white',
        fontWeight:'bold',
        fontSize:36,
        marginLeft:16,
    },
    covidBack:{
        height:388,
        width:414,
        justifyContent:'flex-end'
    },
    blabac:{
        backgroundColor:'black',
        width:414,
        height:180,
    },
    bol:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        marginLeft:129,
        marginBottom:13,
        marginTop:7,
    },
    sma:{
        color:'white',
        fontSize:12,
        marginLeft:16
    },
    DonateNow:{
         color:'white',
    },
    buttonWrap:{
        marginTop:32,
        height:52,
        width:366,
        backgroundColor:'#CD3A3A',
        borderRadius:19,
        marginHorizontal:15,
        marginTop:27,
        padding:8,
        
    },
    headSty:{
        fontSize:14,
        fontWeight:'bold',
        
    },
    headsty1:{
        fontFamily:'Roboto-Light',
        fontSize:14,
    },
    head1:{
        marginTop:23,
        marginLeft:12,
    },
    head2:{
        marginTop:23,
        marginLeft:12,
    },
    head3:{
        marginTop:13,
        marginLeft:12,
    }, 
    
})

export default Donate;