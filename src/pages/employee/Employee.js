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
import DataTable from "../../components/DataTable";
import Profile from "../../components/Profile";
import { useParams } from "react-router";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ListIcon from "@mui/icons-material/List";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PhotoIcon from "@mui/icons-material/Photo";
import EmailIcon from "@mui/icons-material/Email";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import VideocamIcon from "@mui/icons-material/Videocam";
import PrintIcon from "@mui/icons-material/Print";
import KeyboardIcon from "@mui/icons-material/Keyboard";

export default function Employee(props) {
  const { id } = useParams();
  useEffect(() => {
    console.log("id", id);
  });

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
                icon={<LaptopChromebookIcon />}
                label="activity log"
                value="1"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<ListIcon />}
                label="sessions log"
                value="2"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<AccessTimeFilledIcon />}
                label="time worked"
                value="3"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<NotificationsIcon />}
                label="alerts"
                value="4"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<PhotoIcon />}
                label="snapshots"
                value="5"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<EmailIcon />}
                label="emails"
                value="6"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<FileCopyIcon />}
                label="file transfers"
                value="7"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<VideocamIcon />}
                label="online meetings"
                value="8"
                sx={{ py: 0, fontSize: 12 }}
              />
              <Tab
                iconPosition="start"
                icon={<KeyboardIcon />}
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
                  <DataTable />
                </Grid>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            {"<"}sessions log{">"} Tab
          </TabPanel>
          <TabPanel value="3">
            {"<"}time worked{">"} Tab
          </TabPanel>
          <TabPanel value="4">
            {"<"}alerts{">"} Tab
          </TabPanel>
          <TabPanel value="5">
            {"<"}snapshots{">"} Tab
          </TabPanel>
          <TabPanel value="6">
            {"<"}emails{">"} Tab
          </TabPanel>
          <TabPanel value="7">
            {"<"}file transfers{">"} Tab
          </TabPanel>
          <TabPanel value="8">
            {"<"}online meetings{">"} Tab
          </TabPanel>
          <TabPanel value="9">
            {"<"}keystrokes{">"} Tab
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
