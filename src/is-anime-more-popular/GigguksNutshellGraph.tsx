
import getChartOptions from '../utils/getChartOptions'
import {
  RED_BACKGROUND,
  RED_LINE
} from '../utils/colors'
import JuicedLine from '../ui-blocks/JuicedLine'

const data = {
  labels: [
    '2017 Sp',
    '2017 Su',
    '2017 F',
    '2018 W',
    '2018 Sp',
    '2018 Su',
    '2018 F',
    '2019 Sp',
    '2019 Su',
    '2019 F',
    '2020 W',
    '2020 Sp',
    '2020 Su',
    '2020 F',
    '2021 W',
    '2021 Sp',
    '2021 Su',
    '2021 F',
    '2022 W',
    '2022 Sp',
    '2022 Su',
    '2022 F',
    '2023 W',
    '2023 Sp',
    '2023 Su',
    '2023 F',
    '2024 W',
    '2024 Sp',
    '2024 Su',
    '2024 F',
  ],
  datasets: [
    {
      label: 'Why am i doing this to myself 🐒',
      data: [
        2010335,
        1226967,
        2941615,
        3638321,
        2178831,
        1679811,
        3804180,
        2953065,
        3014193,
        2481500,
        2845639,
        2698308,
        2434877,
        2139135,
        3267444,
        2856277,
        2225455,
        2575229,
        2426949,
        3262161,
        2754730,
        2383899,
        2017962,
        2356582,
        2069908,
        2169882,
        1728271,
        1971093,
        1753096,
        1585874,
      ],
      borderColor: RED_LINE,
      backgroundColor: RED_BACKGROUND
    }
  ]
}

const options = getChartOptions('Gigguk\'s Nutshells in a Nutshell')

export default function GiggukNutshellGraph() {
  return <JuicedLine options={options} data={data} />
}
