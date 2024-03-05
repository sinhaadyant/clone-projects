import React from "react";
import { Stack, Typography } from "@mui/material";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems={"center"}
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Typography
      className="copyright"
      variant="body2"
      sx={{ mt: 1.5, color: "#fff" }}
    >
      CopyRight 2022 Youtube
    </Typography>
  </Stack>
);

export default Navbar;
