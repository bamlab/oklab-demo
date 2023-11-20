import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../colors';
import { ColorSpace } from '../domain/ColorSpace';
import { GradientParams } from '../domain/GradientParams';
import { RgbColor } from '../domain/RgbColor';
import { GradientBar } from './GradientBar';

type Props = {
  c1: RgbColor;
  c2: RgbColor;
  gradientParams: GradientParams;
  onRemovePress: () => void;
};

export const GradientShowcase = ({
  c1,
  c2,
  gradientParams,
  onRemovePress,
}: Props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>
        {`${gradientParams.colorSpace}`}
        {shouldShowGamutMappingMethod(gradientParams.colorSpace) ? (
          <Text>{` - ${gradientParams.gamutMappingStrategy}`}</Text>
        ) : null}
      </Text>
      <TouchableOpacity onPress={onRemovePress} style={styles.removeButton}>
        <Text style={styles.removeButtonLabel}>Remove</Text>
      </TouchableOpacity>
    </View>
    <GradientBar c1={c1} c2={c2} gradientParams={gradientParams} />
  </View>
);

const shouldShowGamutMappingMethod = (colorSpace: ColorSpace) =>
  colorSpace === 'oklab' || colorSpace === 'oklch';

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
