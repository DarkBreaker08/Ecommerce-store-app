import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { Products } from "../types";

export const useGetCartProductsQuery = () => {
  const { apiGet } = useApi();

  const { data } = useQuery({
    queryKey: ["cart-product"],
    queryFn: async () => {
      return apiGet<Products>("cartProducts");
    },
    staleTime: 30000,
  });

  return { data };
};
