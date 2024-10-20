import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Home(){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>ESSA É A PAGINA INICIAL</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width: '100%',
        backgroundColor: '#FF69B4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 26
    }
})