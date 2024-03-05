import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from ".";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems={"center"}
    p={2}
    pl={2}
    sx={{
      position: "sticky",
      background: "#0f0f0f",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src="/logo192.png" alt={"logo"} height={45} />
      <Typography variant="h5" p={2} ml={1} sx={{ color: "#fff" }}>
        Youtube Clone
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
