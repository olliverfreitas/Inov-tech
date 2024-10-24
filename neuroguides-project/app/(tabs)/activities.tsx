import { SafeAreaView, Text, StyleSheet } from 'react-native';

import {Tabs} from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Activities(){
    return (
        <SafeAreaView style={styles.container}>

            <Tabs.Screen options={{
                headerTitle: 'ATIVIDADES',
                headerStyle: {backgroundColor: '#FDCB76'}
            }} />

            <Text style={styles.title}>ESSA É A PAGINA DE ATIVIDADES</Text>
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