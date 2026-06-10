import { apiClient } from "../client";
import { PostResponse } from "../types/api-types";

export async function getPosts(): Promise<PostResponse[]> {
  return apiClient<PostResponse[]>("/posts");
}

export async function getPostById(id: string): Promise<PostResponse> {
  return apiClient<PostResponse>(`/posts/${id}`);
}
