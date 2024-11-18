import React from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';

type Item = {
    id: string;
    name: string;
    time: string;
    message: string;
    status: string;
}

const professionals = [
  {
    id: '1',
    name: 'Dr. Robert Carlinhos',
    message: 'Bom dia campeão, como vai sua força hoje??',
    time: '08:12',
    status: 'unread'
  },
  {
    id: '2',
    name: 'Dra. Júlia Gomes',
    message: 'Meu filho tem que seguir essas ins..',
    time: 'ontem - 20:32',
    status: 'delivered'
  }
];

const friends = [
  {
    id: '1',
    name: 'Arnold da Silva Pereira',
    message: 'Como foi lá na consulta ontem? você..',
    time: '08:17',
    status: 'sent'
  },
  {
    id: '2',
    name: 'Larissa Clara',
    message: 'Espero que vc melhore dessa situação c..',
    time: 'ontem - 13:53',
    status: 'read'
  }
];

export default function Chats(){
  const renderItem = ({ item }: {item: Item}) => (
    <View style={styles.messageContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <View style={styles.footer}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.status}>{getStatusIcon(item.status)}</Text>
      </View>
    </View>
  );

  const getStatusIcon = (status:string) => {
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
      <Text style={styles.sectionTitle}>MEUS PROFISSIONAIS</Text>
      <View style={[styles.section, { backgroundColor: '#E0F7FA' }]}>
        <FlatList
          data={professionals}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
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
    padding: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8
  },
  section: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 16
  },
  messageContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  time: {
    fontSize: 12,
    color: '#888'
  },
  status: {
    fontSize: 12,
    color: '#888'
  }
});