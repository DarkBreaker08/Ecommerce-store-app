import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { UserEmail, UserEmailDto } from "../types";

export const useCreateConsumerEmailQuery = () => {
  const { apiPost } = useApi();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["email", "create"],
    mutationFn: async (payload: UserEmailDto) => {
      return apiPost<UserEmail, UserEmailDto>("customersEmails", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["email"],
      });
    },
  });
  return { mutate };
};
