import { SafeAreaView, View, Text, TouchableOpacity, Pressable, StyleSheet, Image } from 'react-native';

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

            <TouchableOpacity style={[styles.topButton, {backgroundColor: '#FFFFFF'}]}>
                <Text style={[styles.buttonText, {color:'#000000'}]}>ARTES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.topButton, {backgroundColor: '#FF99C2'}]}>
                <Text style={[styles.buttonText, {color:'#000000'}]}>MÚSICAS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.topButton, {backgroundColor: '#67D0A9'}]}>
                <Text style={[styles.buttonText, {color:'#000000'}]}>ESPORTES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.topButton, {backgroundColor: '#FDCB76'}]}>
                <Text style={[styles.buttonText, {color:'#000000'}]}>AO AR LIVRE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.topButton, {backgroundColor: '#5D9CEC'}]}>
                <Text style={[styles.buttonText, {color:'#000000'}]}>TABULEIROS</Text>
            </TouchableOpacity>

      </View>

      <Text style={styles.subtitle}>Jogos Online</Text>
      <View style={styles.botButtonContainer}>
        
            <Pressable style={styles.botButton}>
              <Image
              source={{uri:'https://play-lh.googleusercontent.com/27O5tpaYE82W6m30rJ_MX3-UvshlDM6O8oXDxb6GseYW2T7P8UNT19727MGmz-0q3w=s48-rw'}} 
              style={styles.gameImg}/>
            </Pressable>

            <Pressable style={styles.botButton}>
              <Image
              source={{uri:'https://play-lh.googleusercontent.com/ffqvK6KOqwMsWfU7R_oyEpHKRtO7pl6r5NlQ7ystBZnSQqS8OU8UG9K0c2qF_mw2TA=s48-rw'}} 
              style={styles.gameImg}/>
            </Pressable>
            

        {/* <Button title="AutiSim"  />
        <Button title="BrainPop"  />
        <Button title="AutiSpark" /> */}
      </View>

      <Text style={styles.subtitle}>Outros</Text>
      <View style={styles.botButtonContainer}>
        

            <Pressable style={styles.botButton}>
              <Image
              source={{uri:'https://play-lh.googleusercontent.com/Q__AF7YSrfLM0PuW_Ul1LMDqsk8YboQCMaj7IgzRsbPsUGtZQH2IFxcx-mTbgdZlB_s=w240-h480-rw'}} 
              style={styles.gameImg}/>
            </Pressable>

            <Pressable style={styles.botButton}>
              <Image
              source={{uri:'https://play-lh.googleusercontent.com/9GZtZcK9RzgHpTk4YW0ODGPmDyYMH6SJ_qnziLbNX4ZfOQV7CKHRCRk7KieSQkN5TtIk=w240-h480-rw'}} 
              style={styles.gameImg}/>
            </Pressable>

            <Pressable style={styles.botButton}>
              <Image
              source={{uri:'https://play-lh.googleusercontent.com/M_ERFz7xRcuvuX1Mb2arsPoHH37HFS4M9cBDIoF7LO3M94Ff6BO8n45XPjqKATiTUtk=w240-h480-rw'}} 
              style={styles.gameImg}/>
            </Pressable>

            <Pressable style={styles.botButton}>
              <Image
              source={{uri:'https://play-lh.googleusercontent.com/_2t27Nwv0sJgq3XsUCP-haxf0C17xzIEVtO4Pfrp_cSJG-VJAWzIC0DAlVF2kEx8ol2M=s48-rw'}} 
              style={styles.gameImg}/>
            </Pressable>
            
        
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
        marginBottom: 10,
        padding:20
      },
      topButton:{
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
      },
      botButton:{
        width: 50,
        height: 50,
        marginLeft: 5,
        marginRight:5
      },
      gameImg:{
        height: '100%',
        width: '100%',
        borderRadius: 8
      }
})