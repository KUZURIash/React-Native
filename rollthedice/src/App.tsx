
import { StatusBar, StyleSheet, useColorScheme, View,ImageSourcePropType,Image, Pressable ,Text} from 'react-native'
import { JSX, PropsWithChildren } from 'react';

import { useState } from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
//we import all the images
import DiceOne from '../assets/One.png' //DiceOne is the name given to the module
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'




//the property which we are going to pass inside the dice that will be dice props
//type defines the type script propswithchildren is a value which we are gonna have in the typescript
type DiceProps=PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>
//it is a function we have created here
const Dice=({imageUrl}:DiceProps) =>{
  return(
    <View>
      <Image style ={styles.diceImage} source={imageUrl}/>
    </View>
  )
}
//haptic feedback
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function App() {
 const [diceImage,setdiceImage]=useState<ImageSourcePropType>(DiceOne)
 const rollDiceOnTap=()=>{
  let randomNumber=Math.floor(Math.random()*6)+1//(Math.random()*6)+1 "+1"is used so that we dont get 0
  switch (randomNumber) {
    case 1:
      setdiceImage(DiceOne)
      break;
        case 2:
      setdiceImage(DiceTwo)
      break;
        case 3:
      setdiceImage(DiceThree)
      break;
        case 4:
      setdiceImage(DiceFour)
      break;
        case 5:
      setdiceImage(DiceFive)
      break;
        case 6:
      setdiceImage(DiceSix)
      break;
  
    default:
      setdiceImage(DiceOne)
      break;
  }
ReactNativeHapticFeedback.trigger("impactLight", options);
 }

  return (
   <>
   <View style={styles.container}>
    <Dice imageUrl={diceImage}/>
    <Pressable 
    onPress={rollDiceOnTap}>
     <Text style={styles.rollDiceBtnText}>Roll The Dice</Text> 
    </Pressable>
   </View>
   </>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
