import { StyleSheet, ScrollView } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Welcome Back!</ThemedText>
        <ThemedText style={styles.content}>
          Welcome to the main page of the app!{'\n'}
          Here are some things you can do:
        </ThemedText>
        <ThemedView style={styles.cardContainer}>
          <ThemedView style={styles.card}>
            <ThemedText style={styles.cardTitle}>Profile</ThemedText>
            <ThemedText>View and edit your profile</ThemedText>
          </ThemedView>
          <ThemedView style={styles.card}>
            <ThemedText style={styles.cardTitle}>Settings</ThemedText>
            <ThemedText>Customize your app experience</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 30,
  },
  cardContainer: {
    gap: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
