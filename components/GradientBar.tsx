import { View, StyleSheet } from 'react-native';
import { RgbColor } from '../domain/RgbColor';
import { GradientBarSlice } from './GradientBarSlice';
import { ColorSpace } from '../domain/ColorSpace';

type Props = {
  c1: RgbColor;
  c2: RgbColor;
  colorSpace: ColorSpace;
};

const NUMBER_OF_BARS = 100;

export const GradientBar = ({ c1, c2, colorSpace }: Props) => (
  <View style={styles.container}>
    {Array.from({ length: NUMBER_OF_BARS }, (_, index) => index).map(
      (position) => {
        const color = interpolateColorSimple(c1, c2, position / NUMBER_OF_BARS);
        return <GradientBarSlice color={color} />;
      },
    )}
  </View>
);

const interpolateColorSimple = (
  c1: RgbColor,
  c2: RgbColor,
  t: number,
): RgbColor => {
  return {
    r: (c2.r - c1.r) * t + c1.r,
    g: (c2.g - c1.g) * t + c1.g,
    b: (c2.b - c1.b) * t + c1.b,
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
});
