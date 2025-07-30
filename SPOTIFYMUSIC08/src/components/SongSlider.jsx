import Slider from '@react-native-community/slider';
import React from 'react'
import {useProgress} from 'react-native-track-player' // use to keep the track of the progress
import { View,StyleSheet,Text } from 'react-native';


const  SongSlider=()=> {
    // i want to know the position of it so it is given by use progress
    const {position,duration} = useProgress

  return (
<View>
    <Slider
    value={position}
        minimumValue={0}  //{0}=  because it starts from 0
        maximumValue={duration}  // depends on the music duration
        thumbTintColor='#FFF'
        maximumTrackTintColor='#FFF'
        style={styles.sliderContainer}
    />
    <View style={styles.timeContainer}>
            <Text style={styles.time}>
                {new Date(position*1000).toISOString().substring(15, 19)} //(position*1000) converts to  illi seconds
            </Text>
            <Text style={styles.time}>
                {new Date((duration-position)*1000).toISOString().substring(15, 19)}  // ((duration-position)*1000) converting to mili seconds and show the remaining time
            </Text>
        </View>
</View>
  )
}
const styles = StyleSheet.create({
    sliderContainer: {
      width: 350,
      height: 40,
      marginTop: 25,
  
      flexDirection: 'row',
    },
    timeContainer: {
      width: 340,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    time: {
      color: '#fff',
    },
  });
export default SongSlider
