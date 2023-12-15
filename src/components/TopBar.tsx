import { useState } from 'react'

import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import HelpIcon from '@mui/icons-material/Help'

import AboutModal from './modals/AboutModal'

const TopBar: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleOpenAboutModal = (): void => {
    setOpen(true)
  }

  const handleCloseAboutModal = (): void => {
    setOpen(false)
  }

  return (
    <Box>
      <AboutModal opened={open} onClose={handleCloseAboutModal}/>
      <AppBar position="static">
        <Toolbar>
          <RocketLaunchIcon fontSize="large" sx={{ color: 'text.secondary' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Vite + React + TypeScript - Application</Typography>
          <IconButton
            size="large"
            edge="start"
            aria-label="help"
            color="default"
            sx={{ mr: 2 }}
            onClick={handleOpenAboutModal}
          >
            <HelpIcon sx={{ color: 'text.disabled' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
        </Box>
  )
}

export default TopBar
