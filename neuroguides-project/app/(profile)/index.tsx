import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
import {Link} from 'expo-router';

export default function ProfileScreen () {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://example.com/avatar.png' }} 
          style={styles.avatar}
        />
        <Text style={styles.name}>Julia Moraes</Text>
        <Text style={styles.pronouns}>ela/dela</Text>
        <Text style={styles.bio}>
          Olá, meu nome é Julia Moraes e sou apaixonada por tecnologia e esporte. 
          Descobri que tenho TDAH aos 12 anos, e desde então, tenho aprendido a lidar 
          com os desafios e a aproveitar os benefícios dessa condição...
        </Text>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="instagram" size={30} color="#E1306C" />
        </TouchableOpacity>
        <TouchableOpacity>
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
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  }
});