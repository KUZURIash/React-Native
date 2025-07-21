

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View,SafeAreaView,Text,TextInput ,FlatList, Pressable} from 'react-native';
//Constants
import { currencyByRupee } from './constants';
//Components
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';
import { useState } from 'react';
//import { FlatList } from 'react-native/types_generated/index';


function App() {
  const [inputValue,setInputValue] = useState('')
  const [resultValue,setResultValue] = useState('')
  const [targetCurrency,setTargetCurrency] = useState('')

  const buttonPressed=(targetValue:Currency)=>{ //target value is getting the data from currency(index)
    if (!inputValue) {
      return Snackbar.show({
        text:"Enter a  value to convert",
        backgroundColor:"#EA7773",
        textColor:"#000000"
      })
      
    }

    const inputAmount= parseFloat(inputValue)//NaN is define as not a number (if the value is not a number  then)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount*targetValue.value //here we know target value is a currency an this currency we bring from currency(index)
      const result =`${targetValue.symbol} ${convertedValue.toFixed(2)}`//${convertedValue.toFixed(2)} we use this coz we will get the values in decimal
       setResultValue(result)
       setTargetCurrency(targetValue.name)
    }
    else{
       return Snackbar.show({
        text:"Not the valid number to convert",
        backgroundColor:"#F4BE2C",
        textColor:"#000000"
      })
    }
  }


  return (
<>
  <StatusBar/>
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <View style={styles.rupeesContainer}>
      <Text style={styles.rupee}>₹</Text>
      <TextInput
      maxLength={14}
      value={inputValue}
      clearButtonMode='always'
      onChangeText={setInputValue}
      keyboardType='number-pad'
      placeholder='Enter Amount In Rupees'
      />
      </View>
      {resultValue && (
        <Text style={styles.resultTxt}>
          {resultValue}
        </Text>
      )}
    </View>
    <View style={styles.bottomContainer}>
      <FlatList
      numColumns={3} //here num column we define how many data we want in a single tile
      data={currencyByRupee} // this data is refering to an array
      keyExtractor={item=>item.name} //here item is taking the data from currencyByRupee and fething the data with the unique id having (name)
      renderItem={({item})=>(
        <Pressable style={[
          styles.button,
          targetCurrency ===item.name &&styles.selected //here we haven the styling were if we select the item then only it gives the color
          ]}
          onPress={()=>buttonPressed(item)}
          >
            <CurrencyButton {...item}/>
            </Pressable>
      )}
     />
    </View>
  </View>
</>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});



export default App;
