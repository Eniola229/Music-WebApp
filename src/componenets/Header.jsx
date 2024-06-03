import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { auth } from '../Auth/Firebase';
import { GoogleAuthProvider, signInWithPopup, sendEmailVerification, onAuthStateChanged, signOut} from 'firebase/auth';


const CustomTextField = styled((props) => (
  <TextField {...props} variant="outlined" />
))(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '30px',
    height: '6vh',
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiInputLabel-outlined': {
    color: 'white',
  },
  '& .MuiInputLabel-outlined.Mui-focused': {
    color: 'white',
  },
}));

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true); 



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      setIsLoading(false); 

      if (result) {
        const { displayName, email } = result;
        setUserData({ displayName, email });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

    const SignUpUsingGoogle = () => {
    setIsLoading(true); 

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        setUserData({ displayName, email, photoURL  });
        sendEmailVerification(result.user);
        setIsLoggedIn(true);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.log({ error });
        setIsLoading(false); 
      });
  };

    const handleLogout = () => {
    setIsLoading(true); 

    signOut(auth)
      .then(() => {
        setUserData({});
        setIsLoggedIn(false);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.log({ error });
        setIsLoading(false); 
      });
  };



  return (

    <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            APlay
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
               <ListItemButton to="/trending" style={{ textDecoration: 'none', color: 'white', fontSize: '30px', display: 'inline-block'}}>
                      <Typography>
                        Trending
                      </Typography>
              </ListItemButton>
              <ListItemButton to="/leatest" style={{ textDecoration: 'none', color: 'white', fontSize: '30px', display: 'inline-block'}}>
                      <Typography>
                        Leatest
                      </Typography>
              </ListItemButton>
              <ListItemButton to="/artist" style={{ textDecoration: 'none', color: 'white', fontSize: '30px', display: 'inline-block'}}>
                      <Typography>
                        Artist
                      </Typography>
              </ListItemButton>
              <ListItemButton to="/playlists" style={{ textDecoration: 'none', color: 'white', fontSize: '30px', display: 'inline-block'}}>
                      <Typography>
                        PlayList
                      </Typography>
              </ListItemButton>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            APlay
          </Typography>
           <Toolbar  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <ListItemButton to="/trending" sx={{ textDecoration: 'none', color: 'white', fontSize: '30px' }}>
                <Typography>Trending</Typography>
              </ListItemButton>
              <ListItemButton to="/leatest" sx={{ textDecoration: 'none', color: 'white', fontSize: '30px' }}>
                <Typography>Leatest</Typography> 
              </ListItemButton>
              <ListItemButton to="/artist" sx={{ textDecoration: 'none', color: 'white', fontSize: '30px' }}>
                <Typography>Artist</Typography>
              </ListItemButton>
              <ListItemButton to="/playlists" sx={{ textDecoration: 'none', color: 'white', fontSize: '30px' }}>
                <Typography>PlayList</Typography>
              </ListItemButton>
          </Box>
      </Toolbar>

          <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
            <Box>
              <CustomTextField
                id="outlined-basic"
                label="Explore..."
                fullWidth
              />
            </Box>
            <Box>
              {isLoggedIn ? (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Avatar" src="https://lh3.googleusercontent.com/a/ACg8ocIXKlFNuPNbGSML2xkHqHhoz6kDlpTR65xXu1iLSCLBMGZ3fRnZ=s288-c-no" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                  <ListItem disablePadding>
                    <ListItemButton to="/profile" style={{ textDecoration: 'none', color: 'black', fontSize: '30px', display: 'inline-block' }}>
                      <Typography>
                        Profile
                      </Typography>
                    </ListItemButton>
                  </ListItem>

                   <ListItem disablePadding>
                    <ListItemButton to="/settings" style={{ textDecoration: 'none', color: 'black', fontSize: '30px', display: 'inline-block'}}>
                      <Typography>
                        Setting
                      </Typography>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton to="/payments" style={{ textDecoration: 'none', color: 'black', fontSize: '30px', display: 'inline-block'}}>
                      <Typography>
                        Payments
                      </Typography>
                    </ListItemButton>
                  </ListItem>

                     <MenuItem onClick={handleCloseUserMenu}>
                        <Button
                          variant="contained"
                          sx={{
                            background: 'white',
                            color: 'black',
                            display: { xs: 'block', md: 'inline-block' },
                            marginRight: '1rem',
                            boxShadow: 'none',
                            width: '100%'
                          }}
                          onClick={handleLogout}
                          disabled={isLoading}
                        >
                          {isLoggedIn ? 'Logout' : 'Logging out...'}
                        </Button>
                    </MenuItem>
                  </Menu>

                </>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    background: 'white',
                    color: 'black',
                    display: { xs: 'block', md: 'inline-block' },
                  }}
                  onClick={SignUpUsingGoogle}
                >
                  Login/Signup
                </Button>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;