import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'


export default function ContactList() {
    const contacts=[
        {
            uid:1,
            name:'Ayush Bhosale',
            status:'Final Year students facinated about apps',
            imgUrl:'https://imgs.search.brave.com/pIMkqqw2EjzF0O6syO8zDLwoDOIz0Rr_gzj_v9rcaH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzcx/NzQyL3BleGVscy1w/aG90by03NzE3NDIu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw'
        },
          {
            uid:2,
            name:'Soham Sane',
            status:'Final Year students facinated about Websites',
            imgUrl:'https://imgs.search.brave.com/pIMkqqw2EjzF0O6syO8zDLwoDOIz0Rr_gzj_v9rcaH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzcx/NzQyL3BleGVscy1w/aG90by03NzE3NDIu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw'
        },
          {
            uid:3,
            name:'Saish Mekal',
            status:'Final Year students facinated about Python and DSA',
            imgUrl:'https://imgs.search.brave.com/pIMkqqw2EjzF0O6syO8zDLwoDOIz0Rr_gzj_v9rcaH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzcx/NzQyL3BleGVscy1w/aG90by03NzE3NDIu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw'
        },
          {
            uid:4,
            name:'Himanshu Machhi',
            status:'Final Year students facinated about Hacking',
            imgUrl:'https://imgs.search.brave.com/pIMkqqw2EjzF0O6syO8zDLwoDOIz0Rr_gzj_v9rcaH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzcx/NzQyL3BleGVscy1w/aG90by03NzE3NDIu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw'
        },
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      >
        {contacts.map(({uid,name,status,imgUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imgUrl
                }}
                style={styles.userImage}
                />
                <View>
                 <Text style={styles.userName}>{name}</Text>
                 <Text style={styles.userStatus}>{status}</Text>
                </View>

            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        padding:8
    },
    container:{
        paddingHorizontal:18,
        marginBottom :4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom :3,
        backgroundColor:'#8D3DAF',
        padding:8,
        borderRadius:14

    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#FFF'
    },
    userStatus:{
        fontSize:12,
        
    },
})