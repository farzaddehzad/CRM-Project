import { blue, purple } from "@mui/material/colors";
import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["År", "Registrerade", "Avslutade"],
  ["2014", 1000, 400],
  ["2015", 1170, 460],
  ["2016", 660, 1120],
  ["2017", 1030, 540],
];

// Material chart options
const options = {
  chart: {
    title: "Företag Användare",
    subtitle: "Registerade och avslutade användare: 2014-2017",
  },
  colors: ["#f707ff", "#3700ff"], // Material colors
};

export default function BarChart() {
  return (
    <Chart
      // Note the usage of Bar and not BarChart for the material version
      chartType="Bar"
      data={data}
      options={options}
      width="100%"
      height="350px"
    />
  );
}

