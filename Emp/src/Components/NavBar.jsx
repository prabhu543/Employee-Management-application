import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 , margin:'1.5rem 2rem' }}>
      <AppBar position="static"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)', 
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.23)', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)', 
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1 ,
            fontWeight:"blod",
            letterSpacing:'0.05rem'
          }}>
            Hello  {"Admin"}
          </Typography>
          <Button color="inherit"
          sx={{
            '&:hover': { backgroundColor: '#1565c0' },
            borderRadius: '5px',
            transition: 'background-color 0.3s ease'
          }}><Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
