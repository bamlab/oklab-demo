import { interpolateColor } from '@bam.tech/teinte';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { GradientParams } from '../domain/GradientParams';
import { RgbColor } from '../domain/RgbColor';
import { GradientBarSlice } from './GradientBarSlice';

type Props = {
  c1: RgbColor;
  c2: RgbColor;
  gradientParams: GradientParams;
};

const NUMBER_OF_BARS = 100;

const GradientBarMemo = ({ c1, c2, gradientParams }: Props) => (
  <View style={styles.container}>
    {Array.from({ length: NUMBER_OF_BARS }, (_, index) => index).map(
      (position) => {
        const color = interpolateColor(
          c1,
          c2,
          position / NUMBER_OF_BARS,
          gradientParams.colorSpace,
          gradientParams.gamutMappingStrategy,
        );
        return <GradientBarSlice color={color} key={position} />;
      },
    )}
  </View>
);

export const GradientBar = memo(
  GradientBarMemo,
  (prevProps, nextProps) =>
    prevProps.c1 === nextProps.c1 && prevProps.c2 === nextProps.c2,
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
});
