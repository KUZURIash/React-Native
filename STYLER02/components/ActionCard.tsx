import { Image, Linking, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in JS 21
            </Text>
        </View>
        <Image 
        source={{
            uri:'https://images.pexels.com/photos/31636924/pexels-photo-31636924.jpeg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                JavaScript.com is a resource for the JavaScript community. You will find resources and examples for JavaScript beginners as well as support for JavaScript experts. Learn JavaScript or free with our easy to use input output machine.
            </Text>
        </View>

        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=> openWebsite('https://www.google.com/')}>
                <Text style={styles.socialLinks}>Read more</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:350,
        height:360,
        borderRadius:10,
        marginVertical:12,
        marginHorizontal:30
       

    },
    cardElevated:{
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headingContainer:{
        height :40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'#000',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:190,
    },
    bodyContainer:{
        padding:10,
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        fontSize:16,
        color:'#000000',
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:4
    }

})