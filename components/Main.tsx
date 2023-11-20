import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { colors } from '../colors';
import { ColorSpace, colorSpaces } from '../domain/ColorSpace';
import {
  GamutMappingStrategy,
  gamutMappingStrategies,
} from '../domain/GamutMappingStrategy';
import { GradientParams } from '../domain/GradientParams';
import { BLUE, RED, RgbColor } from '../domain/RgbColor';
import { AddGradientBarButton } from './AddGradientBarButton';
import { ColorPicker } from './ColorPicker';
import { GradientScrollView } from './GradientScrollView';
import { Picker } from './Picker';

export const Main = () => {
  const { top } = useSafeAreaInsets();
  const [gradientParamsList, setGradientParamsList] = useState<
    GradientParams[]
  >([
    {
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
    <SafeAreaView style={styles.container} edges={[]}>
      <StatusBar style="auto" />
      <View style={[styles.header, { paddingTop: top }]}>
        <View style={styles.colorPickersWrapper}>
          <ColorPicker
            selectedColor={startColor}
            onColorSelected={setStartColor}
          />
          <ColorPicker selectedColor={endColor} onColorSelected={setEndColor} />
        </View>
        <View style={styles.pickersWrapper}>
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
        </View>
        <AddGradientBarButton
          onPress={() => {
            setGradientParamsList((currentList) => [
              ...currentList,
              {
                colorSpace,
                gamutMappingStrategy,
              },
            ]);
          }}
        />
      </View>
      <GradientScrollView
        c1={startColor}
        c2={endColor}
        gradientParamsList={gradientParamsList}
        setGradientParamsList={setGradientParamsList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  header: {
    backgroundColor: colors.headerBackgroundColor,
    paddingVertical: 16,
    gap: 8,
  },
  colorPickersWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
  },
  pickersWrapper: {
    paddingVertical: 8,
    gap: 8,
  },
});
