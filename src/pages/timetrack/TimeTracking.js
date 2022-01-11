import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function TimeTracking(props) {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" noWrap>
            TimeTracking
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 1 }}>
        <Typography variant="h4" noWrap>
          Welcome to TimeTracking Page.
        </Typography>
      </Box>
    </>
  );
}
