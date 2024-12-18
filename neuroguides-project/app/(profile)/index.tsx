import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
import { Linking } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

type Query = {
  // ? para dizer que parametro é opcional
  userName?: string;
  userPronouns?: string;
  userBio?: string;
}

export default function ProfileScreen () {

  const {userName, userPronouns, userBio} = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      {/* Container de informações do perfil */}
      <View style={styles.profileContainer}>
        {/* Ícone de perfil */}
        <FontAwesome name="user-circle" size={100} color="#5D9CEC" style={styles.profileIcon} />
        
        <Image
          source={{ uri: 'https://example.com/avatar.png' }} 
          style={styles.avatar}
        />
        <Text style={styles.name}>{userName}</Text>
        <Text style={styles.pronouns}>{userPronouns}</Text>
        <Text style={styles.bio}>
          {userBio}
        </Text>
      </View>

      {/* Container de links sociais */}
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')}>
          <FontAwesome name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com')}>
          <FontAwesome name="instagram" size={30} color="#E1306C" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:julia@example.com')}>
          <FontAwesome name="envelope" size={30} color="#000" />
        </TouchableOpacity>
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
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  pronouns: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
    padding:30,
    paddingVertical:15,
    backgroundColor:'#edebe6',
    borderRadius:20,
    opacity:0.9,
    justifyContent:'center',
    alignContent:'center',
    verticalAlign:'auto',

  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  }
});
