"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import DashboardCard from "./DashboardCard";
import { Ticket } from "@prisma/client";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PriorityCard({ tickets }: { tickets: Ticket[] }) {
  const low = tickets.filter((ticket) => ticket.priority === "LOW").length;
  const medium = tickets.filter(
    (ticket) => ticket.priority === "MEDIUM"
  ).length;
  const high = tickets.filter((ticket) => ticket.priority === "HIGH").length;

  const data = {
    labels: ["Low", "Meduim", "High"],
    datasets: [
      {
        data: [low, medium, high],
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
