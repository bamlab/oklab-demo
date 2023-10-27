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
    red: (c2.red - c1.red) * t + c1.red,
    green: (c2.green - c1.green) * t + c1.green,
    blue: (c2.blue - c1.blue) * t + c1.blue,
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
});
