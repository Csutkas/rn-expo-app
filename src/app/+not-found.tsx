import { Theme } from "@/common/constants/theme";
import { vs } from "@/common/utils/scaling";
import { useAppTheme } from "@/hooks/use-app-theme";

import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    content: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: vs(24),
      gap: vs(12),
    },
    title: {
      fontSize: vs(32),
      fontWeight: "700",
    },
    subtitle: {
      fontSize: vs(20),
      fontWeight: "600",
    },
    description: {
      fontSize: vs(16),
      textAlign: "center",
      color: theme.text,
    },
  });

export default function NotFoundScreen() {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.background }]}
      >
        <View style={styles.content}>
          <Text style={styles.title}>404</Text>
          <Text style={styles.subtitle}>Page not found</Text>
          <Text style={[styles.description, { color: theme.text }]}>
            The page you're looking for doesn't exist.
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}
