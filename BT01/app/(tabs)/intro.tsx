import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function IntroScreen() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 10000);

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Welcome to My App!</ThemedText>
      <ThemedText style={styles.intro}>
        Hi, I'm Nguyen Huu loc!{'\n'}
        A student at HCMUTE{'\n'}
        This is my first app
      </ThemedText>
      <ActivityIndicator style={styles.loading} />
      <ThemedText style={styles.timer}>Redirecting in {timeLeft}s...</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  intro: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 28,
  },
  loading: {
    marginTop: 30,
  },
  timer: {
    marginTop: 10,
    opacity: 0.7,
  },
});