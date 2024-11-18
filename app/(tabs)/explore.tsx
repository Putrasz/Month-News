import { StyleSheet, Image, ScrollView, View, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header Image */}
        <Image
          source={{ uri: 'https://via.placeholder.com/300' }} // Replace with your app's image URL
          style={styles.headerImage}
          resizeMode="contain"
        />
        
        {/* Title */}
        <ThemedText style={styles.title}>Welcome to My App</ThemedText>

        {/* Description */}
        <ThemedText style={styles.description}>
          This app is designed to help you stay updated with the latest health news, 
          access helpful tools, and enjoy an intuitive experience with a user-friendly interface.
        </ThemedText>

        {/* Add more sections as needed */}
        <ThemedText style={styles.sectionTitle}>Features</ThemedText>
        <ThemedText style={styles.description}>
          - Stay informed with the latest health articles.{'\n'}
          - Easy-to-navigate tabs.{'\n'}
          - Personalized content tailored to your needs.
        </ThemedText>

        {/* Add an image or other visual elements */}
        <Image
          source={{ uri: 'https://via.placeholder.com/200' }} // Replace with another relevant image URL
          style={styles.featureImage}
          resizeMode="cover"
        />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 50 : 30, // Adjusts padding for safe areas
    backgroundColor: '#ffffff', // Background color of the screen
  },
  content: {
    padding: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  featureImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 15,
  },
});
