import React from "react";
import { useTheme } from "@mui/styles";
import ApexCharts from "react-apexcharts";

const series = [
  {
    name: "Sun",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Mon",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Tue",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Wed",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Thu",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Fri",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Sat",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
];

export default function HeatmapChart() {
  var theme = useTheme();

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={series}
      type="heatmap"
      height={200}
    />
  );
}

// ##################################################################
function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = "w" + (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }

  return series;
}

function themeOptions(theme) {
  return {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [theme.palette.primary.main],
  };
}
