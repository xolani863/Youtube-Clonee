import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// #################Routes#######################################
const App = () => (
  <BrowserRouter>
  <Box sx={{ backgroundColor: '#000'}}>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/video/:id" element={<SearchFeed />} />
    </Routes>
  </Box>
  </BrowserRouter>
)