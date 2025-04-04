import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { Product, ProductDto } from "../types";

export const useModifyCartProductQuery = (id: string) => {
  const { apiPut } = useApi();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["cart-product", "modify"],
    mutationFn: async (payload: ProductDto) => {
      return apiPut<Product, ProductDto>(`cartProducts/${id}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart-product"],
      });
    },
  });

  return { mutate };
};
