import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { Contact } from "../types";

export const useGetContactQuery = () => {
  const { apiGet } = useApi();

  const { data, isLoading } = useQuery({
    queryKey: ["contact-data"],
    queryFn: async () => {
      return apiGet<Contact>("contact");
    },
    staleTime: 30000,
  });

  return { data, isLoading };
};
