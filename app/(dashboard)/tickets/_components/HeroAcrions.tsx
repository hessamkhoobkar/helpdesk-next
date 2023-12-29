"use client";

import axios from "axios";
import { Category } from "@prisma/client";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import PriorityChip from "./PriorityChip";
import StatusChip from "./StatusChip";

const priorities: string[] = ["LOW", "MEDIUM", "HIGH"];
const status: string[] = ["OPEN", "IN_PROGRESS", "COMPLETED", "CLOSED"];

export default function HeroAcrions({
  setStatus,
  setPriority,
  setCategory,
}: {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [categories, setCategories] = useState<Category[]>([]);

  async function getUsers() {
    const userResponse = await axios.get(`/api/categories`);
    const categories = userResponse.data;

    return categories;
  }

  useEffect(() => {
    getUsers().then((categories) => setCategories(categories));
  }, []);

  return (
    <div className="flex gap-4">
      <Select
        label="Filter by status"
        placeholder="Select an status"
        selectionMode="single"
        className="w-56"
        classNames={{
          trigger: "h-16",
          label: "top-4 left-4",
          innerWrapper: "pt-12 mt-1",
        }}
        onChange={(e) => setStatus(e.target.value)}
        renderValue={(status) => {
          return (
            <StatusChip
              status={
                status[0].textValue as
                  | "OPEN"
                  | "IN_PROGRESS"
                  | "COMPLETED"
                  | "CLOSED"
              }
            />
          );
        }}
      >
        {status.map((status) => (
          <SelectItem
            color="default"
            variant="flat"
            key={status}
            value={status}
            textValue={status}
          >
            <StatusChip
              status={status as "OPEN" | "IN_PROGRESS" | "COMPLETED" | "CLOSED"}
            />
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Filter by priority"
        placeholder="Select an priority"
        selectionMode="single"
        className="w-56"
        classNames={{
          trigger: "h-16",
          label: "top-4 left-4",
          innerWrapper: "pt-12 mt-1",
        }}
        onChange={(e) => setPriority(e.target.value)}
        renderValue={(priorities) => {
          return (
            <div className="p-1 px-4 max-w-max bg-background rounded-full">
              <PriorityChip
                priority={priorities[0].textValue as "LOW" | "MEDIUM" | "HIGH"}
              />
            </div>
          );
        }}
      >
        {priorities.map((priority) => (
          <SelectItem
            color="default"
            variant="flat"
            key={priority}
            value={priority}
            textValue={priority}
          >
            <div
              key={priority}
              className="p-1 px-4 max-w-max bg-background rounded-full"
            >
              <PriorityChip priority={priority as "LOW" | "MEDIUM" | "HIGH"} />
            </div>
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Filter by category"
        placeholder="Select an category"
        selectionMode="single"
        className="w-56"
        classNames={{
          trigger: "h-16",
          label: "top-4 left-4",
          innerWrapper: "pt-12 mt-1",
        }}
        onChange={(e) => setCategory(e.target.value)}
        items={categories}
      >
        {(category) => (
          <SelectItem color="primary" variant="flat" key={category.id}>
            {category.name}
          </SelectItem>
        )}
      </Select>
    </div>
  );
}
