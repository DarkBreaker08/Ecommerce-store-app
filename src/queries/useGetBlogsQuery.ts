import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { Blogs } from "../types";

export const useGetBlogsQuery = () => {
  const { apiGet } = useApi();

  const { data } = useQuery({
    queryKey: ["blog", "blog-post"],
    queryFn: async () => {
      return apiGet<Blogs>("blogs");
    },
    staleTime: 30000,
  });

  return { data };
};
