import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { ColorSpace, colorSpaces } from '../domain/ColorSpace';
import {
  GamutMappingStrategy,
  gamutMappingStrategies,
} from '../domain/GamutMappingStrategy';
import { GradientParams } from '../domain/GradientParams';
import { BLUE, RED, RgbColor } from '../domain/RgbColor';
import { AddGradientBarButton } from './AddGradientBarButton';
import { ColorPicker } from './ColorPicker';
import { GradientShowcase } from './GradientShowcase';
import { Picker } from './Picker';

export const Main = () => {
  const { top } = useSafeAreaInsets();
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
  const [startColor, setStartColor] = useState<RgbColor>(RED);
  const [endColor, setEndColor] = useState<RgbColor>(BLUE);
  const [colorSpace, setColorSpace] = useState<ColorSpace>('rgb');
  const [gamutMappingStrategy, setGamutMappingStrategy] =
    useState<GamutMappingStrategy>('clamp');

  console.log({ startColor, endColor, colorSpace, gamutMappingStrategy });

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <StatusBar style="auto" />
      <View style={[styles.header, { paddingTop: top }]}>
        <View style={styles.colorPickersWrapper}>
          <ColorPicker
            selectedColor={startColor}
            onColorSelected={setStartColor}
          />
          <ColorPicker selectedColor={endColor} onColorSelected={setEndColor} />
        </View>
        <Picker
          items={colorSpaces}
          selectedItem={colorSpace}
          onItemSelected={setColorSpace}
        />
        <Picker
          items={gamutMappingStrategies}
          selectedItem={gamutMappingStrategy}
          onItemSelected={setGamutMappingStrategy}
        />
        <AddGradientBarButton
          onPress={() => {
            setGradientParamsList((currentList) => [
              ...currentList,
              {
                c1: startColor,
                c2: endColor,
                colorSpace,
                gamutMappingStrategy,
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    paddingVertical: 16,
    gap: 12,
  },
  colorPickersWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
  },
  scrollView: {
    padding: 16,
    gap: 16,
  },
});
