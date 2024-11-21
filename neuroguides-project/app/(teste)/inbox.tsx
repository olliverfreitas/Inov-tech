import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

// Definição do tipo dos itens na lista
type Message = {
  id: string;
  name: string;
  message: string;
  time: string;
  status: 'unread' | 'delivered' | 'sent' | 'read';
};

// Dados da lista
const professionals: Message[] = [
  {
    id: '1',
    name: 'Dr. Robert Carlinhos',
    message: 'Bom dia campeão, como vai sua força hoje??',
    time: '08:12',
    status: 'unread',
  },
  {
    id: '2',
    name: 'Dra. Júlia Gomes',
    message: 'Meu filho tem que seguir essas ins..',
    time: 'ontem - 20:32',
    status: 'delivered',
  },
];

const friends: Message[] = [
  {
    id: '1',
    name: 'Arnold da Silva Pereira',
    message: 'Como foi lá na consulta ontem? você..',
    time: '08:17',
    status: 'sent',
  },
  {
    id: '2',
    name: 'Larissa Clara',
    message: 'Espero que vc melhore dessa situação c..',
    time: 'ontem - 13:53',
    status: 'read',
  },
];

// Função principal
const App = () => {
  
    
  

  const renderItem = ({ item }: { item: Message }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <View style={styles.footer}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.status}>{getStatusIcon(item.status)}</Text>
      </View>
    </View>
  );

  const getStatusIcon = (status: Message['status']) => {
    switch (status) {
      case 'unread':
        return '🔴';
      case 'delivered':
        return '✔️';
      case 'sent':
        return '✔️';
      case 'read':
        return '✔️✔️';
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Barra Superior */}
      <View style={styles.header}>
        
        <Text style={styles.headerTitle}>Mensagens</Text>
      </View>

      {/* Lista de Profissionais */}
      <Text style={styles.sectionTitle}>MEUS PROFISSIONAIS</Text>
      <View style={[styles.section, { backgroundColor: '#E0F7FA' }]}>
        <FlatList
          data={professionals}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* Lista de Amigos */}
      <Text style={styles.sectionTitle}>MEUS AMIGOS</Text>
      <View style={[styles.section, { backgroundColor: '#FFF3E0' }]}>
        <FlatList
          data={friends}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    height: 65,
    backgroundColor: '#bf911b',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 150,
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    marginHorizontal: 12,
  },
  section: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 12,
  },
  messageContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  status: {
    fontSize: 12,
    color: '#888',
  },
});

export default App;
