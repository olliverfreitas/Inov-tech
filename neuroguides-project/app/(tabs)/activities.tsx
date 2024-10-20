import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Activities(){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>ESSA É A PAGINA DE ATIVIDADES</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width: '100%',
        backgroundColor: '#FFFF99',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 26
    }
})