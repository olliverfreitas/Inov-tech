import {View, SafeAreaView, Image, StyleSheet, TouchableOpacity, Text, StatusBar} from 'react-native';
import {Input} from '../../components/input';
import {useState} from 'react';
import { Picker } from '@react-native-picker/picker';

import {Link} from 'expo-router';

 export default function Signup(){

    const [theSelectedValue, setTheSelectedValue] = useState('');

  return (
    
      <SafeAreaView style={styles.container}>

      <Image source={require('../../assets/bgng.jpg')}
      resizeMode='cover'
      style={styles.backgroundImage}
      />

        <View style={styles.signupContainer}>

          <Input inputname="Nome:" />
          <Input inputname="Sobrenome:" />
          <Input inputname="Email:" />
          <Input inputname="Senha:" />

          <View style={styles.pickerArea}>
            <Text style={styles.pickerText}>O que você é:</Text>
            <View style={styles.pickerBox}>
                <Picker 
                selectedValue={theSelectedValue}
                onValueChange={itemvalue => setTheSelectedValue(itemvalue)}
                style={styles.picker}>
                    <Picker.Item label="Selecione..." value="" />
                    <Picker.Item label="Mãe" value="Mãe" />
                    <Picker.Item label="Pai" value="Pai" />
                    <Picker.Item label="Responsável" value="Responsável" />
                    <Picker.Item label="Profissional da saúde" value="Profissional" />
                </Picker>
            </View>
     
    </View>

    <Link href='/profileimg' asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text> 
        </TouchableOpacity>
    </Link>
        
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  window:{
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF'
  },
  container:{
    width: '100%',
    height: '100%',
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0
  },
  backgroundImage:{
    position: 'absolute'
  },
  signupContainer:{
    width: 300,
    height: 600,
    padding: 20,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 5,
    borderRadius: 30,
    borderLeftColor: '#d3d3d3',
    borderRightColor: '#d3d3d3',
    borderBottomColor: '#A0A0A0',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pickerArea:{
    marginBottom: 20,
  },
  picker: {
    width: 260,
    padding: 5
  },
  pickerText:{
    fontSize: 16,
    marginBottom: 5
  },
  pickerBox:{
    borderWidth: 2,
    borderColor: '#d3d3d3',
    borderRadius: 12,
    padding: 0,
    height: 60
  },
  button:{
    width: 246,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#d3d3d3',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 20
  },
  buttonText:{
    fontSize: 18
  }

})
