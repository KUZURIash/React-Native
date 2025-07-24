import React from 'react'
import { View,StyleSheet,Pressable } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player' 
import Icon from 'react-native-vector-icons/MaterialIcons'
import { playbackService } from '../../musicPlayerServices'


const ControlCenter=()=> {

    const playBackState = usePlaybackState()// usePlaybackState() it is use to keep the track of all the states that are happening
    
    // next button
    const skipToNext = async ()=>{
        await TrackPlayer.skipToNext()
    }
      // Previous button
    const skipToPrevious = async ()=>{
        await TrackPlayer.skipToPrevious()
    }
    //plyback is the variable and State is the thing which check if the audio is pause or not and state is the value of playback
  
    const togglePlayback = async (playBack:State)=>{ //playback is a state which tells us what is happening to the app currently
        const currentTrack = await TrackPlayer.getCurrentTrack()// here we know what track we are playing so during the time of resume we can resume this properly
        if (currentTrack !== null) {
            if (playBack ===State.Paused||playBack===State.Ready) {
                await TrackPlayer.play()
            }else {
                await TrackPlayer.pause()
            }
            
        }
    }
    return (
    
     <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
            <Icon style={styles.icon} name="skip-previous" size={40} />
        </Pressable>
        <Pressable onPress={() => togglePlayback(playBackState.state!)}>  //TODO
            <Icon 
            style={styles.icon} 
            name={playBackState.state === State.Playing ? "pause" : "play-arrow"} //TODO
            size={75} />
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Icon style={styles.icon} name="skip-next" size={40} />
        </Pressable>

    </View>
    
  )
}
const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
  
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });
export default ControlCenter
