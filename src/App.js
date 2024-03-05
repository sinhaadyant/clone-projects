import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Footer,
} from "./components";
const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#0f0f0f" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/watch/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
      <Footer />
    </Box>
  </BrowserRouter>
);

export default App;
