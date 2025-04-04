import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { Product } from "../types";

export const useGetCartProductsQuery = () => {
  const { apiGet } = useApi();

  const { data } = useQuery({
    queryKey: ["cart-product"],
    queryFn: async () => {
      return apiGet<Product>("cartProducts");
    },
    staleTime: 30000,
  });
};
