import React, {useState,useEffect} from "react";

import { NewAppScreen } from '@react-native/new-app-screen';

import { ActivityIndicator, StatusBar, StyleSheet, useColorScheme, View,SafeAreaView } from 'react-native';
//we bring setUpPlayer  and addTrack from musicPlayerServices
import { addTrack,setupPlayer } from "../musicPlayerServices";
import MusicPlayer from "./screens/MusicPlayer";



function App() {
// check wheather player is ready or not
  const [isPlayerReady,setIsPlayerReady]=useState(false)//this is responsibe for making the player ready for very first time

  async function setup() {
    let isSetUp = await setupPlayer()

    if (isSetUp) { // if isSetUp is true then 
      await addTrack()//here we add the track from the musicPlayerService and that function will run
      //as we know that App.tsx is the main function to run so to fetch the data we use it
    }

    setIsPlayerReady(isSetUp)//it is the useState that we have updated
  }
 useEffect(() => {
   setup //it runs first
  
 }, [])
 
if (!isPlayerReady){
  return (
    <SafeAreaView>
      <ActivityIndicator/>
    </SafeAreaView>
  )
}
  return (
  <View style={styles.container}>
    <StatusBar  barStyle={"light-content"}/>
    <MusicPlayer/>
  </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flex:1,
 }
});

export default App;
