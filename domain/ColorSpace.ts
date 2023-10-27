export const colorSpaces = ['rgb', 'hsl', 'oklab', 'oklch'] as const;

export type ColorSpace = (typeof colorSpaces)[number];
