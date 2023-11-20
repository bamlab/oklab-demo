import { StyleSheet, Text, View } from 'react-native';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
import { colors } from '../colors';
import { RgbColor } from '../domain/RgbColor';

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

const toRgbString = (color: RgbColor) =>
  `rgb(${color.r},${color.g},${color.b})`;

const toHexString = (rgbColor: RgbColor) => {
  const toHex = (c: number) => {
    const hex = Math.max(0, Math.min(255, c)).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(rgbColor.r)}${toHex(rgbColor.g)}${toHex(
    rgbColor.b,
  )}`.toUpperCase();
};

const fromHexString = (hexString: string): RgbColor => {
  let hex = hexString.replace(/^#/, '');

  // Parse the r, g, b values
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
};

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
  },
  label: {
    color: colors.colorLabelColor,
    fontWeight: '500',
  },
});
