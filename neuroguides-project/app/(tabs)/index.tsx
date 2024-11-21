import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, TextInput, Button } from 'react-native';
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

  const [newUser, setNewUser] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const handleAddPost = () => {
    if (newUser && newMessage) {
      const newPost: Post = {
        id: (posts.length + 1).toString(),
        user: newUser,
        message: newMessage,
      };
      setPosts([newPost, ...posts]);
      setNewUser('');
      setNewMessage('');
    }
  };

  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <Text style={styles.user}>{item.user}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Tabs.Screen
        options={{
          headerTitle: () => (
            <View style={styles.header}>
              <Text style={styles.headerTitle}>PÁGINA INICIAL</Text>
            </View>
          ),
          headerStyle: { backgroundColor: '#bf911b' },
        }}
      />

      
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={newUser}
          onChangeText={setNewUser}
        />
        <TextInput
          style={styles.input}
          placeholder="Sua mensagem"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <Button title="Postar" onPress={handleAddPost} />
      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
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
  form: {
    width: '100%',
    marginBottom: 1,
    position:'static'

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  listContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  postContainer: {
    backgroundColor: '#E3F2FD',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    position:'static'
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
