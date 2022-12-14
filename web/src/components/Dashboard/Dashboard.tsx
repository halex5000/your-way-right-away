import { Chip, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'

import DashboardCell from '../DashboardCell'

type Props = {
  id: string
}

const Dashboard = ({ id }: Props) => {
  // const defaultWidth = 2
  // const defaultHeight = 2
  // const defaultXCoordinate = 4
  // const defaultYCoordinate = 4
  // const defaultTitle = 'Welcome to your first gizmo!'
  // const defaultContent = 'Gizmos can contain all kinds of things'

  // const [isEditMode, setIsEditMode] = useState(false)
  // const [layout, setLayout] = useState()

  // const editHandler = () => {
  //   setIsEditMode(true)
  // }

  // const saveHandler = () => {
  //   console.log('saving stuff')
  //   setIsEditMode(false)
  // }

  // const cancelHandler = () => {
  //   setIsEditMode(false)
  // }

  // const addGizmo = () => {}

  // const layoutChangeHandler = () => {}

  return (
    <>
      <DashboardCell id={id} />
    </>
  )
}

export default Dashboard
