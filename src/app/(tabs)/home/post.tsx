import { PostView } from "@/features/post-view/post-view";
import { useLocalSearchParams } from "expo-router";
import React from "react";

export default function PostScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <PostView postId={id} />;
}
