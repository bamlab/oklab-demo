import { View, StyleSheet } from 'react-native';
import { RgbColor } from '../domain/RgbColor';
import { GradientBarSlice } from './GradientBarSlice';
import { ColorSpace } from '../domain/ColorSpace';
// @ts-expect-error no types
import { interpolateColor } from '@bam.tech/teinte';

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
        const color = interpolateColor(
          c1,
          c2,
          position / NUMBER_OF_BARS,
          colorSpace,
        );
        return <GradientBarSlice color={color} key={position} />;
      },
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
});
