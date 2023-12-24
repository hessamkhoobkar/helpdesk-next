"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import DashboardCard from "./DashboardCard";
import { Category, Ticket } from "@prisma/client";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CategoryCard({
  tickets,
  categories,
}: {
  tickets: Ticket[];
  categories: Category[];
}) {
  const labels = categories.map((category) => category.name);
  const ticketCount = categories.map((category) => {
    return tickets.filter((ticket) => ticket.categoryId === category.id).length;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        data: ticketCount,
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
