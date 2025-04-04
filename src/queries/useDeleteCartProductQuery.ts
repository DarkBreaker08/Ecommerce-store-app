import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { Product } from "../types";

export const useDeleteCartProductQuery = () => {
  const { apiDelete } = useApi();
  const queryClient = useQueryClient();

  const { mutate: remove } = useMutation({
    mutationKey: ["cart-product", "delete"],
    mutationFn: async (id: string) => {
      return apiDelete<Product>(`cartProducts/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart-product"],
      });
    },
  });

  return { remove };
};
