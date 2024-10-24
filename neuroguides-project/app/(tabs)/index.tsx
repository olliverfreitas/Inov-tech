import { SafeAreaView, Text, StyleSheet} from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Home(){
    return (
        <SafeAreaView style={styles.container}>

            <Tabs.Screen options={{
                headerTitle: 'PÁGINA INICIAL',
                headerStyle: {backgroundColor: '#FF69B4'}
            }} />

            <Text style={styles.title}>ESSA É A PAGINA INICIAL</Text>
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