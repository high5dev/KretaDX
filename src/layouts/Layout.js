import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Employee from "../pages/employee/Employee";
import Settings from "../pages/settings/Settings";
import TimeTracking from "../pages/timetrack/TimeTracking";
import System from "../pages/system/System";
import Risk from "../pages/risk/Risk";
import Aside from "./Aside";

const drawerWidth = 200;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Aside />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 0 }}
      >
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timetracking" element={<TimeTracking />} />
          <Route path="/system" element={<System />} />
          <Route path="/employee/:id" element={<Employee />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/risk" element={<Risk />} />
        </Routes>
      </Box>
    </Box>
  );
}
