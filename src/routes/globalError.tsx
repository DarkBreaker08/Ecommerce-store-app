import { createFileRoute } from "@tanstack/react-router";
import { GlobalError } from "../Components/GlobalError/GlobalError";

export const Route = createFileRoute("/globalError")({
  component: GlobalError,
});
