import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientShowcase } from './components/GradientShowcase';
import { BLUE, GREEN, RED } from './domain/RgbColor';
import { AddGradientBarButton } from './components/AddGradientBarButton';
import { useState } from 'react';
import { GradientParams } from './domain/GradientParams';

export default function App() {
  const [gradientParamsList, setGradientParamsList] = useState<
    GradientParams[]
  >([
    {
      c1: RED,
      c2: BLUE,
      colorSpace: 'oklab',
      gamutMappingStrategy: 'adaptativeL05-005',
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <AddGradientBarButton
          onPress={() => {
            setGradientParamsList((currentList) => [
              ...currentList,
              {
                c1: RED,
                c2: GREEN,
                colorSpace: 'oklab',
                gamutMappingStrategy: 'adaptativeL05-005',
              },
            ]);
          }}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {gradientParamsList.map((gradientParams, index) => (
          <GradientShowcase
            gradientParams={gradientParams}
            onRemovePress={() => {
              setGradientParamsList((currentList) => {
                const newList = currentList.slice();
                newList.splice(index, 1);
                return newList;
              });
            }}
            key={index}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
  },
  scrollView: {
    padding: 16,
    gap: 16,
  },
});
