import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientsShowcase } from './components/GradientsShowcase';
import { BLUE, GREEN, RED } from './domain/RgbColor';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <Text style={styles.title}>Red to blue</Text>
        <GradientsShowcase c1={RED} c2={BLUE} />
        <Text style={styles.title}>Green to blue</Text>
        <GradientsShowcase c1={GREEN} c2={BLUE} />
        <Text style={styles.title}>Red to green</Text>
        <GradientsShowcase c1={RED} c2={GREEN} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingTop: 16,
    paddingHorizontal: 16,
    fontWeight: '700',
    fontSize: 18,
  },
});
