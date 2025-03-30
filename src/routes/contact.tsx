import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "../Components/Contact/Contact";

export const Route = createFileRoute("/contact")({
  component: Contact,
});
