"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

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
      hoverOffset: 20,
      borderWidth: 1,
    },
  ],
};

export default function CategoryCard() {
  return (
    <Card className="shadow">
      <CardHeader>My Tickets by category</CardHeader>
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
