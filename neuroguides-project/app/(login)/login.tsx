import {View, SafeAreaView, Image, StyleSheet, Text, TextInput, StatusBar} from 'react-native';
import {Button} from '../../components/button';
import {useState} from 'react';
import {Link} from 'expo-router';
import {Input} from '../../components/input';

const Login=()=>{

    const [inputText, setInputText] = useState("");

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

            <View style={styles.forgotTextBox}>
                <Link href='/signup' asChild>
                    <Text style={styles.forgotText}>Esqueci a senha.</Text>
                </Link>
            </View>

            <Button buttonlink='/'/>

            <Link href="/signup" asChild>
                <Text style={styles.signupTxt}>Cadastre aqui.</Text>
            </Link>



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
  signupTxt:{
    fontSize: 16,
    textDecorationLine: 'underline'
  }
})

export default Login;