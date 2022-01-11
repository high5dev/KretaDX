import React, { useEffect } from "react";
import { Grid, Paper, Typography, Toolbar, AppBar, Box } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { useNavigate } from "react-router-dom";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import * as actions from "./dashboardActions";

export default function Dashboard() {
  const dispatch = useDispatch();
  const entities = useSelector(
    ({ dashboard }) => dashboard.entities,
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchData());
  }, [dispatch]);

  let navigate = useNavigate();
  const onRowClick = (rowData, rowMeta) => {
    const { dataIndex } = rowMeta;
    navigate({ pathname: `/employee/${dataIndex + 1}` });
  };

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
          <MUIDataTable
            data={entities}
            columns={[
              {
                label: "Timestamp",
                name: "datetime",
                options: {
                  setCellProps: () => {
                    return {
                      style: {
                        padding: "10px",
                        cursor: "pointer",
                      },
                    };
                  },
                  setCellHeaderProps: () => {
                    return {
                      style: {
                        padding: "10px",
                      },
                    };
                  },
                },
              },
              {
                label: "Employee",
                name: "employee",
                options: {
                  setCellProps: () => {
                    return {
                      style: {
                        padding: "10px",
                        cursor: "pointer",
                      },
                    };
                  },
                  setCellHeaderProps: () => {
                    return {
                      style: {
                        padding: "10px",
                      },
                    };
                  },
                },
              },
              {
                label: "Computer",
                name: "computer",
                options: {
                  setCellProps: () => {
                    return {
                      style: {
                        padding: "10px",
                        cursor: "pointer",
                      },
                    };
                  },
                  setCellHeaderProps: () => {
                    return {
                      style: {
                        padding: "10px",
                      },
                    };
                  },
                },
              },
              {
                label: "Policy",
                name: "policy",
                options: {
                  setCellProps: () => {
                    return {
                      style: {
                        padding: "10px",
                        cursor: "pointer",
                      },
                    };
                  },
                  setCellHeaderProps: () => {
                    return {
                      style: {
                        padding: "10px",
                      },
                    };
                  },
                },
              },
              {
                label: "Rule",
                name: "rule",
                options: {
                  setCellProps: () => {
                    return {
                      style: {
                        padding: "10px",
                        cursor: "pointer",
                      },
                    };
                  },
                  setCellHeaderProps: () => {
                    return {
                      style: {
                        padding: "10px",
                      },
                    };
                  },
                },
              },
              {
                label: "Action",
                name: "action",
                options: {
                  setCellProps: () => {
                    return {
                      style: {
                        padding: "10px",
                        cursor: "pointer",
                      },
                    };
                  },
                  setCellHeaderProps: () => {
                    return {
                      style: {
                        padding: "10px",
                      },
                    };
                  },
                },
              },
              {
                label: "Description",
                name: "description",
                options: {
                  setCellProps: () => {
                    return {
                      style: {
                        padding: "10px",
                        cursor: "pointer",
                      },
                    };
                  },
                  setCellHeaderProps: () => {
                    return {
                      style: {
                        padding: "10px",
                      },
                    };
                  },
                },
              },
            ]}
            options={{
              filter: false,
              selectableRowsHideCheckboxes: true,
              selectableRowsHeader: false,
              selectableRows: "none",
              responsive: "simple",
              onRowClick: onRowClick,
            }}
          />
        </Grid>
      </Box>
    </>
  );
}
