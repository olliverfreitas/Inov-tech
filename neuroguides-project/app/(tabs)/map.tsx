import {View, SafeAreaView, Text, Pressable, Image, StatusBar, StyleSheet} from 'react-native';
import Map, {Callout, Marker} from 'react-native-maps';

import {Tabs, Link} from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const coordinates = {
    latitude: -3.0969031,
    longitude: -60.0256756
}

export default function MapScreen(){
    return (
            <SafeAreaView style={styles.mapContainer}>

                <Tabs.Screen options={{
                    headerTitle: 'MAPA',
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF',
                    headerStyle: {backgroundColor: '#67D0A9'},
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

                    <Map style={StyleSheet.absoluteFill}
                        initialRegion={{
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005
                        }}>
                            <Marker coordinate={coordinates}
                            pinColor='#03BB85'>
                                <Callout style={styles.callout}>
                                    <View>
                                        <Text style={styles.markerTitle}>CUMETRO</Text>
                                        <Text style={styles.markerAdress}>Av. Constantino Nery, 3000 - Chapada, Manaus - AM, 69050-000</Text>
                                    </View>
                                </Callout>
                            </Marker>

                        </Map>

            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mapContainer:{
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    header:{
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    title:{
        fontWeight: 'bold',
        fontSize: 22,
        color: '#ffffff'
    },
    buttonTop:{
        width: 40,
        height: 40,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    callout:{
        padding: 12
    },
    markerTitle:{
        fontWeight: 'bold',
        fontSize: 18
    },
    markerAdress:{
        fontSize: 14
    }


})