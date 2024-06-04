import * as React from 'react';
import Box from '@mui/material/Box';
import musicads from '../assests/imgs/tracks.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function Tracklist() {
  return (
  <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        backgroundColor: 'black',
        width: '50%',
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
       Tracks
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
              width: '100%'
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
        height: '15vh',
        backgroundColor: 'red',
        width: '15%',
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
              width: '100%'
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
          height: '15vh',
          backgroundColor: 'red',
          width: '15%',
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
                width: '100%'
          }}
         >
            <Typography 
            variant="h6"
            sx={{
              fontSize: 12,
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

        <Box
      sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/R.85982f29498d304597ea5b395b702a27?rik=Aa%2b4kv7eCOGXWg&pid=ImgRaw&r=0')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '15vh',
        backgroundColor: 'red',
        width: '15%',
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
              width: '100%'
        }}
       >
          <Typography 
          variant="h6"
          sx={{
            fontSize: 12,
            color: 'white',
            fontWeight: 'bold'
          }}
          >
            Don Moen
          </Typography> 
          <Typography 
            sx={{color: 'white'}}
          >
           Hidding Place 
          </Typography>
       </Box>
      </Box>

      </Stack>

          <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{marginTop:'3%'}}
      >
    <Box
      sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/OIP.JmH7I4gHKbYwDiZklppbAgHaHa?rs=1&pid=ImgDetMain')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '15vh',
        backgroundColor: 'red',
        width: '15%',
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
              width: '100%'
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
            Pastor Bolaji Idowu
          </Typography> 
          <Typography 
            sx={{color: 'white', fontSize: 15}}
          >
              Finicial Wisdom
          </Typography>
       </Box>
      </Box>


    <Box
      sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/OIP.UqUI53iqG-B6iHcxDp7rFgHaHa?rs=1&pid=ImgDetMain')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '15vh',
        backgroundColor: 'red',
        width: '15%',
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
              width: '100%'
        }}
       >
          <Typography 
          variant="h6"
          sx={{
            fontSize: 13,
            color: 'white',
            fontWeight: 'bold'
          }}
          >
           Nathaniel Bassey
          </Typography> 
          <Typography 
            sx={{color: 'white'}}
          >
           Jesus Iye
          </Typography>
       </Box>
      </Box>


    <Box
        sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/OIP.YUg54zydxfIsZPGCc2xQjAHaIL?rs=1&pid=ImgDetMain')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          margin: 'auto',
          height: '15vh',
          backgroundColor: 'red',
          width: '15%',
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
                width: '100%'
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
              Bj Sax
            </Typography> 
            <Typography 
              sx={{color: 'white'}}
            >
              Aba Father
            </Typography>
         </Box>
        </Box>

        <Box
      sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/R.98f1693bfe36b14c9f121daae6704530?rik=%2fbyccIAC0NeeIA&pid=ImgRaw&r=0')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '15vh',
        backgroundColor: 'red',
        width: '15%',
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
              width: '100%'
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
           Pastor EA Adeyboye
          </Typography> 
          <Typography 
            sx={{color: 'white', fontSize: 11}}
          >
           Healing and Blessing
          </Typography>
       </Box>
      </Box>

      </Stack>
      <Box sx={{marginTop: '5%'}}></Box>
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
            Get Premuim For Just $3/Month
          </Typography> 
          <Typography 
            sx={{color: 'white'}}
          >
              Don't miss this opportunity
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
  </Box>


  );
}
