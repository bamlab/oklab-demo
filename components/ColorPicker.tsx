import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
import { RgbColor } from '../domain/RgbColor';

type Props = {
  selectedColor: RgbColor;
  onColorSelected: (color: RgbColor) => void;
};

export const ColorPicker = ({ selectedColor, onColorSelected }: Props) => (
  <TriangleColorPicker
    onColorChange={(color) => onColorSelected(fromHexString(fromHsv(color)))}
    defaultColor={toRgbString(selectedColor)}
    style={{ flex: 1, aspectRatio: 1 }}
  />
);

const toRgbString = (color: RgbColor) =>
  `rgb(${color.r},${color.g},${color.b})`;

const fromHexString = (hexString: string): RgbColor => {
  let hex = hexString.replace(/^#/, '');

  // Parse the r, g, b values
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
};
