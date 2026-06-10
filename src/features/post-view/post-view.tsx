import { usePost } from "@/api/hooks/usePost";
import { PostResponse } from "@/api/types/api-types";
import { Spacer } from "@/common/components/spacer";
import { vs } from "@/common/utils/scaling";
import { useAppTheme } from "@/hooks/use-app-theme";
import { router } from "expo-router";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStyles } from "./styles";

export const PostView = ({ postId }: { postId: string }) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);
  const { data, isLoading, isError, error } = usePost(postId);

  if (isLoading) {
    return <ActivityIndicator style={styles.center} />;
  }
  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Something went wrong</Text>
      </View>
    );
  }

  const post: PostResponse | undefined = data ?? undefined;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <View style={styles.container}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backButton}>Go Back</Text>
        </Pressable>
        <Spacer height={vs(16)} />
        <Text style={styles.title}>Post</Text>
        <Text style={styles.cardTitle}>{post?.title}</Text>
        <Text style={styles.cardMeta}>{post?.body}</Text>
      </View>
    </SafeAreaView>
  );
};
