import * as React from 'react'

import { Alert } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'

type ToastProps = {
  open: boolean
  message: string
}

export default function Toast({ open, message }: ToastProps) {
  const vertical = 'top'
  const horizontal = 'center'

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      key={vertical + horizontal}
    >
      <Alert severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
