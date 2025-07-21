import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.cards,styles.cardsElevated]}>
            <Image
                source={{
                    uri:'https://imgs.search.brave.com/GXBj2cxJyGx2fEQx6ViCZIykjP1XLgaX9L3S3EKRquE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hLnRy/YXZlbC1hc3NldHMu/Y29tL2ZpbmR5b3Vy/cy1waHAvdmlld2Zp/bmRlci9pbWFnZXMv/cmVzNzAvNjgwMDAv/NjgwMTktR29hLmpw/Zz9pbXBvbGljeT1m/Y3JvcCZ3PTEwNDAm/aD01ODAmcT1tZWRp/dW1IaWdo'
                }}
                style={styles.cardImages}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Goa</Text>
                <Text style={styles.cardLabel}>Maharashtra</Text>
                <Text style={styles.cardDescription}>Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.</Text>
                 <Text style={styles.cardFooter}>12 min Away</Text>

            </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    cards:{
        width:380,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
   // it is use to give shadow to the cards not much necessary
    cardsElevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImages:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
    },
    cardLabel:{
        color:'#000000',
        fontSize:14,
        marginBottom:6,

    },
    cardDescription:{        
        color:'#000000',
        fontSize:12,
        marginTop:6,
        marginBottom:12,

    },
    cardFooter:{
     color:'#000000'

    }
})