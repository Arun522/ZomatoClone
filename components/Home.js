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

  const renderImageTextWrapper = (props) =>{
      return
      (
        <View style={styles.item}>
            <Image source={props.image} style={styles.image} />
            <Text style={styles.text}></Text>
        </View>
        
      )
    }

const Home = ({navigation}) => {

    return(
        <View style={StyleSheet.container}>
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
                <View style={styles.imageWrapper}>
                    <Image source={require('../assets/images/stkHome.png')} style={styles.ItemImage1}/>
                    <Image source={require('../assets/images/stkMatch.png')} style={styles.ItemImage2}/>
                </View>
                <View style={styles.happyWrapper}>
                    <Text style={styles.eatWrapper}>Eat what makes you happy</Text>
                </View>
                <View style={styles.imageRow}>
                    {imageData.map((item) => (
                        <View style={[styles.item,{marginLeft:item.id==1?10:0}]} key={item.id}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.text}>{item.title}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.imageRow2}>
                    {imageData2.map((item) => (
                        <View style={[styles.item,{marginLeft:item.id==5?10:0}]} key={item.id}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.text}>{item.title}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.seeMoreWrapper}>
                    <Text style={styles.seeMore}>see more</Text>
                </View>
                <Text style={styles.eatWrapper}>
                        Restaurants around you
                </Text>

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
 imageWrapper:{
     flexDirection:'row',
     alignItems:'center',
 },
 ItemImage1:{
     marginLeft:25,
     marginTop:15,
 },
 ItemImage2:{
    marginLeft:10,
    marginTop:15,
},
eatWrapper:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:28,
    marginLeft:27,
},
imageRow:{
    flexDirection:'row', 
    alignItems:'center',
},
imageRow2:{
    flexDirection:'row', 
},
image:{
    marginHorizontal:10,
    alignItems:'center',
},
text:{
    marginHorizontal:15,
    marginTop:15,
    alignItems:'center',
},
seeMoreWrapper:{
    marginTop:28,
    
    marginHorizontal:20,
    borderRadius:7,
},
seeMore:{
    borderWidth:1,
    textAlign:'center',
    padding:1,
    borderRadius:7,
    fontSize:12,
},
cardWrap:{

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
}

 
})
export default Home;