import { Line } from 'react-chartjs-2'
import { useContext } from 'react'
import { MovingAverageContext } from '../context/MovingAverageContext';
import { cloneDeep } from 'lodash';
import type { ChartOptions } from 'chart.js/auto'

const WINDOW_SIZE = 4

function calculateSMA(data: number[]) {
  const movingAverage = [data[0]];

  for (let i = 1; i < data.length; i++) {
    const windowSize = i > WINDOW_SIZE ? WINDOW_SIZE : i
    const window = data.slice(i - windowSize, i);
    const sum = window.reduce((acc, val) => acc + val, 0);
    movingAverage.push(sum / windowSize);
  }

  return movingAverage;
}

export default function JuicedLine(props: {
  options: ChartOptions<'line'>,
  data: {
    labels: string[],
    datasets: {
      label: string,
      data: number[],
      borderColor: string,
      backgroundColor: string
    }[]
  }
}) {
  const useMovingAverage = useContext(MovingAverageContext).useMovingAverage 
  if (!useMovingAverage) {
    return <Line {...props}/>
  }
  const data = cloneDeep(props.data)
  for (const d of data.datasets) {
    // I only use number[], no Point obj
    d.data = calculateSMA(d.data as number[])
  }

  return <Line {...props} data={data}/>
}