import {View, SafeAreaView, Text, Image, StyleSheet, StatusBar, Pressable} from 'react-native';
import {Button} from '../components/button';

export default function App(){

  function profImg(){
    alert('Perfil em construção...')
  }
  function editImg(){
    alert('Editar perfil em construção...')
  }

  return (
    <View style={styles.window}>
      <SafeAreaView style={styles.container}>
        <Image
        source={require('../assets/bgng.jpg')}
        resizeMode='cover'
        style={styles.bgngImg}
        />
        <View style={styles.profileContainer}>

          <Text style={styles.profileText}>Insira uma foto de perfil.</Text>

          <Pressable style={styles.profileImageArea} onPress={profImg}>
            <Image 
            source={require('../assets/account-circle-2.png')}
            resizeMode='cover'
            style={styles.profileImg}
            />
          </Pressable>

          <Pressable style={styles.editArea} onPress={editImg}>
           <Image
           source={require('../assets/edit-icon-9.png')} 
           resizeMode='cover'
           style={styles.editImg}
           />
          </Pressable>

          <View style={styles.loadCircle}></View>

          <Button buttonlink='/medicalreport'/>
          
        </View>
        
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  window:{
    width: '100%',
    height: '100%',
    backgroundColor: '#ffff00'
  },
  container:{
    width: '100%',
    height: '100%',
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgngImg:{
    position: 'absolute'
  },
  profileContainer:{
    width: 300,
    height: 500,
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
  profileText:{
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 20
  },
  profileImageArea:{
    width: 150,
    height: 150,
    padding: 0,
    backgroundColor: '#EADDFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    marginBottom: 20
  },
  profileImg:{
    width: 200, 
    height: 200
  },
  editArea:{
    width: 50,
    height: 50,
    backgroundColor: '#BBBBBB',
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#E6ECE4',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 60,
    top: 200,
    padding: 5

  },
  editImg:{
    width: 40,
    height: 40
  },
  loadCircle:{
    width: 50,
    height: 50,
    borderWidth: 5,
    borderTopColor:'#A0A0A0',
    borderRightColor: '#A0A0A0',
    borderLeftColor: '#D3D3D3',
    borderBottomColor: '#D3D3D3',
    borderRadius: 25,
    marginBottom: 20
  }

  

})