import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../colors';
import { RgbColor } from '../domain/RgbColor';
import { toHexString } from '../utils/colorConversions';

type Props = {
  color: RgbColor;
  onPress: () => void;
};

export const PickColorButton = ({ color, onPress }: Props) => (
  <TouchableOpacity
    onPress={() => {
      console.log('PickColorButton.onPress');
      onPress();
    }}
    style={[styles.container, { backgroundColor: toHexString(color) }]}
  >
    <Text style={styles.label}>🎨</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
  },
  label: {
    color: colors.addButtonLabelColor,
  },
});
