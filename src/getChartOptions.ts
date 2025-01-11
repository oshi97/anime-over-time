import cloneDeep from 'lodash/cloneDeep'

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '# of Seasonal Anime per Season',
    },
  },
};

export default function getChartOptions(titleText: string) {
  const o = cloneDeep(options)
  o.plugins.title.text = titleText
  return o;
}