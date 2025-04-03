import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { CustomerOpinion, CustomerOpinionDto } from "../types";

export const useCreateConsumerOpionionQuery = () => {
  const { apiPost } = useApi();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["opinion", "create"],
    mutationFn: async (payload: CustomerOpinionDto) => {
      return apiPost<CustomerOpinion, CustomerOpinionDto>(
        "customersOpinions",
        payload
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["opinion"],
      });
    },
  });

  return { mutate };
};
