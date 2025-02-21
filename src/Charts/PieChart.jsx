import { colors } from "@mui/material";
import { Chart } from "react-google-charts";

 export default function PieChart() {
  const data = [
    ["Task", "Hours per Day"],
    ["Avslutade", 9],
    ["Registerade", 8],

  ];

  const options = {
    title: "Dagliga aktiviteter",
    colors: ["#f707ff", "#3700ff"],
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"110%"}
      height={"300px"}
    />
  );
}