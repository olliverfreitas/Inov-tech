import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Profesionals(){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>ESSA É A PAGINA DE PROFISSIONAIS</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width: '100%',
        backgroundColor: '#00FFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 26
    }
})