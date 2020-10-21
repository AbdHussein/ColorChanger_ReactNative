import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default function App() {
  var [textColor, setTextColor] = useState('#000');

  function changeColor(){  
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    setTextColor(`rgb(${red},${green},${blue})`);
    console.log(textColor);
    return;
  }

  return (
    <View style={styles.container}>
      <Text style={{color: textColor, fontSize: 50}}>Hello World!!</Text>
      <Button title={"Press Me!"} style={styles.button} onPress={changeColor}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    borderStyle:"solid",
    borderColor:"#000",
    borderRadius: 2,
    borderWidth: 2
  }
});
