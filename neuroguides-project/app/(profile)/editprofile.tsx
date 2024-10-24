import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function EditProfileScreen () {

  return (
    <SafeAreaView style={styles.container}>
      

        <Text style={styles.name}>Julia Moraes</Text>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  }
 
});