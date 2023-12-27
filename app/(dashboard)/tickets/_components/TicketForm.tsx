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
import { Controller, useForm } from "react-hook-form";
import PriorityChip from "./PriorityChip";
import { useRouter } from "next/navigation";
import axios from "axios";

async function createTicket(
  data: any,
  cuurentUserId: string,
  setIsLoading: (isLoading: boolean) => void
) {
  setIsLoading(true);

  try {
    const response = await axios.post("http://localhost:3000/api/tickets", {
      subject: data.subject,
      description: data.description,
      priority: data.priority,
      categoryId: data.category,
      userId: cuurentUserId,
    });

    console.log("Ticket created:", response.data);
  } catch (error) {
    console.error("Error creating ticket:", error);
  } finally {
    setIsLoading(false);
  }
}

export default function TicketForm({
  formTitle,
  categories,
  priorities,
  cuurentUserId,
}: {
  formTitle: string;
  categories: { id: number; name: string }[];
  priorities: string[];
  cuurentUserId: string;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      subject: "",
      description: "",
      priority: "LOW",
      category: "",
    },
  });

  return (
    <Card className="shadow">
      <CardHeader className="p-4">
        <h1 className="text-xl font-bold">{formTitle}</h1>
      </CardHeader>
      <Divider />
      <CardBody className="p-4">
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(async (data) => {
            await createTicket(data, cuurentUserId, setIsLoading);
            router.push("/tickets");
          })}
        >
          <Input
            size="lg"
            type="text"
            label="Subject"
            isInvalid={!!errors.subject}
            errorMessage={errors.subject && `${errors.subject?.message}`}
            {...register("subject", {
              required: "Subject is required",
              minLength: {
                value: 5,
                message: "Subject must be at least 5 characters",
              },
              maxLength: {
                value: 60,
                message: "Subject must be at most 60 characters",
              },
            })}
          />

          <div className="w-full flex flex-col md:flex-row gap-4">
            <Controller
              name="priority"
              control={control}
              rules={{ required: "Priority is required" }}
              render={({ field: { onChange, onBlur, value }, fieldState }) => {
                return (
                  <Select
                    size="lg"
                    label="Priority"
                    className="h-20"
                    classNames={{
                      trigger:
                        "justify-start group-data-[has-label=true]:h-20 pt-5",
                      innerWrapper: "group-data-[has-label=true]:pt-4",
                    }}
                    onBlur={onBlur}
                    onChange={onChange}
                    isInvalid={fieldState.invalid}
                    errorMessage={errors.priority && errors.priority.message}
                    selectedKeys={value ? [value] : []}
                    renderValue={() => {
                      return (
                        <div className="p-1 px-4 max-w-max bg-background rounded-full">
                          <PriorityChip
                            priority={value as "LOW" | "MEDIUM" | "HIGH"}
                          />
                        </div>
                      );
                    }}
                  >
                    {priorities.map((priority) => (
                      <SelectItem
                        key={priority}
                        variant="flat"
                        value={priority}
                        textValue={priority}
                      >
                        <PriorityChip
                          priority={priority as "LOW" | "MEDIUM" | "HIGH"}
                        />
                      </SelectItem>
                    ))}
                  </Select>
                );
              }}
            />
            <Select
              size="lg"
              variant="flat"
              label="Category"
              placeholder="Select a Category"
              className="h-20"
              classNames={{
                trigger: "justify-start group-data-[has-label=true]:h-20 pt-5",
                innerWrapper: "group-data-[has-label=true]:pt-4",
              }}
              items={categories}
              isInvalid={!!errors.category}
              {...register("category", { required: true })}
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
            isInvalid={!!errors.description}
            errorMessage={
              errors.description && `${errors.description?.message}`
            }
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 5,
                message: "Description must be at least 5 characters",
              },
              maxLength: {
                value: 250,
                message: "Description must be at most 250 characters",
              },
            })}
          />

          <div className="flex flex-col md:flex-row gap-2">
            <Button
              size="lg"
              color="primary"
              type="submit"
              className="w-full md:w-auto"
              isLoading={isLoading}
            >
              Create your ticket
            </Button>
            <Button
              size="lg"
              color="default"
              variant="flat"
              className="w-full md:w-auto"
              onPress={() => reset()}
            >
              reset
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
