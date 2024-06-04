import * as React from 'react';
import Box from '@mui/material/Box';
import trending from '../assests/imgs/trending.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Divider from '@mui/material/Divider';

import  ShortVid from "./ShortVid";

export default function TreadingSongs() {
  const theme = useTheme();
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
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${trending})`,
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

    <ShortVid/>

    <List
      sx={{ width: '100%', maxWidth: "100%", bgcolor: 'black', color: 'white' }}
      aria-label="contacts"
    >
    <Typography variant="h6">
      Trending Songs
    </Typography>

      <ListItem disablePadding>
        <ListItemButton sx={{gap: 2}}>
          <ListItemIcon>
             <Box
              sx={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/OIP.UdUuj4J1lif1HJ3vChNN8QHaHb?rs=1&pid=ImgDetMain')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                margin: 'auto',
                height: '10vh',
                backgroundColor: 'red',
                width: 70,
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
            </Box>
          </ListItemIcon >
          <Box sx={{width: 100,}}>
          <Typography variant="h5" sx={{fontSize:22}}>
          P Daniel
          </Typography>
          <Typography variant="h6" sx={{fontSize:13}}>
          EBI N PAMI
          </Typography>
          </Box>
          <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton sx={{color: 'white'}} aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon sx={{color: 'white'}} /> : <SkipPreviousIcon sx={{color: 'white'}} />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon  sx={{ height: 38, width: 38, color: "white" }} />
          </IconButton>
          <IconButton sx={{color: 'white'}} aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
         <Typography sx={{color:"white", marginLeft:'15%'}}>
            4:34
        </Typography>
        </Box>
        </ListItemButton>
        <MenuOpenIcon />
      </ListItem>
      <Divider sx={{border: '1px solid white'}}/>

      <ListItem disablePadding>
        <ListItemButton sx={{gap: 2}}>
          <ListItemIcon>
             <Box
              sx={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/OIP.YUg54zydxfIsZPGCc2xQjAHaIL?rs=1&pid=ImgDetMain')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                margin: 'auto',
                height: '10vh',
                backgroundColor: 'red',
                width: 70,
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
            </Box>
          </ListItemIcon >
          <Box sx={{width: 100,}}>
          <Typography variant="h5" sx={{fontSize:22}}>
          Bj Sax
          </Typography>
          <Typography variant="h6" sx={{fontSize:13}}>
           Jesus Iye
          </Typography>
          </Box>
          <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton sx={{color: 'white'}} aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon sx={{color: 'white'}} /> : <SkipPreviousIcon sx={{color: 'white'}} />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon  sx={{ height: 38, width: 38, color: "white" }} />
          </IconButton>
          <IconButton sx={{color: 'white'}} aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
         <Typography sx={{color:"white", marginLeft:'15%'}}>
            5:00
        </Typography>
        </Box>
        </ListItemButton>
        <MenuOpenIcon />
      </ListItem>
      <Divider sx={{border: '1px solid white'}}/>

    </List>

    <List
      sx={{ width: '100%', maxWidth: "100%", bgcolor: 'black', color: 'white' }}
      aria-label="contacts"
    >
    <Typography variant="h6">
     Top Podcasts
    </Typography>

          <ListItem disablePadding>
        <ListItemButton sx={{gap: 2}}>
          <ListItemIcon>
             <Box
              sx={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/R.98f1693bfe36b14c9f121daae6704530?rik=%2fbyccIAC0NeeIA&pid=ImgRaw&r=0')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                margin: 'auto',
                height: '10vh',
                backgroundColor: 'red',
                width: 70,
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
            </Box>
          </ListItemIcon >
          <Box sx={{width: 100,}}>
          <Typography variant="h5" sx={{fontSize:22}}>
           Pastor E.A Adeboye
          </Typography>
          <Typography variant="h6" sx={{fontSize:13}}>
           Beloved of The Lord
          </Typography>
          </Box>
          <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton sx={{color: 'white'}} aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon sx={{color: 'white'}} /> : <SkipPreviousIcon sx={{color: 'white'}} />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon  sx={{ height: 38, width: 38, color: "white" }} />
          </IconButton>
          <IconButton sx={{color: 'white'}} aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
         <Typography sx={{color:"white", marginLeft:'15%'}}>
            1:36:00
        </Typography>
        </Box>
        </ListItemButton>
        <MenuOpenIcon />
      </ListItem>
      <Divider sx={{border: '1px solid white'}}/>

      <ListItem disablePadding>
        <ListItemButton sx={{gap: 2}}>
          <ListItemIcon>
             <Box
              sx={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/R.7c2a46631c84e0630c5bdcbf4e9ddbe2?rik=95u%2fdpUAV0sH8g&pid=ImgRaw&r=0')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                margin: 'auto',
                height: '10vh',
                backgroundColor: 'red',
                width: 70,
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
            </Box>
          </ListItemIcon >
          <Box sx={{width: 100,}}>
          <Typography variant="h5" sx={{fontSize:22}}>
             Bishop David Oyedepo
          </Typography>
          <Typography variant="h6" sx={{fontSize:13}}>
           Finicial Freedom
          </Typography>
          </Box>
          <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton sx={{color: 'white'}} aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon sx={{color: 'white'}} /> : <SkipPreviousIcon sx={{color: 'white'}} />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon  sx={{ height: 38, width: 38, color: "white" }} />
          </IconButton>
          <IconButton sx={{color: 'white'}} aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
         <Typography sx={{color:"white", marginLeft:'15%'}}>
            1:20:00
        </Typography>
        </Box>
        </ListItemButton>
        <MenuOpenIcon />
      </ListItem>
      <Divider sx={{border: '1px solid white'}}/>
    </List>
   
  </Box>


  );
}
