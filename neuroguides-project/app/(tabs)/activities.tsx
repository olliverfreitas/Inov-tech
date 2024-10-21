import { SafeAreaView, Text, StyleSheet } from 'react-native';

import {Tabs, Link} from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Activities(){
    return (
        <SafeAreaView style={styles.container}>

            <Tabs.Screen options={{
                headerTitle: 'ATIVIDADES',
                headerTitleAlign: 'center',
                headerTintColor: '#FFFFFF',
                headerStyle: {backgroundColor: '#FDCB76'},
                headerLeft: ()=> (
                    <Link href="/" asChild>
                        <FontAwesome size={30} name="commenting-o" color="#FFFFFF" style={{marginLeft: 20}} />
                    </Link>
                ),
                headerRight: ()=> (
                    <Link href="/" asChild>
                        <FontAwesome size={30} name="user-o" color="#FFFFFF" style={{marginRight: 20}} />
                    </Link>
                )
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