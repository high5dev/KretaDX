import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  ListItemText,
  List,
  ListItem,
  Divider,
  Stack,
  Avatar,
  Badge,
  Switch,
  Button,
  Box,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Profile() {
  return (
    <>
      <Paper sx={{ width: "100%", maxWidth: 200 }}>
        <List>
          <ListItem alignItems="center" sx={{ justifyContent: "center" }}>
            <Stack direction="row" spacing={2}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt="Abdul"
                  src="/assets/images/abdul.jpg"
                  sx={{ width: 120, height: 120 }}
                />
              </StyledBadge>
            </Stack>
          </ListItem>
          <Divider />
          <ListItem sx={{ p: 1 }}>
            <ListItemText
              primary={
                <Typography
                  variant="h5"
                  color="text.primary"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  Abdul Rehman
                </Typography>
              }
              secondary={
                <Typography variant="body2" color="text.primary" align="center">
                  Web Engineer
                  <br />
                  IT dept.
                </Typography>
              }
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary={
                <Typography
                  variant="h6"
                  color="text.primary"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  $55.00
                </Typography>
              }
              secondary={
                <Typography variant="body2" color="text.primary" align="center">
                  per hour
                </Typography>
              }
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ display: "flex", p: 1 }}>
            <Switch {...label} defaultChecked size={"20px"} />
            <Typography variant="body2">Monitor this user</Typography>
          </ListItem>
          <Divider />
          <ListItem sx={{ display: "flex", px: 1, pt: 3 }}>
            <ListItemText
              primary={
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    size="small"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    size="small"
                  >
                    Delete
                  </Button>
                </Box>
              }
            ></ListItemText>
          </ListItem>
        </List>
      </Paper>
    </>
  );
}
