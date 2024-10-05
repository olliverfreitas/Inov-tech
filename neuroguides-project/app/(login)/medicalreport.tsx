import {View, SafeAreaView, Image, Text, StyleSheet, Pressable, StatusBar} from 'react-native';
import {Button} from '../../components/button';

const MedicalReport=()=> {

  function uploadImage(){
    alert('Em construção...')
  }

  return (
    <View style={styles.window}>
      <SafeAreaView style={styles.container}>

      <Image
      source={require('../assets/bgng.jpg')}
      resizeMode='cover'
      style={styles.bgngImg} />

        <View style={styles.documentContainer}>
          
          <View style={styles.textArea}>
            <Text style={styles.infoText}>Por favor, caro paciente/profissional, faça o upload do seu laudo ou certificado.</Text>
          </View>

          <Pressable style={styles.uploadButton} onPress={uploadImage}>
            <View>
              <Text>Arquivo em PDF</Text>
              <Text style={styles.upTtile}>Arquivo...</Text>
            </View>
            <Image 
            source={require('../assets/folder-icon.png')}
            resizeMode='cover'
            style={styles.folderImg} />
          </Pressable>

          <Button buttonlink='/'/>

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
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgngImg:{
    position: 'absolute'
  },
  documentContainer:{
     width: 300,
    height: 400,
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
  textArea:{
    width: 260,
    height: 70,
    marginBottom: 20,
    padding: 5
  },
  infoText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 600
  },
  uploadButton:{
    height: 60,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EADDFF',
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#666666'
  },
  upTtile:{
    fontSize: 17,
    fontWeight: 600
  },
  folderImg:{
    height: 40,
    width: 40
  }
})

export default MedicalReport;