import { View, StyleSheet } from 'react-native';
import { GradientBar } from './GradientBar';
import { BLUE, RED } from '../domain/RgbColor';

export const GradientsShowcase = () => (
  <View style={styles.container}>
    <GradientBar c1={BLUE} c2={RED} colorSpace="rgb" />
    <GradientBar c1={BLUE} c2={RED} colorSpace="hsl" />
    <GradientBar c1={BLUE} c2={RED} colorSpace="oklab" />
    <GradientBar c1={BLUE} c2={RED} colorSpace="oklch" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
