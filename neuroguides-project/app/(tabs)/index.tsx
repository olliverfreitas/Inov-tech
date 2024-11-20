import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

type Post = {
  id: string;
  user: string;
  message: string;
};

export default function Home() {
  
  const [posts, setPosts] = useState<Post[]>([
    { id: '1', user: 'Alice', message: 'Oi, pessoal! Tudo bem?' },
    { id: '2', user: 'Bob', message: 'Oi, Alice! Tudo ótimo por aqui!' },
    { id: '3', user: 'Carol', message: 'Alguém já leu o último artigo sobre TDAH?' },
    { id: '4', user: 'David', message: 'Sim! Achei muito interessante e útil.' },
  ]);



  
  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <Text style={styles.user}>{item.user}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

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

      <Text style={styles.title}>Bem vindo de volta!</Text>

      <FlatList
        data={posts}
        renderItem={renderPost}
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
    backgroundColor: '#f3f5f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3268a8',
    marginBottom: 20,
  },
  listContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  postContainer: {
    backgroundColor: '#E3F2FD',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5D9CEC',
  },
  message: {
    fontSize: 16,
    color: '#555',
  },
});
