import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';

const Form = () => {
  return (
    <Box sx={{
      margin:'1.5rem 1rem',
      width:'600px',
      maxWidth:"90%",
      height:"500px",
      backgroundColor:"#fff",
      borderRadius:"10px",
      padding:"20px"
    }}>
      <Stack spacing={2}>
        <Box display="flex">
          <Typography variant='h5' flexGrow={1}>Assign Task</Typography>
          <Button sx={{
            color:"#000"
          }}><ClearIcon/></Button>
        </Box>
        {/** continue through drribble design */}
      </Stack>
    </Box>
  )
}

export default Form
