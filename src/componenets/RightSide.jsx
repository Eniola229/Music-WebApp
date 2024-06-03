import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function RightSide() {
    const theme = useTheme();
  return (
  <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        height: '100vh',
        width: '20%'
      }}
      my={4}
      margin="auto"
      alignItems="center"
      justifyContent="center" 
      gap={4}
      p={2}
    >

    <Typography variant="h6" sx={{color: 'white'}}>
    Currently Playing
    </Typography>
    <Card sx={{ display: 'flex', backgroundColor: 'black', color: 'white', height: '25vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography  variant="h6">
            Finicial Wisdom
          </Typography>
          <Typography variant="subtitle1" sx={{color: 'white', fontSize: 10}} >
            Pastor Bolaji Idowu
          </Typography>
        </CardContent>
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
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://th.bing.com/th/id/OIP.JmH7I4gHKbYwDiZklppbAgHaHa?rs=1&pid=ImgDetMain"
        alt="currently playing picture"
      />
    </Card>

    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'black', color: 'white' }}
      aria-label="contacts"
    >
    <Typography variant="h6">
      Latest Songs
    </Typography>

      <ListItem disablePadding>
        <ListItemButton sx={{gap: 2}}>
          <ListItemIcon>
             <Box
              sx={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/R.85982f29498d304597ea5b395b702a27?rik=Aa%2b4kv7eCOGXWg&pid=ImgRaw&r=0')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                margin: 'auto',
                height: '10vh',
                backgroundColor: 'red',
                width: 50,
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
           Don Moen
          </Typography>
          <Typography variant="h6" sx={{fontSize:13}}>
           Hidding Place 
          </Typography>
          </Box>
          <PlayCircleIcon/>
        </ListItemButton>
      </ListItem>

       <ListItem disablePadding>
        <ListItemButton sx={{gap: 2}}>
          <ListItemIcon>
             <Box
              sx={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/OIP.UqUI53iqG-B6iHcxDp7rFgHaHa?rs=1&pid=ImgDetMain')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                margin: 'auto',
                height: '10vh',
                backgroundColor: 'red',
                width: 50,
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
            Nathaniel Bassey
          </Typography>
          <Typography variant="h6" sx={{fontSize:13}}>
          Jesus Iye
          </Typography>
          </Box>
            <PlayCircleIcon/>
        </ListItemButton>
      </ListItem>

    </List>

    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'black', color: 'white' }}
      aria-label="contacts"
    >
    <Typography variant="h6">
      Podcasts
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
                width: 50,
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
          <PlayCircleIcon/>
        </ListItemButton>
      </ListItem>

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
                width: 50,
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
            <PlayCircleIcon/>
        </ListItemButton>
      </ListItem>

     
    </List>
   

  </Box>


  );
}
