export const PIE_CHART_CONFIG: PieChartConfig = {
  view: [150, 150],
  isDoughnut: true,
  arcWidth: 0.4,
  barChartcustomColors: [
    { name: 'Used', value: '#54B6FF' }, // Bright blue
    { name: 'Remaining', value: '#EEEEEE' }, // Bright gray
  ],
};

type PieChartConfig = {
  view: [number, number];
  isDoughnut: boolean;
  arcWidth: number;
  barChartcustomColors: { name: string; value: string }[];
};
