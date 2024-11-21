import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity, View, TextInput } from 'react-native';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';


type Professional = {
    id: string;
    name: string;
    specialization: string;
    location: string;
    certified: boolean;
    featured: boolean;
};

const professionals: Professional[] = [
    { id: '1', name: 'Dr. Robert Carlinhos', specialization: ' Psiquiatra', location: 'Manaus', certified: true, featured: true },
    { id: '2', name: 'Dra. Júlia Gomes', specialization: ' Neurologista', location: 'Manaus/São Paulo', certified: true, featured: false },
    { id: '3', name: 'Dra. Katarina Coute', specialization: ' Psicóloga', location: 'Noxus/Manaus', certified: true, featured: false },
    { id: '4', name: 'Dr. Math Demetrius', specialization: ' Terapeuta Ocupacional', location: 'Manaus', certified: true, featured: false },
];


const filters = ["Tudo", "Autismo", "TDAH", "Tourette", "Epilepsia", "Dislexia", "Disgrafia"];

export default function Professionals() {
    const [search, setSearch] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('Tudo');

    const renderProfessional = ({ item }: { item: Professional }) => (
        <View style={styles.professionalCard}>
            <View style={styles.professionalHeader}>
                <Text style={styles.professionalName}>{item.name}</Text>
                <View style={styles.stars}>
                    {[...Array(5)].map((_, index) => (
                        <FontAwesome key={index} name="star" size={16} color="#FFD700" />
                    ))}
                </View>
            </View>
            <Text style={styles.professionalLocation}>
                <FontAwesome name="map-marker" size={16} color="#555" /> {item.location}
            </Text>
            <Text style={styles.professionalSpecialization}>
            <FontAwesome name="user-md" size={16} color="#555" />
                    {item.specialization}
            </Text>
            {item.certified && (
                <Text style={styles.certified}>
                    <FontAwesome name="check-circle" size={16} color="#555" /> Certificado
                </Text>
            )}
            {item.featured && (
                <Text style={styles.featured}>DESTAQUE</Text>
            )}
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Tabs.Screen options={{
                headerTitle: () => (
                    <View style={styles.header}>
                        
                        <Text style={styles.headerTitle}>PROFISSIONAIS</Text>
                    </View>
                ),
                headerStyle: { backgroundColor: '#5D9CEC' },
            }} />

            <View style={styles.searchContainer}>
                <MaterialIcons name="search" size={24} color="#5D9CEC" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar..."
                    value={search}
                    onChangeText={setSearch}
                />
                <TouchableOpacity style={styles.filterButton}>
                    <FontAwesome name="filter" size={24} color="#5D9CEC" />
                </TouchableOpacity>
            </View>

           
            <View style={styles.filterContainer}>
                {filters.map(filter => (
                    <TouchableOpacity
                        key={filter}
                        style={[styles.filterButton, selectedFilter === filter && styles.selectedFilter]}
                        onPress={() => setSelectedFilter(filter)}
                    >
                        <Text style={styles.filterText}>{filter}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.infoText}>
                Está buscando profissionais para ajudar com seu problema? Queremos ajudá-lo!
            </Text>
            
            <FlatList
                data={professionals}
                renderItem={renderProfessional}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F1F1',
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 8,
        width: '90%',
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
    },
    filterButton: {
        padding: 8,
    },
    filterContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 10,
    },
    selectedFilter: {
        backgroundColor: '#AAAA',
        borderRadius: 20,
    },
    filterText: {
        fontSize: 14,
        color: '#5D9CEC',
        marginHorizontal: 8,
    },
    infoText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginVertical: 10,
    },
    listContainer: {
        width: '90%',
    },
    professionalCard: {
        backgroundColor: '#E3F2FD',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    professionalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    professionalName: {
        fontSize: 18,
        fontWeight: '600',
    },
    stars: {
        flexDirection: 'row',
    },
    professionalLocation: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
    professionalSpecialization:{
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
    certified: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
    featured: {
        backgroundColor: '#5D9CEC',
        color: '#FFFFFF',
        padding: 4,
        borderRadius: 4,
        textAlign: 'center',
        marginTop: 8,
    },
});
