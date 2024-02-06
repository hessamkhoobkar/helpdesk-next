"use client";

import axios from "axios";
import { ReactNode, startTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import PriorityChip from "./PriorityChip";
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
  User,
} from "@nextui-org/react";
import StatusChip from "./StatusChip";
import { User as Usertype } from "@prisma/client";
import { GetUserDetails } from "./helper/UserDetails";
import { GetCategoryName } from "./helper/CategoryName";

export default function TicketForm({
  formTitle,
  categories,
  priorities,
  status,
  currentUserId,
  users,
  ticket,
  reqType,
}: {
  formTitle: string;
  categories: { id: number; name: string }[];
  priorities: string[];
  status: string[];
  currentUserId: string;
  users: Usertype[];
  ticket?: any;
  reqType: "PUT" | "POST";
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const categoriesList = categories.map((category) => category.id.toString());

  async function createTicket(data: any, currentUserId: string) {
    setIsLoading(true);
    let response;
    const ticketData = {
      subject: data.subject,
      description: data.description,
      priority: data.priority,
      categoryId: data.category,
      userId: currentUserId,
      status: data.status,
      assigneeId: data.assignee,
    };

    try {
      if (reqType === "PUT") {
        response = await axios.put(`/api/tickets`, {
          id: ticket?.id,
          ...ticketData,
        });
      }

      if (reqType === "POST") {
        response = await axios.post(`/api/tickets`, ticketData);
      }

      setIsLoading(false);

      console.log("Ticket created:", response?.data);

      startTransition(() => router.push("/tickets"));
      startTransition(() => router.refresh());
    } catch (error) {
      console.error("Error creating ticket:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      subject: ticket?.subject || "",
      description: ticket?.description || "",
      priority: ticket?.priority || "LOW",
      status: ticket?.status || "OPEN",
      category: ticket?.category?.id || "",
      assignee: ticket?.assignee?.id || "",
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
          onSubmit={handleSubmit((data) => {
            createTicket(data, currentUserId);
          })}
        >
          <Controller
            name="subject"
            control={control}
            rules={{
              required: "Subject is required",
              minLength: {
                value: 5,
                message: "Subject must be at least 5 characters",
              },
              maxLength: {
                value: 60,
                message: "Subject must be at most 60 characters",
              },
            }}
            render={({ field }) => (
              <Input
                size="lg"
                type="text"
                label="Subject"
                isInvalid={!!errors.subject}
                errorMessage={errors.subject && `${errors.subject?.message}`}
                {...field}
              />
            )}
          />

          <div className="w-full flex flex-col md:flex-row gap-4">
            <Controller
              name="priority"
              control={control}
              rules={{ required: "Priority is required" }}
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
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
                  selectedKeys={value ? [value] : []}
                  renderValue={() => (
                    <div className="p-1 px-4 max-w-max bg-background rounded-full">
                      <PriorityChip
                        priority={value as "LOW" | "MEDIUM" | "HIGH"}
                      />
                    </div>
                  )}
                >
                  {priorities.map((priority) => (
                    <SelectItem
                      key={priority}
                      variant="flat"
                      value={priority}
                      textValue={priority}
                    >
                      <div className="p-1 px-4 max-w-max bg-background rounded-full">
                        <PriorityChip
                          priority={priority as "LOW" | "MEDIUM" | "HIGH"}
                        />
                      </div>
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <Controller
              name="category"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <Select
                  selectionMode="single"
                  size="lg"
                  variant="flat"
                  label="Category"
                  placeholder="Select a Category"
                  className="h-20"
                  classNames={{
                    trigger:
                      "justify-start group-data-[has-label=true]:h-20 pt-5",
                    innerWrapper: "group-data-[has-label=true]:pt-4",
                  }}
                  onBlur={onBlur}
                  onChange={onChange}
                  onSelectionChange={onChange}
                  isInvalid={fieldState.invalid}
                  selectedKeys={value ? [value.toString()] : []}
                  renderValue={() => (
                    <div className="p-1 px-4 max-w-max bg-background rounded-full">
                      <GetCategoryName
                        id={parseInt(value)}
                        categories={categories}
                      />
                    </div>
                  )}
                >
                  {categoriesList.map((category) => (
                    <SelectItem
                      key={category}
                      color="primary"
                      variant="flat"
                      value={category}
                      textValue={category}
                    >
                      <GetCategoryName
                        id={parseInt(category)}
                        categories={categories}
                      />
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
          </div>

          <div className="w-full flex flex-col md:flex-row gap-4">
            <Controller
              name="status"
              control={control}
              rules={{ required: "status is required" }}
              render={({ field: { onChange, onBlur, value }, fieldState }) => {
                return (
                  <Select
                    size="lg"
                    label="Status"
                    className="h-20"
                    classNames={{
                      trigger:
                        "justify-start group-data-[has-label=true]:h-20 pt-5",
                      innerWrapper: "group-data-[has-label=true]:pt-4",
                    }}
                    onBlur={onBlur}
                    onChange={onChange}
                    isInvalid={fieldState.invalid}
                    selectedKeys={value ? [value] : []}
                    renderValue={() => {
                      return (
                        <StatusChip
                          status={
                            value as
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
                        key={status}
                        variant="flat"
                        value={status}
                        textValue={status}
                      >
                        <StatusChip
                          status={
                            status as
                              | "OPEN"
                              | "IN_PROGRESS"
                              | "COMPLETED"
                              | "CLOSED"
                          }
                        />
                      </SelectItem>
                    ))}
                  </Select>
                );
              }}
            />
            <Controller
              name="assignee"
              control={control}
              render={({ field: { onChange, onBlur, value }, fieldState }) => {
                return (
                  <Select
                    selectionMode="single"
                    size="lg"
                    label="Assignee"
                    className="h-20"
                    classNames={{
                      trigger:
                        "justify-start group-data-[has-label=true]:h-20 pt-5",
                      innerWrapper:
                        "items-start group-data-[has-label=true]:pt-3",
                    }}
                    onBlur={onBlur}
                    onChange={onChange}
                    isInvalid={fieldState.invalid}
                    selectedKeys={value ? [value] : []}
                    renderValue={() => (
                      <div key={value && value.id}>
                        <GetUserDetails id={value} users={users} />
                      </div>
                    )}
                  >
                    {users.map((user) => (
                      <SelectItem
                        key={user.id}
                        color="primary"
                        variant="flat"
                        value={user.id}
                        textValue={user.id}
                      >
                        <GetUserDetails id={user.id} users={users} />
                      </SelectItem>
                    ))}
                  </Select>
                );
              }}
            />
          </div>

          <Controller
            name="description"
            control={control}
            rules={{
              required: "Description is required",
              minLength: {
                value: 5,
                message: "Description must be at least 5 characters",
              },
              maxLength: {
                value: 250,
                message: "Description must be at most 250 characters",
              },
            }}
            render={({ field }) => (
              <Textarea
                {...field}
                size="lg"
                variant="flat"
                minRows={12}
                label="Description"
                isInvalid={!!errors.description}
                errorMessage={
                  errors.description && `${errors.description?.message}`
                }
              />
            )}
          />

          <div className="flex flex-col md:flex-row gap-2">
            <Button
              size="lg"
              color="primary"
              type="submit"
              className="w-full md:w-auto"
              isLoading={isLoading}
            >
              {isLoading
                ? "Submitting ..."
                : reqType === "PUT"
                ? "Update this ticket"
                : "Create your ticket"}
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
