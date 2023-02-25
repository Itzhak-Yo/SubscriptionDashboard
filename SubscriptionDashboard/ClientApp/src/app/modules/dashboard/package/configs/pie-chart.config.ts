import { PackageType } from '../../../../core/configs/package.config';

type PieChartConfig = {
  view: [number, number];
  isDoughnut: boolean;
  arcWidth: number;
  packageColorsByType: PackageTypeToColorMapper;
};

type BarChartCustomColors = [
  { name: 'Used'; value: string },
  { name: 'Remaining'; value: string }
];

type PackageTypeToColorMapper = {
  [type in PackageType]: BarChartCustomColors;
};

const PackageColorsByType: PackageTypeToColorMapper = {
  [PackageType.Personal]: [
    { name: 'Used', value: '#54B6FF' }, // Bright blue
    { name: 'Remaining', value: '#EEEEEE' }, // Bright gray
  ],
  [PackageType.Business]: [
    { name: 'Used', value: '#F0BA0F' }, // gold
    { name: 'Remaining', value: '#EEEEEE' }, // Bright gray
  ],
  [PackageType.Enterprise]: [
    { name: 'Used', value: '#8A0FF0' }, // purpule
    { name: 'Remaining', value: '#EEEEEE' }, // Bright gray
  ],
};

export const PIE_CHART_CONFIG: PieChartConfig = {
  view: [150, 150],
  isDoughnut: true,
  arcWidth: 0.4,
  packageColorsByType: PackageColorsByType,
};
