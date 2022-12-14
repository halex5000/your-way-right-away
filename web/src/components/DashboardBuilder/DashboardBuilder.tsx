import GridLayout, { Layout } from 'react-grid-layout'

type Props = {
  layout: Layout[]
  layoutChangeHandler: Function
}

const DashboardBuilder = ({ layout, layoutChangeHandler }: Props) => {
  return (
    <GridLayout
      layout={layout}
      onLayoutChange={(layout) => {
        layoutChangeHandler()
      }}
    ></GridLayout>
  )
}

export default DashboardBuilder
