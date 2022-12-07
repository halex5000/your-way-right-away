import { Card } from 'antd'
import Title from 'antd/es/typography/Title'
import GridLayout, {
  Responsive as ResponsiveGridLayout,
} from 'react-grid-layout'

import { MetaTags } from '@redwoodjs/web'

const DashboardBuilderPage = () => {
  const layouts = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ]

  return (
    <>
      <MetaTags title="DashboardBuilder" description="DashboardBuilder page" />

      <Title level={3}>{`Let's build your new dashboard!`}</Title>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        width="1200"
        breakpoints={{ lg: 2000, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <Card key="a" title="Default size card"></Card>
        <Card key="b" size="small" title="Small size card"></Card>
        <Card key="c" size="small" title="Small size card"></Card>
      </ResponsiveGridLayout>
    </>
  )
}

export default DashboardBuilderPage
