import { useState } from 'react'

import { Box, Button, Stack } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import Dashboard from 'src/components/Dashboard/Dashboard'

type Props = {
  id: string
}

const Buttons = ({
  addGizmo,
  saveHandler,
  cancelHandler,
  editHandler,
  isEditMode,
}: {
  addGizmo: Function
  saveHandler: Function
  cancelHandler: Function
  editHandler: Function
  isEditMode: boolean
}) => (
  <Stack spacing={1} direction="row" sx={{ justifyContent: 'right' }}>
    {isEditMode && addGizmo && (
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          addGizmo()
        }}
      >
        Add Gizmo
      </Button>
    )}
    {isEditMode && saveHandler && (
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          saveHandler()
        }}
      >
        Save
      </Button>
    )}
    {isEditMode && cancelHandler && (
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          cancelHandler()
        }}
      >
        Cancel
      </Button>
    )}
    {!isEditMode && editHandler && (
      <Button
        variant="contained"
        color="primary"
        sx={{ float: 'right' }}
        onClick={() => {
          editHandler()
        }}
      >
        Edit
      </Button>
    )}
  </Stack>
)

const DashboardPage = ({ id }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false)

  const editHandler = () => {
    setIsEditMode(true)
  }

  const saveHandler = () => {
    console.log('saving stuff')
    setIsEditMode(false)
  }

  const cancelHandler = () => {
    setIsEditMode(false)
  }

  const addGizmo = () => {}

  return (
    <Box sx={{ mt: 7, width: '100%' }}>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <Dashboard
        id={id}
        mode={isEditMode ? 'readonly' : 'editing'}
        buttons={
          <Buttons
            isEditMode={isEditMode}
            editHandler={editHandler}
            saveHandler={saveHandler}
            cancelHandler={cancelHandler}
            addGizmo={addGizmo}
          />
        }
      ></Dashboard>
    </Box>
  )
}

export default DashboardPage
