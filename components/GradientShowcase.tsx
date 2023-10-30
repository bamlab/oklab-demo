import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { GradientBar } from './GradientBar';
import { BLUE, RED, RgbColor } from '../domain/RgbColor';
import { colorSpaces } from '../domain/ColorSpace';
import { GradientParams } from '../domain/GradientParams';

type Props = {
  gradientParams: GradientParams;
  onRemovePress: () => void;
};

export const GradientShowcase = ({ gradientParams, onRemovePress }: Props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>{`${gradientParams.colorSpace} - ${gradientParams.gamutMappingStrategy}`}</Text>
      <TouchableOpacity onPress={onRemovePress} style={styles.removeButton}>
        <Text style={styles.removeButtonLabel}>Remove</Text>
      </TouchableOpacity>
    </View>
    <GradientBar gradientParams={gradientParams} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  removeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: 'darkred',
  },
  removeButtonLabel: {
    color: 'white',
  },
});
