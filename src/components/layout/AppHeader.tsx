import React from 'react'
import { AppBar, Toolbar, Box, Typography, Button } from '@material-ui/core'

export const AppHeader: React.FC = () => {
  return (
    <AppBar color="primary" position="fixed" elevation={0}>
      <Toolbar>
        <Box width="100%" display="flex" alignItems="center">
          <Box width="40%" display="flex" alignItems="center">
            <Typography variant="h5">Currency App</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Button color="inherit" variant="text" href="/">
              Home
            </Button>
            <Button
              style={{ marginLeft: 12 }}
              color="inherit"
              href="/exchange-rates"
            >
              Exchange Rates
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
