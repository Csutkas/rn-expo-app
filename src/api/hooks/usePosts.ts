import { useQuery } from "@tanstack/react-query";

import { getPosts } from "../endpoints/posts";
import { QUERY_KEYS } from "../endpoints/query-keys";

export function usePosts() {
  return useQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: () => getPosts(),
    staleTime: 1000 * 60 * 5,
  });
}
