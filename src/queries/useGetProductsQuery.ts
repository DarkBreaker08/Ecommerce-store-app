import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { Products } from "../types";

export const useGetProductsQuery = () => {
  const { apiGet } = useApi();

  const { data } = useQuery({
    queryKey: ["products", "shop"],
    queryFn: async () => {
      return apiGet<Products>("products");
    },
    staleTime: 30000,
  });

  return { data };
};
