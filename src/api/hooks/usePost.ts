import { useQuery } from "@tanstack/react-query";

import { getPostById } from "../endpoints/posts";
import { QUERY_KEYS } from "../endpoints/query-keys";

export function usePost(id: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.POST, id],
    queryFn: () => getPostById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}
