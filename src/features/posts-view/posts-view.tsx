import { usePosts } from "@/api/hooks/usePosts";
import { PostResponse } from "@/api/types/api-types";
import { Spacer } from "@/common/components/spacer";
import { vs } from "@/common/utils/scaling";
import { useAppTheme } from "@/hooks/use-app-theme";
import { router } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStyles } from "./styles";

export const PostsView = () => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);
  const { data, isLoading, isError, error, refetch } = usePosts();

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

  const posts: PostResponse[] = data ?? [];

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <View style={styles.container}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backButton}>Go Back</Text>
        </Pressable>
        <Spacer height={vs(16)} />
        <Text style={styles.title}>Posts</Text>
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          onRefresh={refetch}
          refreshing={isLoading}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/(tabs)/home/post",
                  params: { id: item.id.toString() },
                })
              }
              style={styles.card}
            >
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardMeta}>{item.body}</Text>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
