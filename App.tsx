import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientShowcase } from './components/GradientShowcase';
import { BLUE, GREEN, RED } from './domain/RgbColor';
import { AddGradientBarButton } from './components/AddGradientBarButton';
import { useState } from 'react';
import { GradientParams } from './domain/GradientParams';
import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Main } from './components/Main';

export default function App() {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
}
