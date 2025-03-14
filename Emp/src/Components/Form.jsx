import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CodeIcon from '@mui/icons-material/Code';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

const Form = () => {
  return (
    <Box 
    sx={{
      margin: '1.5rem auto',
      width: '600px',
      maxWidth: '90%',
      height: 'auto', // Remove fixed height for better flexibility
      backgroundColor: '#fff',
      borderRadius: '4px',
      padding: '25px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      
    }}
  >
    <Stack spacing={3}>
      {/* Title and Clear Button */}
      <Box display="flex" alignItems="center">
        <Typography 
          variant="h5" 
          flexGrow={1} 
          fontWeight="bold"
          color="#333"
        >
          Assign Task
        </Typography>
        <Button 
          sx={{
            color: '#000',
            '&:hover': {
              backgroundColor: '#f5f5f5'
            },
            minWidth: '40px',
            height: '40px',
            borderRadius: '50%',
          }}
        >
          <ClearIcon fontSize="medium" />
        </Button>
      </Box>

      {/* Task Selection */}
      <Stack 
        direction="row" 
        spacing={2} 
        sx={{
          bgcolor: '#d2d7febf', 
          padding: '4px', 
          borderRadius: '8px',
          height: '40px'
        }}
      >
        {/* Development Box */}
        <Box 
          sx={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '8px',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#fff'
            }
          }}
        >
          <CodeIcon sx={{ display: { xs: 'none', sm: 'block' } }} />
          <Typography>Development</Typography>
        </Box>

        {/* Design Box */}
        <Box 
          sx={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '8px',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#fff'
            }
          }}
        >
          <AutoGraphIcon sx={{ display: { xs: 'none', sm: 'block' } }} />
          <Typography>Design</Typography>
        </Box>
      </Stack>

      {/* Title Input */}
      <Stack spacing={1}>
        <label htmlFor="title">Title</label>
        <Box 
          sx={{
            bgcolor: '#fff',
            padding: '8px 20px',
            border: '2px solid rgb(183, 189, 234)',
            borderRadius: '5px',
            transition: 'border-color 0.3s ease',
            '&:focus-within': {
              borderColor: '#1e88e5'
            }
          }}
        >
          <input 
            id="title"
            type="text"
            placeholder="Enter Title"
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '16px',
            }}
          />
        </Box>
      </Stack>

      {/* Description Input */}
      <Stack spacing={1}>
        <label htmlFor="description">Description</label>
        <Box 
          sx={{
            bgcolor: '#fff',
            padding: '8px 20px',
            border: '2px solid rgb(183, 189, 234)',
            borderRadius: '5px',
            transition: 'border-color 0.3s ease',
            '&:focus-within': {
              borderColor: '#1e88e5'
            }
          }}
        >
          <textarea 
            id="description"
            rows={5}
            placeholder="Description"
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              resize: 'none'
            }}
          />
        </Box>
      </Stack>

      {/* Date Input Field */}
      <Box 
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: '100%', 
        gap: '10px' 
      }}
      >
        {/* Date Input */}
        <Box 
          sx={{
            bgcolor: '#fff',
            padding: '8px 20px',
            border: '2px solid rgb(183, 189, 234)',
            borderRadius: '5px',
            transition: 'border-color 0.3s ease',
            width: '100%', // Stretch based on parent width
            maxWidth: '200px', // Limit max width
            '&:focus-within': {
              borderColor: '#1e88e5'
            }
          }}
        >
          <input 
            type="date" 
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              backgroundColor: 'transparent'
            }} 
          />
        </Box>

    {/* Buttons */}
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />} sx={{
          color:"#000" , border: '2px solid rgb(183, 189, 234)',
        }}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
      </Box>
    </Stack>
    </Box>
  )
}

export default Form
