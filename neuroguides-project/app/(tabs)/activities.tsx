import { SafeAreaView, View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

import {Tabs} from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Activities(){

    return (
        <SafeAreaView style={styles.container}>


            <Tabs.Screen options={{
                headerTitle: 'ATIVIDADES',
                headerStyle: {backgroundColor: '#FDCB76'}
            }} />

      <Text style={styles.subtitle}>Categorias</Text>
      <View style={styles.topButtonContainer}>

            <TouchableOpacity style={[styles.button, {backgroundColor: '#FFFFFF'}]}>
                <Text style={[styles.buttonText, {color:'#000000'}]}>ARTES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor: '#FF99C2'}]}>
                <Text style={[styles.buttonText, {color:'#000000'}]}>MÚSICAS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor: '#67D0A9'}]}>
                <Text style={[styles.buttonText, {color:'#000000'}]}>ESPORTES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor: '#FDCB76'}]}>
                <Text style={[styles.buttonText, {color:'#000000'}]}>AO AR LIVRE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor: '#5D9CEC'}]}>
                <Text style={[styles.buttonText, {color:'#000000'}]}>TABULEIROS</Text>
            </TouchableOpacity>

      </View>

      <Text style={styles.subtitle}>Jogos Online</Text>
      <View style={styles.botButtonContainer}>
        <Button title="Minecraft" />
        <Button title="AutiSim"  />
        <Button title="BrainPop"  />
        <Button title="AutiSpark" />
      </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
      },
      subtitle: {
        fontSize: 20,
        marginBottom: 10
      },
      topButtonContainer: {
        marginBottom: 20,
        padding:20
      },
      button:{
        width: 300,
        height: 50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
        marginBottom: 10
      },
      buttonText:{
        fontSize: 25,
        fontWeight: 'bold'
      },
      botButtonContainer:{
        flexDirection: 'row',
        padding:18 
      }
})