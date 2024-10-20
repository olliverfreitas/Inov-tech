import {View, SafeAreaView, Image, StyleSheet, Pressable, Text, TextInput, StatusBar} from 'react-native';
import {useState} from 'react';
import {Link} from 'expo-router';
import {Input} from '../../components/input';

export default function Login(){

    const [inputText, setInputText] = useState("");

  return (
    
      <SafeAreaView style={styles.container}>

      <Image source={require('../../assets/bgng.jpg')}
      resizeMode='cover'
      style={styles.backgroundImage}
      />

        <View style={styles.loginContainer}>
            <Image
            source={require('../../assets/neuroguides-logo.jpg')} 
            resizeMode='cover'
            style={styles.ngLogo}
            /> 
            <Text style={styles.welcomeText}>Bem-vindo ao Neuroguides.</Text>
          
            <Input inputname="Entrar:"/>
            <Input inputname="Senha:"/>

            <View style={styles.forgotTextBox}>
                <Link href='/' asChild>
                    <Text style={styles.forgotText}>Esqueci a senha.</Text>
                </Link>
            </View>

            <Link href='/(tabs)' asChild>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Entrar</Text> 
                </Pressable>
            </Link>

            <Link href='/signup' asChild>
                    <Text style={styles.signupTxt}>Cadastre-se aqui.</Text>
                </Link>

        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
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
    marginBottom: 20
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
    fontSize: 18,
    textDecorationLine: 'underline',
    color: '#0047AB'
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