

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View,Text, SafeAreaView, FlatList, Pressable } from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icons  from "./components/Icons";
import { useState } from 'react';

function App() {
  const [isCross,setIsCross]= useState <boolean> (false)
  const [gameWinner,setGameWinner] = useState <string>('')
  const [gameState,setGameState] =useState(new Array(9).fill('empty',0,9))//Array of 9 fill with empty starting from 0 ang ending till 9

  const reloadGame =()=>{
    setIsCross (false)
    setGameWinner ('')
    setGameState(new Array(9).fill('empty',0,9))
    
  }

   const checkIsWinner =()=>{
     if (
      gameState[0] === gameState[1] && //for first row
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
    }

    const onChangeItem =(itemNumber:number)=>{ //itemNumber indicates what item we are clicking on
      if (gameWinner){ //this indicate game is won
        return Snackbar.show({
          text:gameWinner,
          backgroundColor:'#000000',
          textColor:'#FFFFFF'
        })
      }
      if (gameState [itemNumber]==='empty') { //if game state is empty then only this if statement will take place i.e x will not change 
        gameState[itemNumber] = isCross ? 'cross' : 'circle'  //if is cross is true then it is a turn of cross
        setIsCross(!isCross)//now if the cross is false
      }
      else{ // we use else because we cannot use either X neither 0
          Snackbar.show({
            text:'Position is already taken',
            backgroundColor:"red",
            textColor:'#FFF'
          })
      }
      checkIsWinner()
    }
  return (
  <SafeAreaView>
    <StatusBar/>
    {gameWinner ? ( //this part is for who is the game winner
      <View style={[styles.playerInfo,styles.winnerInfo]}>
        <Text style={styles.winnerTxt}>{gameWinner}</Text>
      </View>
    ):( //if there is no game winner then we have to mention whose turn it is  
      <View style={[
        styles.playerInfo,
        isCross ? styles.playerX:styles.playerO
      ]}>
        <Text style={styles.gameTurnTxt}> Player {isCross?'X':'O'}</Text> //this will just display whose turn it is 
      </View>
    )}
    {/*Game Grid*/}
    <FlatList
    numColumns={3}
    data={gameState}
    style={styles.grid}
    renderItem={({item,index})=>(// here we get the data from the array called (gamestate) so (item)is variable and index is the index value of the item[]
    <Pressable // key={index} it keeps the track of which item is pressed
    key={index}
    style={styles.card}
    onPress={()=>onChangeItem(index)}
    > 
    <Icons name ={item}/>
    </Pressable>
  )}
    />
    {/* game Action*/}
    <Pressable
    style={styles.gameBtn}
    onPress={reloadGame}>
      <Text style={styles.gameBtnText}>
        {gameWinner?'Start new Game':'Reload the Game'}
      </Text>
    </Pressable>
  
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});


export default App;
