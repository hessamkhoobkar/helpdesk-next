"use client";

import {
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
  CardHeader,
  Divider,
  Card,
  CardBody,
} from "@nextui-org/react";
import { useState } from "react";
import PriorityChip from "./PriorityChip";

export default function TicketForm({
  formTitle,
  categories,
  priorities,
}: {
  formTitle: string;
  categories: { id: number; name: string }[];
  priorities: { value: "LOW" | "MEDIUM" | "HIGH"; label: string }[];
}) {
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Card className="shadow">
      <CardHeader>
        <h1 className="text-xl font-bold">{formTitle}</h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="w-full flex flex-col gap-4">
          <Input
            size="lg"
            type="text"
            label="Subject"
            value={subject}
            onValueChange={setSubject}
          />

          <div className="w-full flex flex-col md:flex-row gap-4">
            <Select
              size="lg"
              variant="flat"
              items={priorities}
              label="Priority"
              placeholder="Select a priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              {(pirority) => (
                <SelectItem
                  key={pirority.value}
                  variant="flat"
                  textValue={pirority.value}
                >
                  <PriorityChip priority={pirority.value} />
                </SelectItem>
              )}
            </Select>
            <Select
              size="lg"
              variant="flat"
              label="Category"
              placeholder="Select a Category"
              value={category}
              items={categories}
              onChange={(e) => setCategory(e.target.value)}
            >
              {(category) => (
                <SelectItem key={category.id} color="primary" variant="flat">
                  {category.name}
                </SelectItem>
              )}
            </Select>
          </div>

          <Textarea
            size="lg"
            variant="flat"
            minRows={12}
            label="Description"
            value={description}
            onValueChange={setDescription}
          />

          <div className="flex flex-col md:flex-row gap-2">
            <Button className="w-full md:w-auto" size="lg" color="primary">
              Create your ticket
            </Button>
            <Button
              className="w-full md:w-auto"
              size="lg"
              color="default"
              variant="flat"
            >
              reset
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
