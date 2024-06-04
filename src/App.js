import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';

import FirstPage from "./FirstPage";
import Trending from "./Trending";
import Tracks from "./Tracks";
import Profile from "./Profile";


export default function App() {

  return (
    <Router>
      <Box
        sx={{
           backgroundColor: "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 63, 3, 1) 50%, rgba(0, 63, 3, 1) 50%, rgba(0, 137, 3, 1) 100%)"
        }}
      >
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </Router>
  );
}