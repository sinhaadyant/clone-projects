import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setvideos(data?.items);
    });
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: {
          sm: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
          },
          borderRight: "1px solid $3d3d3d",
          px: {
            sx: 0,
            md: 2,
          },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
      </Box>
      <Box
        p={3}
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
          <span style={{ color: "#fff" }}>{selectedCategory} Videos </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
