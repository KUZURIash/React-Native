

import { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View,Text, TouchableOpacity } from 'react-native';

function App() {
  const[changeBackground,setchangeBackground]=useState("#FFFFFF")

  const generateColor= ()=>{
    const hexRange="0123456789ABCDEF" //we created a hexrange so that to choose a random number 
    let color="#"
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random()*16)] //we use+= to add the first value with second
      
    }
    setchangeBackground(color) //we use it to update value of background color
  }

  return (
    <>
       <StatusBar backgroundColor={changeBackground}/>
       <View style={[styles.container,{backgroundColor:changeBackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press Me</Text>
          </View>
        </TouchableOpacity>
       </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',

  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:"#6A1B4D",
    paddingVertical:10,
    paddingHorizontal:40,
  },
  actionBtnText:{
    fontSize:24,
    color:"#FFFFFF",
    textTransform:"uppercase",
   
  }
});

export default App;
