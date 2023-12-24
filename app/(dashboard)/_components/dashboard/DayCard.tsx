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
import { Ticket } from "@prisma/client";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DayCard({ tickets }: { tickets: Ticket[] }) {
  const dayData = [0, 0, 0, 0, 0, 0, 0];

  tickets.forEach((ticket) => {
    const date = new Date(ticket.createdAt);
    const day = date.getDay();
    dayData[day] += 1;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Tickets",
        data: dayData,
        backgroundColor: ["rgba(29, 85, 196, 0.2)"],
        borderColor: ["rgba(29, 85, 196, 1)"],
        borderWidth: 1,
      },
    ],
  };

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
