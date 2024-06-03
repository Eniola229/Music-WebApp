import * as React from 'react';
import Box from '@mui/material/Box';
import musicads from '../assests/imgs/musicads.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function TreadingSongs() {
  return (
  <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        backgroundColor: 'black',
        width: '50%'
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
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${musicads})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '20vh',
        backgroundColor: 'red',
        width: '100%',
        borderRadius: '20px',
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
        }}
       >
          <Typography 
          variant="h4"
          sx={{
            color: 'white',
            fontWeight: 'bold'
          }}
          >
            Get All Trending Songs in one Pagakage
          </Typography> 
          <Typography 
            sx={{color: 'white'}}
          >
             Stay With The Vibes
          </Typography>
          <Button 
          variant="outlined"
          sx={{
            color: 'white',
            border: '1px solid white'
          }}
          >Get it now
          </Button>
     </Box>
    </Box>
    <Typography
        variant="h6"
      sx={{
        marginTop: '3%',
        color: 'white',

      }}
    >
        Recently Played
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
        height: '20vh',
        backgroundColor: 'red',
        width: '20%',
        borderRadius: '20px',
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
        }}
       >
          <Typography 
          variant="h6"
          sx={{
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold'
          }}
          >
            Dunsin Oyekan
          </Typography> 
          <Typography 
            sx={{color: 'white'}}
          >
             Kedosh
          </Typography>
       </Box>
      </Box>

    <Box
      sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/OIP.-QI7FWd2mEpBtXxZ22TWqgHaFD?rs=1&pid=ImgDetMain')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '20vh',
        backgroundColor: 'red',
        width: '20%',
        borderRadius: '20px',
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
        }}
       >
          <Typography 
          variant="h6"
          sx={{
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold'
          }}
          >
            Chioma Jesus
          </Typography> 
          <Typography 
            sx={{color: 'white'}}
          >
             Jesus Is Lord
          </Typography>
       </Box>
      </Box>

      <Box
      sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/OIP.u59e5EX_2rE7mHtC-09IyAHaJQ?rs=1&pid=ImgDetMain')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '20vh',
        backgroundColor: 'red',
        width: '20%',
        borderRadius: '20px',
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
        }}
       >
          <Typography 
          variant="h6"
          sx={{
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold'
          }}
          >
            Theophilus Sunday
          </Typography> 
          <Typography 
            sx={{color: 'white'}}
          >
             Aba Father
          </Typography>
       </Box>
      </Box>
      </Stack>

          <Typography
        variant="h6"
      sx={{
        marginTop: '3%',
        color: 'white',

      }}
    >
       Sermons
    </Typography>
     <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{marginTop:'3%'}}
      >
    <Box
      sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/R.98f1693bfe36b14c9f121daae6704530?rik=%2fbyccIAC0NeeIA&pid=ImgRaw&r=0')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '20vh',
        backgroundColor: 'red',
        width: '20%',
        borderRadius: '20px',
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
        }}
       >
          <Typography 
          variant="h6"
          sx={{
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold'
          }}
          >
            Pastor E.A Adeboye
          </Typography> 
          <Typography 
            sx={{color: 'white'}}
          >
             Play
          </Typography>
       </Box>
      </Box>

    <Box
      sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/R.7c2a46631c84e0630c5bdcbf4e9ddbe2?rik=95u%2fdpUAV0sH8g&pid=ImgRaw&r=0')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '20vh',
        backgroundColor: 'red',
        width: '20%',
        borderRadius: '20px',
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
        }}
       >
          <Typography 
          variant="h6"
          sx={{
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold'
          }}
          >
            Bishop David Oyedepo
          </Typography> 
          <Typography 
            sx={{color: 'white'}}
          >
             Play
          </Typography>
       </Box>
      </Box>

      <Box
      sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/OIP.d1PU_TCiu3-SrsBOGGkEswAAAA?rs=1&pid=ImgDetMain')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '20vh',
        backgroundColor: 'red',
        width: '20%',
        borderRadius: '20px',
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
        }}
       >
          <Typography 
          variant="h6"
          sx={{
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold'
          }}
          >
            Femi Lazarus
          </Typography> 
          <Typography 
            sx={{color: 'white'}}
          >
             Play
          </Typography>
       </Box>
      </Box>
      </Stack>

  </Box>


  );
}
