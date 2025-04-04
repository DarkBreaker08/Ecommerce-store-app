import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { Product, ProductDto } from "../types";

export const useCreateCartProductQuery = () => {
  const { apiPost } = useApi();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["cart-product", "create"],
    mutationFn: async (payload: ProductDto) => {
      return apiPost<Product, ProductDto>("cartProducts", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart-product"],
      });
    },
  });
  return { mutate };
};
