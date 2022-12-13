import { useState } from 'react'

import GridLayout from 'react-grid-layout'

const generateRandomLayout = ({ props }) => {
  return Array(20)
    .fill('')
    .map((item, index) => {
      const baseYValue = Math.ceil(Math.random() * 4) + 1
      const y = Math.floor(index / 6) * baseYValue
      const x = (index * 2) % 12
      const w = 2
      const h = baseYValue
      const i = index.toString()

      return {
        x,
        y,
        w,
        h,
        i,
      }
    })
}

const DashboardBuilder = () => {
  const [layout, setLayout] = useState()

  const onLayoutChange = (layout) => {
    setLayout(layout)
  }

  return (
    <GridLayout layout={layout} onLayoutChange={onLayoutChange}></GridLayout>
  )
}

export default DashboardBuilder
