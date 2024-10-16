import {View, SafeAreaView, Image, StyleSheet, Text, TextInput, StatusBar, Pressable} from 'react-native';
import {useState} from 'react';
import {Input} from '../components/input';

import { useNavigation } from '@react-navigation/native';

const Login=()=>{

    const [inputText, setInputText] = useState("");

    const navigation = useNavigation();

    function handleForgot(){
      alert("Em construção...");
    }

    function handleTest(){
      alert("Em construção...");
    }

    function handleSignup(){
      navigation.navigate('signup');
    }

  return (
    <View style={styles.window}>
      <SafeAreaView style={styles.container}>

      <Image source={require('../assets/bgng.jpg')}
      resizeMode='cover'
      style={styles.backgroundImage}
      />

        <View style={styles.loginContainer}>
            <Image
            source={require('../assets/neuroguides-logo.jpg')} 
            resizeMode='cover'
            style={styles.ngLogo}
            /> 
            <Text style={styles.welcomeText}>Bem-vindo ao Neuroguides.</Text>
          
            <Input inputname="Entrar:"/>
            <Input inputname="Senha:"/>

            <Pressable style={styles.forgotTextBox} onPress={handleForgot}>
              <Text style={styles.forgotText}>Esqueci a senha.</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={handleTest}>
              <Text style={styles.buttonText}>Entrar</Text> 
            </Pressable>

            <Pressable onPress={handleSignup}>
                <Text style={styles.signupTxt}>Cadastre aqui.</Text>
            </Pressable>



        </View>
      </SafeAreaView>
    </View>
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
  loginContainer:{
    width: 300,
    height: 600,
    marginTop: -50,
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
  ngLogo:{
    width: 150,
    height: 150,
  },
  welcomeText:{
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 600
  },
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
  },
  forgotTextBox:{
    width: 260,
    marginBottom: 20,
    marginTop: -10
  },
  forgotText:{
    fontSize: 15,
    textDecorationLine: 'underline',
    left: 0 
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
  },
  signupTxt:{
    fontSize: 16,
    textDecorationLine: 'underline',
    margin: 'auto'
  }
})

export default Login;