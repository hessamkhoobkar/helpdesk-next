"use client";

import { useTheme } from "next-themes";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import DashboardCard from "./DashboardCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const data = {
  labels,
  datasets: [
    {
      label: "Tickets",
      data: [4, 0, 8, 1, 11, 0, 1],
      backgroundColor: ["rgba(29, 85, 196, 0.2)"],
      borderColor: ["rgba(29, 85, 196, 1)"],
      borderWidth: 1,
    },
  ],
};

export default function DayCard() {
  const { theme } = useTheme();
  const scalesColor = theme === "dark" ? "#131e30" : "#e6ebed";
  const ticksColor = theme === "dark" ? "#354252" : "#a0b0ba";

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: ticksColor },
        grid: {
          color: scalesColor,
        },
      },
      y: {
        ticks: { color: ticksColor },
        grid: {
          color: scalesColor,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <DashboardCard title="Most busy days">
      <Bar options={options} data={data} />
    </DashboardCard>
  );
}
