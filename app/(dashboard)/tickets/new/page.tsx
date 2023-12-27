import TicketForm from "../_components/TicketForm";
import axios from "axios";

// todo: add form validation
// todo: make form submission work
// todo: handle error states and show user friendly error messages
// todo: add a loading state when the form is submitting
// todo: add a success message when the form is submitted successfully
// todo: add a reset button to reset the form
// todo: add a cancel button to go back to the tickets page
// todo: skeleton loading state for the form

const priorities: { value: "LOW" | "MEDIUM" | "HIGH"; label: string }[] = [
  { value: "LOW", label: "Low" },
  { value: "MEDIUM", label: "Medium" },
  { value: "HIGH", label: "High" },
];

export default async function NewTicketsPage() {
  const response = await axios("http://localhost:3000/api/categories");
  const categories = response.data;

  return (
    <TicketForm
      formTitle="Create a new ticket"
      categories={categories}
      priorities={priorities}
    />
  );
}
