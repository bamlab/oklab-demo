import { View, StyleSheet, Text } from 'react-native';
import { GradientBar } from './GradientBar';
import { BLUE, RED, RgbColor } from '../domain/RgbColor';
import { colorSpaces } from '../domain/ColorSpace';

type Props = {
  c1: RgbColor;
  c2: RgbColor;
};

export const GradientsShowcase = ({ c1, c2 }: Props) => (
  <View style={styles.container}>
    {colorSpaces.map((colorSpace) => (
      <View style={styles.barWrapper}>
        <Text>{colorSpace}</Text>
        <GradientBar c1={c1} c2={c2} colorSpace={colorSpace} key={colorSpace} />
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  barWrapper: {
    gap: 4,
  },
});
