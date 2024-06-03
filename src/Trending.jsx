import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';


import Header from "./componenets/Header";
import TreadingSongs from "./componenets/TreadingSongs";
import RightSide from "./componenets/RightSide";
import LeftSide from "./componenets/LeftSide";
import ButtomNav from "./componenets/ButtomNav";


export default function Trending() {
  return (
  <Box
      // height={{ xs: '100%', sm: '100%', md: '100%' }} 
      
      sx={{
        backgroundColor: "black",
        height: '100%',  
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        p: 2,
      }}
      my={4}
      margin="auto"
      alignItems="center"
      justifyContent="center" 
      gap={4}
      p={2}
    >
    <Header/>

    <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{marginTop:'5%'}}
      >
        <LeftSide/>
        <TreadingSongs/>
        <RightSide/>
      </Stack>
      {/*<ButtomNav/>*/}
  </Box>


  );
}
