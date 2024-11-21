import {View, SafeAreaView, Text, Image, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import {Link} from 'expo-router';

export default function ProfileImageScreen(){

  function profImg(){
    alert('Perfil em construção...')
  }
  function editImg(){
    alert('Editar perfil em construção...')
  }

  return (
    
      <SafeAreaView style={styles.container}>
        <Image
        source={require('../../assets/bgng.jpg')}
        resizeMode='cover'
        style={styles.bgngImg}
        />
        <View style={styles.profileContainer}>

          <Text style={styles.profileText}>Insira uma foto de perfil.</Text>

          <TouchableOpacity style={styles.profileImageArea} onPress={profImg}>

            <Image
            source={require('../../assets/user-2.png')} 
            style={styles.profileImg}
            />  
          
          </TouchableOpacity>

          <TouchableOpacity style={styles.editArea} onPress={editImg}>
           <Image
           source={require('../../assets/editprofile.png')} 
           resizeMode='cover'
           style={styles.editImg}
           />
          </TouchableOpacity>

          <View style={styles.loadCircle}></View>

          <Link href='/medicalreport' asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text> 
          </TouchableOpacity>
          </Link>
          
        </View>
        
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({

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
    marginBottom: 20
  },
  profileImageArea:{
    width: 150,
    height: 150,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    marginBottom: 20
  },
  profileImg:{
    width: 150, 
    height: 150
  },
  editArea:{
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 60,
    top: 200,
    padding: 5

  },
  editImg:{
    width: 60,
    height: 60
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
