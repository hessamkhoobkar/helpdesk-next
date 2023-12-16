"use client";

import { Button, Input, Textarea, Select, SelectItem } from "@nextui-org/react";

const priorities = [
  { value: "LOW", label: "Low" },
  { value: "MEDIUM", label: "Medium" },
  { value: "HIGH", label: "High" },
];

// todo: add form validation
// todo: make form submission work
// todo: handle error states and show user friendly error messages
// todo: add a loading state when the form is submitting
// todo: add a success message when the form is submitted successfully
// todo: add a reset button to reset the form
// todo: add a cancel button to go back to the tickets page
// todo: skeleton loading state for the form
// todo: fetch data for assignee and category select fields

// todo: Move ticket form to a separate component

export default function NewTicketsPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Add new ticket</h1>
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-start items-start gap-4">
          <div className="w-1/2 flex flex-col gap-6">
            <Input type="text" label="Subject" />
            <div className="w-full flex gap-4">
              <Select
                items={priorities}
                label="Priority"
                placeholder="Select a priority"
              >
                {(pirority) => (
                  <SelectItem key={pirority.value}>{pirority.label}</SelectItem>
                )}
              </Select>
              <Select
                items={priorities}
                label="Category"
                placeholder="Select a Category"
              >
                {(pirority) => (
                  <SelectItem key={pirority.value}>{pirority.label}</SelectItem>
                )}
              </Select>
            </div>
            <Select
              items={priorities}
              label="Assignee"
              placeholder="Select a Assignee"
            >
              {(pirority) => (
                <SelectItem key={pirority.value}>{pirority.label}</SelectItem>
              )}
            </Select>
          </div>
          <div className="w-1/2">
            <Textarea
              minRows={12}
              label="Description"
              placeholder="Please inter your ticket description here"
            />
          </div>
        </div>

        <div className="flex justify-start items-center gap-4">
          <Button color="primary">Submit</Button>
          <Button color="default">reset</Button>
        </div>
      </div>
    </div>
  );
}
