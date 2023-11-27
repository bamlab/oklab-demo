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

  // If the hex string is in 3-character format, convert it to 6-character format
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  // Parse the r, g, b values
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
};

export const isValidHexColor = (text: string): boolean =>
  /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(text);
