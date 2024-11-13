import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Tabs.Screen options={{
                headerTitle: () => (
                    <View style={styles.header}>
                        <FontAwesome name="home" size={24} color="#FFFFFF" />
                        <Text style={styles.headerTitle}>PÁGINA INICIAL</Text>
                    </View>
                ),
                headerStyle: { backgroundColor: '#FF69B4' },
            }} />

            {/* Ícone e texto de boas-vindas */}
            <FontAwesome name="smile-o" size={50} color="#FF69B4" style={styles.welcomeIcon} />
            <Text style={styles.title}>ESSA É A PÁGINA INICIAL</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        marginLeft: 8,
    },
    welcomeIcon: {
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FF69B4',
    },
});
