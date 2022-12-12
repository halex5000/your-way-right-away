import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import DashboardCell from 'src/components/DashboardCell'

type Props = {
  id: string
}

const DashboardPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />
      <DashboardCell id={id} />
    </>
  )
}

export default DashboardPage
