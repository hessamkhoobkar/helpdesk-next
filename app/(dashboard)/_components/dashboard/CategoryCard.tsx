"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import DashboardCard from "./DashboardCard";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Bug report",
    "General Inquiry",
    "Billing Issue",
    "Feature Request",
    "Invoice Inquiries",
    "Miscellaneous",
  ],
  datasets: [
    {
      data: [4, 8, 2, 2, 4, 5],
      backgroundColor: [
        "rgba(29, 85, 196, 0.2)",
        "rgba(226, 124, 0, 0.2)",
        "rgba(226, 43, 34, 0.2)",
        "rgba(84, 69, 192, 0.2)",
        "rgba(129, 64, 169, 0.2)",
        "rgba(174, 59, 118, 0.2)",
        "rgba(167, 74, 43, 0.2)",
      ],
      borderColor: [
        "rgba(29, 85, 196, 1)",
        "rgba(226, 124, 0, 1)",
        "rgba(226, 43, 34, 1)",
        "rgba(84, 69, 192, 1)",
        "rgba(129, 64, 169, 1)",
        "rgba(174, 59, 118, 1)",
        "rgba(167, 74, 43, 1)",
      ],
      hoverOffset: 20,
      borderWidth: 1,
    },
  ],
};

export default function CategoryCard() {
  return (
    <DashboardCard title="My tickets by category">
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
