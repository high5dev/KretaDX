import * as React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  Settings,
  Dashboard,
  Bolt,
  AccessTime,
  AdminPanelSettings,
} from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  active: {
    color: "#000000DE",
    border: "1px solid #1976d2",
    backgroundColor: "#1976d2",
    "&:hover": {
      background: "#1976d2",
    },
  },
});

function Aside() {
  const { pathname } = useLocation();
  const classes = useStyles();
  const menus = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: <Dashboard />,
    },
    {
      name: "Risk",
      to: "/risk",
      icon: <Bolt />,
    },
    {
      name: "Settings",
      to: "/settings",
      icon: <Settings />,
    },
    {
      name: "Time Tracking",
      to: "/timetracking",
      icon: <AccessTime />,
    },
    {
      name: "System",
      to: "/system",
      icon: <AdminPanelSettings />,
    },
  ];
  return (
    <>
      <Toolbar>
        <Typography variant="h4">KretaCX</Typography>
      </Toolbar>

      <Divider />

      <List>
        {menus.map((menu, index) => (
          <div key={index}>
            <ListItem
              button
              component={Link}
              to={menu.to}
              className={pathname === menu.to ? classes.active : ""}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText
                primary={menu.name}
                sx={{ textTransform: "uppercase" }}
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </>
  );
}

export default Aside;
