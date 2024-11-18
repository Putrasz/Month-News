import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const data = [
  {
    id: '1',
    title: 'Card Title 1',
    description: 'This is a description for card 1.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    title: 'Card Title 2',
    description: 'This is a description for card 2.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    title: 'Card Title 2',
    description: 'This is a description for card 2.',
    image: 'https://via.placeholder.com/150',
  },
  // Add more items as needed
];

export default function Home() {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Link href={`./details/${item.id}`} style={styles.link}>
          View Details
        </Link>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>BERITA TERKINI </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87A2FF',
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10, // Adds space below the status bar
    marginBottom: 15,
  },
  list: {
    paddingVertical: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff7f4',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  link: {
    fontSize: 14,
    color: '#007bff',
  },
});
