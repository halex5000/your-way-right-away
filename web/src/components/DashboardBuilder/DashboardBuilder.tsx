import GridLayout from 'react-grid-layout'

const DashboardBuilder = ({ layout, layoutChangeHandler }) => {
  return (
    <GridLayout
      layout={layout}
      onLayoutChange={layoutChangeHandler}
    ></GridLayout>
  )
}

export default DashboardBuilder
