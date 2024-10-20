import {SafeAreaView, Text, StyleSheet} from 'react-native';

export default function App(){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>OLA, KELSIS</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 22
    }
})