import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../colors';
import { GradientParams } from '../domain/GradientParams';
import { GradientBar } from './GradientBar';

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
    backgroundColor: colors.removeButtonBackgroundColor,
  },
  removeButtonLabel: {
    color: colors.removeButtonLabelColor,
    fontWeight: '600',
  },
});
