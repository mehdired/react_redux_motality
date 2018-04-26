import React from 'react'
import { ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'

const xTitle = 'Age'
const yTitle = '% Mortalité'

import Flag from './flags'

const MortalityListItem = () => {
  return (
    <div>
      <Flag country='France' className='flag-medium' />
      <ColumnChart xtitle={xTitle} ytitle={yTitle} data={[[12, 13],[14, 18],[39, 45],[17, 56],[37, 10]]} />
    </div>
  )
}

export default MortalityListItem