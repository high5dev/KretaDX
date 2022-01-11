import React, { useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  CssBaseline,
  Tab,
  AppBar,
  Toolbar,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import HeatmapChart from "../../components/HeatmapChart";
import BarChart from "../../components/BarChart";
import Profile from "../../components/Profile";
import { useParams } from "react-router";
import {
  LaptopChromebook,
  AccessTimeFilled,
  Notifications,
  Email,
  FileCopy,
  Videocam,
  Keyboard,
  List,
  Photo,
} from "@mui/icons-material";
import MUIDataTable from "mui-datatables";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import * as actions from "./employeeActions";

export default function Employee() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const entities = useSelector(
    ({ employee }) => employee.entities,
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchData());
  }, [dispatch]);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Employee
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ textTransform: "uppercase" }}
            >
              <Tab
                iconPosition="start"
                icon={<LaptopChromebook />}
                label="activity log"
                value="1"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<List />}
                label="sessions log"
                value="2"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<AccessTimeFilled />}
                label="time worked"
                value="3"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<Notifications />}
                label="alerts"
                value="4"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<Photo />}
                label="snapshots"
                value="5"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<Email />}
                label="emails"
                value="6"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<FileCopy />}
                label="file transfers"
                value="7"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<Videocam />}
                label="online meetings"
                value="8"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<Keyboard />}
                label="keystrokes"
                value="9"
                sx={{ py: 0, fontSize: 12 }}
              />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ py: 1, px: 0 }}>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <Profile />
              <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", px: 1 }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <Paper sx={{ padding: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ textTransform: "uppercase" }}
                      >
                        hourly
                      </Typography>
                      <HeatmapChart />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper sx={{ padding: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ textTransform: "uppercase" }}
                      >
                        Top employees
                      </Typography>
                      <BarChart />
                    </Paper>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <MUIDataTable
                    data={entities}
                    columns={[
                      {
                        label: "Date / Time",
                        name: "datetime",
                      },
                      {
                        label: "Computer",
                        name: "computer",
                      },
                      {
                        label: "Process / URL",
                        name: "url",
                      },
                      {
                        label: "Duration",
                        name: "duration",
                      },
                      {
                        label: "App / Webpage",
                        name: "webpage",
                      },
                    ]}
                    options={{
                      filter: false,
                      selectableRowsHideCheckboxes: true,
                      selectableRowsHeader: false,
                      selectableRows: "none",
                      responsive: "simple",
                      download: false,
                      search: false,
                      print: false,
                      viewColumns: false,
                    }}
                  />
                </Grid>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value="2" sx={{ textTransform: "uppercase" }}>
            {"<"}sessions log{">"} Tab
          </TabPanel>
          <TabPanel value="3" sx={{ textTransform: "uppercase" }}>
            {"<"}time worked{">"} Tab
          </TabPanel>
          <TabPanel value="4" sx={{ textTransform: "uppercase" }}>
            {"<"}alerts{">"} Tab
          </TabPanel>
          <TabPanel value="5" sx={{ textTransform: "uppercase" }}>
            {"<"}snapshots{">"} Tab
          </TabPanel>
          <TabPanel value="6" sx={{ textTransform: "uppercase" }}>
            {"<"}emails{">"} Tab
          </TabPanel>
          <TabPanel value="7" sx={{ textTransform: "uppercase" }}>
            {"<"}file transfers{">"} Tab
          </TabPanel>
          <TabPanel value="8" sx={{ textTransform: "uppercase" }}>
            {"<"}online meetings{">"} Tab
          </TabPanel>
          <TabPanel value="9" sx={{ textTransform: "uppercase" }}>
            {"<"}keystrokes{">"} Tab
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
