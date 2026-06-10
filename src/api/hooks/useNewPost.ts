import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../client";
import { NewPostPayload } from "../types/api-types";

export const useNewPost = () => {
  return useMutation<void, Error, NewPostPayload>({
    mutationFn: async (payload) => {
      return apiClient("/posts", {
        method: "POST",
        body: JSON.stringify({
          data: {
            type: "posts",
            attributes: payload,
          },
        }),
      });
    },
  });
};
