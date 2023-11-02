import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
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

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <StatusBar style="auto" />
      <View style={[styles.header, { paddingTop: top }]}>
        <View style={styles.colorPickersWrapper}>
          <TriangleColorPicker
            onColorChange={(color) =>
              setStartColor(fromHexString(fromHsv(color)))
            }
            defaultColor={toRgbString(startColor)}
            style={{ flex: 1, aspectRatio: 1 }}
          />
          <TriangleColorPicker
            onColorChange={(color) =>
              setEndColor(fromHexString(fromHsv(color)))
            }
            defaultColor={toRgbString(endColor)}
            style={{ flex: 1, aspectRatio: 1 }}
          />
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

const toRgbString = (color: RgbColor) =>
  `rgb(${color.r},${color.g},${color.b})`;

const fromHexString = (hexString: string): RgbColor => {
  let hex = hexString.replace(/^#/, '');

  // Parse the r, g, b values
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
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
