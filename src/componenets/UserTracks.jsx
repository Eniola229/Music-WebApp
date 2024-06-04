import * as React from 'react';
import Box from '@mui/material/Box';
import musicads from '../assests/imgs/tracks.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function UserTracks() {
  return (
  <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        backgroundColor: 'black',
        marginButtom:'5%'
      }}
      my={4}
      margin="auto"
      alignItems="center"
      justifyContent="center" 
      gap={4}
      p={2}
    >
      
    <Typography
        variant="h6"
      sx={{
        marginTop: '3%',
        color: 'white',

      }}
    >
      Your Top Tracks For This Month
    </Typography>
     <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{marginTop:'3%'}}
      >
    <Box
      sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/OIP.3i_VVznb8gNThYPNQI0AqQHaHa?rs=1&pid=ImgDetMain')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '15vh',
        backgroundColor: 'red',
        width: '15%',
        borderRadius: '50%',
        cursor: 'pointer',
        position: 'relative',

      }}
      my={4}
      margin="auto"
      alignItems="center"
      justifyContent="center" 
      gap={4}
      p={2}
    >
       <Box 
        sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              margin: '20px',
              textAlign: 'right',
              width: '100%'
        }}
       >
       </Box>
      </Box>


    <Box
      sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/OIP.-QI7FWd2mEpBtXxZ22TWqgHaFD?rs=1&pid=ImgDetMain')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '15vh',
        backgroundColor: 'red',
        width: '15%',
        borderRadius: '50%',
        cursor: 'pointer',
        position: 'relative',

      }}
      my={4}
      margin="auto"
      alignItems="center"
      justifyContent="center" 
      gap={4}
      p={2}
    >
      </Box>
      <Box
        sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/OIP.u59e5EX_2rE7mHtC-09IyAHaJQ?rs=1&pid=ImgDetMain')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          margin: 'auto',
          height: '15vh',
          backgroundColor: 'red',
          width: '15%',
          borderRadius: '50%',
          cursor: 'pointer',
          position: 'relative',

        }}
        my={4}
        margin="auto"
        alignItems="center"
        justifyContent="center" 
        gap={4}
        p={2}
      >       
      </Box>

        <Box
      sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/R.85982f29498d304597ea5b395b702a27?rik=Aa%2b4kv7eCOGXWg&pid=ImgRaw&r=0')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '15vh',
        backgroundColor: 'red',
        width: '15%',
        borderRadius: '50%',
        cursor: 'pointer',
        position: 'relative',

      }}
      my={4}
      margin="auto"
      alignItems="center"
      justifyContent="center" 
      gap={4}
      p={2}
    >
      </Box>
      </Stack>
      <Box sx={{marginTop: '5%'}}></Box>
     
  </Box>


  );
}
