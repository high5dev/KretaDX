import React from "react";
import ApexCharts from "react-apexcharts";

const series = [
  {
    data: [470, 340, 280, 190, 80, 70],
  },
];
const options = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Donald Jurickova",
      "Brayden Crawford",
      "Ian Fransson",
      "Leo Gross",
      "Denis Lee",
      "Kate Sparrow",
    ],
  },
};

export default function BarChart() {
  return (
    <ApexCharts options={options} series={series} type="bar" height={200} />
  );
}
