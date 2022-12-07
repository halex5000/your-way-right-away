import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DashboardBuilderPage = () => {
  return (
    <>
      <MetaTags title="DashboardBuilder" description="DashboardBuilder page" />

      <h1>DashboardBuilderPage</h1>
      <p>
        Find me in <code>./web/src/pages/DashboardBuilderPage/DashboardBuilderPage.tsx</code>
      </p>
      <p>
        My default route is named <code>dashboardBuilder</code>, link to me with `
        <Link to={routes.dashboardBuilder()}>DashboardBuilder</Link>`
      </p>
    </>
  )
}

export default DashboardBuilderPage
