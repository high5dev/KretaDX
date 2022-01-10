import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Settings(props) {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Setting
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 1 }}>
        <Typography variant="h4" noWrap>
          Welcome to Setting Page.
        </Typography>
      </Box>
    </>
  );
}
