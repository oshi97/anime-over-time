import cloneDeep from 'lodash/cloneDeep'
import type { ChartOptions, AnimationSpec } from 'chart.js/auto'

const delayBetweenPoints = 2
const previousY = (ctx: any) =>
  ctx.index === 0
    ? ctx.chart.scales.y.getPixelForValue(100)
    : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true)
        .y
const animation = {
  x: {
    type: 'number',
    easing: 'easeInElastic',
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx: any) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0
      }
      ctx.xStarted = true
      return ctx.index * delayBetweenPoints
    }
  },
  y: {
    type: 'number',
    easing: 'easeInElastic',
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx: any) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0
      }
      ctx.yStarted = true
      return ctx.index * delayBetweenPoints
    }
  }
}

const transitions = {
  show: {
    animations: {
      x: {
        from: 0
      },
      y: {
        from: 0
      }
    }
  },
  hide: {
    animations: {
      x: {
        to: 100
      },
      y: {
        to: 100
      }
    }
  }
}

export const options: ChartOptions = {
  responsive: true,
  animation: animation as AnimationSpec<any>,
  transitions,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: '# of Seasonal Anime per Season'
    }
  }
}

export default function getChartOptions(titleText: string) {
  const o = cloneDeep(options)
  o.plugins.title.text = titleText
  return o
}
