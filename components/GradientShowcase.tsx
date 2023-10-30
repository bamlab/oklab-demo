import { View, StyleSheet, Text } from 'react-native';
import { GradientBar } from './GradientBar';
import { BLUE, RED, RgbColor } from '../domain/RgbColor';
import { colorSpaces } from '../domain/ColorSpace';
import { GradientParams } from '../domain/GradientParams';

type Props = {
  gradientParams: GradientParams;
};

export const GradientShowcase = ({ gradientParams }: Props) => (
  <View style={styles.container}>
    <Text>{`${gradientParams.colorSpace} - ${gradientParams.gamutMappingStrategy}`}</Text>
    <GradientBar gradientParams={gradientParams} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
  },
});
