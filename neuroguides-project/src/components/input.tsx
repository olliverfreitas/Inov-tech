import { View, TextInput, StyleSheet, Text} from 'react-native';
import {useState} from 'react';

type Props = {
  inputname: string;
}

export const Input = (props: Props)=>{

  const [inputText, setInputText] = useState("");


  return (
    <View style={styles.inputBoxArea}>
      <Text style={styles.inputName}>{props.inputname}</Text>
      <TextInput
      value={inputText}
      onChangeText={t => setInputText(t)}
      style={styles.inputBox}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputBoxArea:{
  marginBottom: 20
},
  inputBox: {
  width: 260,
  height: 40,
  borderRadius: 8,
  borderWidth: 2,
  borderColor: '#d3d3d3'
},
inputName: {
  fontSize: 16,
  marginBottom: 5
}
})