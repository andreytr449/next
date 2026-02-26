import { useQuery } from "@tanstack/react-query";
import { getUserData } from "./user.api";

export function useUserQuery() {
  return useQuery({
    queryKey: ["user", "current"],
    queryFn: getUserData,
    retry: false,
  });
}
