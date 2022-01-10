import React from "react";
import { Grid, Paper, Typography, Toolbar, AppBar, Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import DataTable from "../../components/DataTable";

export default function Dashboard(props) {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                timeline
              </Typography>
              <LineChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                Top employees
              </Typography>
              <BarChart />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <DataTable />
        </Grid>
      </Box>
    </>
  );
}
