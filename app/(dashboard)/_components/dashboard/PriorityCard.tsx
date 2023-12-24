"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import DashboardCard from "./DashboardCard";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Low", "Meduim", "High"],
  datasets: [
    {
      data: [10, 9, 6],
      backgroundColor: [
        "rgba(29, 85, 196, 0.2)",
        "rgba(226, 124, 0, 0.2)",
        "rgba(226, 43, 34, 0.2)",
      ],
      borderColor: [
        "rgba(29, 85, 196, 1)",
        "rgba(226, 124, 0, 1)",
        "rgba(226, 43, 34, 1)",
      ],
      hoverOffset: 20,
      borderWidth: 1,
    },
  ],
};

export default function PriorityCard() {
  return (
    <DashboardCard title="My tickets by Priority">
      <Doughnut
        data={data}
        options={{
          aspectRatio: 2,
          radius: "90%",
          plugins: {
            legend: {
              position: "right",
            },
          },
        }}
      />
    </DashboardCard>
  );
}
