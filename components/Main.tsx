import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  ColorPicker,
  TriangleColorPicker,
  fromHsv,
} from 'react-native-color-picker';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { GradientParams } from '../domain/GradientParams';
import { RED, BLUE, GREEN, RgbColor } from '../domain/RgbColor';
import { AddGradientBarButton } from './AddGradientBarButton';
import { GradientShowcase } from './GradientShowcase';

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
        <AddGradientBarButton
          onPress={() => {
            setGradientParamsList((currentList) => [
              ...currentList,
              {
                c1: startColor,
                c2: endColor,
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
    padding: 16,
    gap: 8,
  },
  colorPickersWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  scrollView: {
    padding: 16,
    gap: 16,
  },
});
