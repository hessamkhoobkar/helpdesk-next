"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Tickets per day",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function DayCard() {
  return (
    <Card className="shadow">
      <CardHeader>Most active days</CardHeader>
      <Divider className="opacity-50" />
      <CardBody className="p-1">
        <Bar options={options} data={data} />
      </CardBody>
    </Card>
  );
}
