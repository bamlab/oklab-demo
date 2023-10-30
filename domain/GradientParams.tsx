import { ColorSpace } from './ColorSpace';
import { GamutMappingStrategy } from './GamutMappingStrategy';
import { RgbColor } from './RgbColor';

export type GradientParams = {
  c1: RgbColor;
  c2: RgbColor;
  colorSpace: ColorSpace;
  gamutMappingStrategy: GamutMappingStrategy;
};
