import { View, StyleSheet } from 'react-native';
import { RgbColor } from '../domain/RgbColor';
import { GradientBarSlice } from './GradientBarSlice';
import { ColorSpace } from '../domain/ColorSpace';
import { interpolateColor } from '@bam.tech/teinte';
import { GamutMappingStrategy } from '../domain/GamutMappingStrategy';
import { GradientParams } from '../domain/GradientParams';

type Props = {
  gradientParams: GradientParams;
};

const NUMBER_OF_BARS = 100;

export const GradientBar = ({ gradientParams }: Props) => (
  <View style={styles.container}>
    {Array.from({ length: NUMBER_OF_BARS }, (_, index) => index).map(
      (position) => {
        const color = interpolateColor(
          gradientParams.c1,
          gradientParams.c2,
          position / NUMBER_OF_BARS,
          gradientParams.colorSpace,
          gradientParams.gamutMappingStrategy,
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
