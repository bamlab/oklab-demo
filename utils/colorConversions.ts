import { RgbColor } from '../domain/RgbColor';

export const toRgbString = (color: RgbColor) =>
  `rgb(${color.r},${color.g},${color.b})`;

export const toHexString = (rgbColor: RgbColor) => {
  const toHex = (c: number) => {
    const hex = Math.max(0, Math.min(255, c)).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(rgbColor.r)}${toHex(rgbColor.g)}${toHex(
    rgbColor.b,
  )}`.toUpperCase();
};

export const fromHexString = (hexString: string): RgbColor => {
  let hex = hexString.replace(/^#/, '');

  // Parse the r, g, b values
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
};
