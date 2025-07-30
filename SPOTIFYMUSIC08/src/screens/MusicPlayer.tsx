//this is building of the Main screen

import { View, Text,StyleSheet, Dimensions,Image } from 'react-native'
import React, { useState } from 'react'

import TrackPlayerimport,
 {
    Event,
    Track,
    useTrackPlayerEvents
}from 'react-native-track-player'
import { playListData } from '../constants'
import SongInfo from '../components/SongInfo'
import SongSlider from '../components/SongSlider'
import ControlCenter from '../components/ControlCenter'
import TrackPlayer from 'react-native-track-player'
import { FlatList } from 'react-native'




const {width}=Dimensions.get('window') //Basically this is used to get the width of any mobile screen present

const renderArtWork =()=>{

}

const MusicPlayer = () => {
    const [track,setTrack]=useState<Track | null>() 
     useTrackPlayerEvents([Event.PlaybackTrackChanged],async event=>{

         switch (event.type) {
            case Event.PlaybackTrackChanged:
                //this will need track that why we use await
                const playingTrack = await TrackPlayer.getTrack(event.nextTrack) //here we gwt the track and (event.nextTrack) it is a dom event which is use to get next track
                setTrack(playingTrack)
                break;
        
        }
     }) 

   const renderArtWork = () => { // it is use to render the image when the music is load
        return(
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (// if track is imported then show the image
                        <Image
                        style={styles.albumArtImg}
                        source={{uri: track?.artwork?.toString()}} //if track is present then take the image from artwork and if you find the artWork convert them to a string
                        />
                    )}
                </View>
            </View>
        )
    }
     return (
    <View style={styles.container}>
        <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song =>song.id.to.string} //we extract id from the each song
        />
     <SongInfo track={track}/> //information of Songs
    <SongSlider />
    <ControlCenter/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#001d23',
    },
    listArtWrapper: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
    },
  });
  

export default MusicPlayer