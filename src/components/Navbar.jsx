import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'

const StyledNavbar = styled(AppBar)`
	background: black;
	position:absolute;
`

const Navbar = () => {
  return (
	<StyledNavbar>
		<Toolbar>

		</Toolbar>
	</StyledNavbar>
  )
}

export default Navbar