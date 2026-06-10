import { Spacer } from "@/common/components/spacer";
import { vs } from "@/common/utils/scaling";
import { useAppTheme } from "@/hooks/use-app-theme";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStyles } from "./styles";

export const HomeView = () => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Spacer height={vs(16)} />
        <Pressable onPress={() => router.push("/(tabs)/home/posts")}>
          <Text style={styles.link}>Posts</Text>
        </Pressable>
        <Spacer height={vs(12)} />
        <Pressable onPress={() => router.push("/(tabs)/home/new-post")}>
          <Text style={styles.link}>New Post</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
