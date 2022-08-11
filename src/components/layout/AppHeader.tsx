import React from 'react'
import { AppBar, Toolbar, Box, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

export const AppHeader: React.FC = () => {
  return (
    <AppBar color="primary" position="fixed" elevation={0}>
      <Toolbar>
        <Box width="100%" display="flex" alignItems="center">
          <Box width="40%" display="flex" alignItems="center">
            <Typography variant="h5">Currency App</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <NavLink activeClassName="activeLink" className="link" exact to="/">
              Home
            </NavLink>
            <NavLink
              activeClassName="activeLink"
              className="link"
              to="/exchange-rates"
              exact
            >
              Exchange Rates
            </NavLink>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
