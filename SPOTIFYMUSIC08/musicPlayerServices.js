import TrackPlayer,{Event, RepeatMode} from "react-native-track-player";

import { playListData } from "./src/constants";
//this is the initial start of the player
export async function setupPlayer() {
    let isSetup=false
    try {
        await TrackPlayer.getCurrentTrack() //here it says that player i ready to get the track if not then we use catch statement
        isSetup=true
    } catch (error) {
        await TrackPlayer.setupPlayer() //when the player is not ready we set up the player
        isSetup=true
    }
    finally{
        return isSetup
    }
}

export async function addTrack(){
    await TrackPlayer.add(playListData) // we must make sure that the playlist type is supported by the trackplayer so we have mentioned that in (constants.ts)
//basically we get playListData (array where music is stored) the music here

// if we want to listen the music again we use this mode which is queue
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export async function playbackService() { //there is a callback function in async js
    TrackPlayer.addEventListener(Event.RemotePause,()=>{
        TrackPlayer.pause()
    })
      TrackPlayer.addEventListener(Event.RemotePlay,()=>{
        TrackPlayer.play()
    })
      TrackPlayer.addEventListener(Event.RemoteNext,()=>{
        TrackPlayer.skipToNext()
    })
      TrackPlayer.addEventListener(Event.RemotePrevious,()=>{
        TrackPlayer.skipToPrevious()
    })
}