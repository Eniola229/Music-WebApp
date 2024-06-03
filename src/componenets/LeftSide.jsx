import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PodcastsIcon from '@mui/icons-material/Podcasts';



export default function LeftSide() {
  return (
  <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        height: '100vh',
        backgroundColor: 'black',
        width: '15%'
      }}
      my={4}
      margin="auto"
      alignItems="center"
      justifyContent="center" 
      gap={4}
      p={2}
    >
  
   <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'black', color: 'white' }}
      aria-label="contacts"
    >
    <Typography variant="h6">
      Browser Music
    </Typography>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <HomeOutlinedIcon sx={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <MusicNoteIcon sx={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary="Tracks" />
        </ListItemButton>
      </ListItem>
  
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LibraryMusicIcon sx={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary="Playlist" />
        </ListItemButton>
      </ListItem>
    </List>

      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'black', color: 'white' }}
      aria-label="contacts"
    >
    <Typography variant="h6">
      Recently Played
    </Typography>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <PlaylistPlayIcon sx={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary="Recently Played" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <BookmarkIcon sx={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary="Favorite Tracks" />
        </ListItemButton>
      </ListItem>
  
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <PodcastsIcon sx={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary="Podcasts" />
        </ListItemButton>
      </ListItem>
    </List>

    <Typography sx={{color: 'white', fontSize: 12}}>
      Developed By AfricTech
    </Typography>
    <Typography sx={{color: 'white', fontSize: 12, textAlogn: 'center'}}>
      Copyright @2024
    </Typography>


  </Box>


  );
}
