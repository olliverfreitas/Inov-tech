import { SafeAreaView, Text, StyleSheet } from 'react-native';

import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Profesionals(){
    return (
        <SafeAreaView style={styles.container}>

            <Tabs.Screen options={{
                headerTitle: 'PROFISSIONAIS',
                headerStyle: {backgroundColor: '#5D9CEC'}
            }} />

            <Text style={styles.title}>ESSA É A PAGINA DE PROFISSIONAIS</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 26
    }
})