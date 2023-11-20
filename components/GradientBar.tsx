import { interpolateColor } from '@bam.tech/teinte';
import { isEqual } from 'lodash';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { GradientParams } from '../domain/GradientParams';
import { GradientBarSlice } from './GradientBarSlice';

type Props = {
  gradientParams: GradientParams;
};

const NUMBER_OF_BARS = 100;

const GradientBarMemo = ({ gradientParams }: Props) => (
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

export const GradientBar = memo(GradientBarMemo, isEqual);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
});
