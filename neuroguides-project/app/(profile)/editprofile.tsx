import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
import { Stack, router } from 'expo-router';
import { useState } from 'react';

export default function EditProfileScreen () {

  const [userName, setUserName] = useState("");
  const [userPronouns, setUserPronouns] = useState("");
  const [userBio, setUserBio] = useState("");

  function handleEditProfile(){

    // enviar parametros
    const params = new URLSearchParams();
    params.set('userName', userName);
    params.set('userPronouns', userPronouns);
    params.set('userBio', userBio);

    router.push(`/?${params.toString()}`)
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Container de informações do perfil */}

      <Stack.Screen options={{
        headerRight: ()=>(
          <TouchableOpacity onPress={handleEditProfile}>
            <FontAwesome size={20} name="check" color="#000000" />
          </TouchableOpacity>              
          
      )
      }}/>


      <View style={styles.profileContainer}>
        {/* Ícone de perfil */}
        <FontAwesome name="user-circle" size={100} color="#5D9CEC" style={styles.profileIcon} />
        
        <Image
          source={{ uri: 'https://example.com/avatar.png' }} 
          style={styles.avatar}
        />
        <TextInput style={styles.name}
          value={userName}
          onChangeText={text=>setUserName(text)}
          />
        <TextInput style={styles.pronouns}
          value={userPronouns}
          onChangeText={text=> setUserPronouns(text)}
          />
        <TextInput style={styles.bio}
          value={userBio}
          onChangeText={text=> setUserBio(text)}
          />
        

      </View>

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    marginBottom: 10,
    paddingTop:30
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 16,
    backgroundColor:'#FFE4E1',
    padding: 5,

    width: 250,
    height: 40,
    borderRadius: 10,
    marginBottom: 15,
    
    borderWidth: 1,
    borderColor: '#CCCCCC'
  },
  pronouns: {
    fontSize: 16,
    marginBottom: 15,
    borderRadius: 10,
    padding: 5,

    backgroundColor:'#F0FFF0',
    width: 250,
    height: 40,

    borderWidth: 1,
    borderColor: '#CCCCCC'
  },
  bio: {
    width: 250,
    height: 200,

    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    padding:30,
    paddingVertical:15,
    backgroundColor:'#fffff0',
    borderRadius:20,
    opacity:0.9,
    justifyContent:'center',
    alignContent:'center',
    verticalAlign:'auto',

    borderWidth: 1,
    borderColor: '#CCCCCC'
  }
});

