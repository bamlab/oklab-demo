import { StyleSheet, Text, View } from 'react-native';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
import { colors } from '../colors';
import { RgbColor } from '../domain/RgbColor';
import {
  fromHexString,
  toHexString,
  toRgbString,
} from '../utils/colorConversions';

type Props = {
  selectedColor: RgbColor;
  onColorSelected: (color: RgbColor) => void;
};

export const ColorPicker = ({ selectedColor, onColorSelected }: Props) => (
  <View style={styles.container}>
    <TriangleColorPicker
      onColorChange={(color) => onColorSelected(fromHexString(fromHsv(color)))}
      defaultColor={toRgbString(selectedColor)}
      style={styles.picker}
    />
    <Text style={styles.label}>{toHexString(selectedColor)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  picker: {
    flex: 1,
    aspectRatio: 1,
  },
  label: {
    color: colors.colorLabelColor,
    fontWeight: '500',
  },
});
