import React from 'react'
import { Backdrop, CircularProgress } from '@material-ui/core'

export const AppSpinner: React.FC = () => {
  return (
    <Backdrop style={{ zIndex: 9999 }} open>
      <CircularProgress color="primary" />
    </Backdrop>
  )
}
