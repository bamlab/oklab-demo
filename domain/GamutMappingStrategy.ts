export const gamutMappingStrategies = [
  'clamp',
  'gray',
  'preserveChroma',
  'projectTo05',
  'projectToLCusp',
  'adaptativeL05-005',
  'adaptativeL05-05',
  'adaptativeL05-5',
  'adaptativeLcusp-005',
  'adaptativeLcusp-05',
  'adaptativeLcusp-5',
] as const;

export type GamutMappingStrategy = (typeof gamutMappingStrategies)[number];
