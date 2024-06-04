import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import coverphoto from '../assests/imgs/coverphoto.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import UserTracks from "./UserTracks";



import { auth } from '../Auth/Firebase';
import { onAuthStateChanged } from 'firebase/auth';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar  = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function UserProfile() {

  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      setIsLoading(false); 

      if (result) {
        const { displayName, email, photoURL, metadata  } = result;
        const creationDate = new Date(metadata.creationTime).toLocaleDateString('en-CA'); // 'en-CA' gives 'YYYY-MM-DD' format
        setUserData({ displayName, email, photoURL, creationDate   });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

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
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${coverphoto})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 'auto',
        height: '30vh',
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
       <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
         sx={{
           position: 'absolute',
           bottom: -30,
           left: 80,
        }}
      >
     <SmallAvatar  alt="Travis Howard" src={userData.photoURL} 
     sx={{
      height:'120px', 
      width: '120px', 
      border: '2px solid white',
    }} />
    </StyledBadge>
    </Box>
    
    <Box 
      sx={{
        marginTop: '5%',
        position: 'relative',
        marginTop: '5%',
      }}
    >
    <EditIcon
          sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '50%',
            margin: '8px',
             position: 'absolute',
           top: 0,
           right: 0,
        }}
         />
      <Box sx={{
          margin: '10px',}}>
      <Typography
        sx={{
          color: 'white',
          fontSize: 20,
          textAlign: 'left',
          fontWeight: 'bold',
        }}
      >
        {userData.displayName}
      </Typography>
    <Typography
        sx={{
          color: 'gray',
          fontSize: 13,
          textAlign: 'left',
        }}
      >
        {userData.email} 

   {/*     <EditIcon
          sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '50%',
            margin: '8px',
        }}
         />*/}
      </Typography>
      </Box>
     <Typography
        sx={{
          color: 'white',
          fontSize: 15,
          textAlign: 'left',
          margin: '8px',
        }}
      >
       Bio: Hii there my name is {userData.displayName}, it been a good experience using Aplay
      </Typography>

      <Box 
        sx={{
          display: 'flex',
        }}
      >
      <Button
      sx={{
        backgroundColor: 'none',
        color: 'gray',
        borderRadius: 20,
      }}
      >
      <LocationOnIcon/> Lagos Nigeria
      </Button>

      <Button
      sx={{
        backgroundColor: 'none',
        color: 'gray',
        borderRadius: 20,
      }}
      >
      <CalendarMonthIcon/> Joined {userData.creationDate } 
      </Button>
      </Box>

      <Box 
        sx={{
          display: 'flex',
        }}
      >
      <Button
      sx={{
        backgroundColor: 'none',
        color: 'white',
        borderRadius: 20,
      }}
      >
      10million Followers   
      </Button>
       <Button
      sx={{
        backgroundColor: 'none',
        color: 'white',
        borderRadius: 20,
      }}
      >
      Following 100   
      </Button>
        </Box>
      </Box>
      <UserTracks/>
  </Box>

  );
}
