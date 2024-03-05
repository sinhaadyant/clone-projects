import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setvideos(data?.items);
    });
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflow: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      >
        Search results for : {searchTerm}
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
