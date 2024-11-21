import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome  from '@expo/vector-icons/FontAwesome';

type Post = {
  id: string;
  user: string;
  message: string;
};

export default function Home() {

  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const [posts, setPosts] = useState<Post[]>([
    { id: '1', user: 'Alice', message: 'Oi, pessoal! Tudo bem?' },
    { id: '2', user: 'Bob', message: 'Oi, Alice! Tudo ótimo por aqui!' },
    { id: '3', user: 'Carol', message: 'Alguém já leu o último artigo sobre TDAH?' },
    { id: '4', user: 'David', message: 'Sim! Achei muito interessante e útil.' },
  ]);

  const [newUser, setNewUser] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const handleShowForm = ()=>{
    setShowForm(true);
    setShowButton(false);
  }

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
      setShowForm(false);
      setShowButton(true);
    }
  };

  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <Text style={styles.user}>{item.user}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <View style={styles.postActions}>
          <MaterialIcons name="insert-comment" size={18} color="#A0A0A0"/>
          <FontAwesome name="thumbs-up" size={18} color="#A0A0A0" />
      </View>
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
          headerStyle: { backgroundColor: '#FF69B4' },
        }}
      />

      
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

        { showButton && (

        <TouchableOpacity style={styles.buttonForm} onPress={handleShowForm}>
          <MaterialIcons name="post-add" color="#FFFFFF" size={18} />
        </TouchableOpacity>

        )}

      { showForm && (

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
      <TouchableOpacity onPress={handleAddPost} style={styles.buttonAddPost}>
        <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>Postar</Text>
      </TouchableOpacity>
      </View>


      )
      }
      
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
  buttonForm: {
    backgroundColor: '#FF69B4',
    width: 50,
    height: 50,
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    bottom: 20,
    right: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  buttonAddPost:{
    width: '100%',
    height: 40,
    backgroundColor: '#FF69B4',
    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  postContainer: {
    backgroundColor: '#E3F2FD',
    padding: 20,
    position:'static',
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    height: 95,
    width: '100%'
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
  postActions:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    margin: 'auto',
    marginTop: 8,
    height: 20
  }
});
