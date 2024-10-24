import {View, SafeAreaView, Text, Pressable, Image, StatusBar, StyleSheet} from 'react-native';
import Map, {Callout, Marker} from 'react-native-maps';

import { Tabs } from 'expo-router';

const coordinates = {
    latitude: -3.0969031,
    longitude: -60.0256756
}

export default function MapScreen(){
    return (
            <SafeAreaView style={styles.mapContainer}>

                <Tabs.Screen options={{
                    headerTitle: 'MAPA',
                    headerStyle: {backgroundColor: '#67D0A9'}
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