"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Low", "Meduim", "High"],
  datasets: [
    {
      data: [10, 9, 6],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      hoverOffset: 20,
      borderWidth: 1,
    },
  ],
};

export default function StatusCard() {
  return (
    <Card className="shadow">
      <CardHeader>My Tickets by status</CardHeader>
      <Divider className="opacity-50" />
      <CardBody className="p-1">
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
      </CardBody>
    </Card>
  );
}
