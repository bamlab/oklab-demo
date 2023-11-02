import { interpolateColor } from '@bam.tech/teinte';
import { StyleSheet, View } from 'react-native';
import { GradientParams } from '../domain/GradientParams';
import { GradientBarSlice } from './GradientBarSlice';

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
