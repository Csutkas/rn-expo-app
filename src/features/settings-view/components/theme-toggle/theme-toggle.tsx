import { useAppTheme } from "@/hooks/use-app-theme";
import React from "react";
import { Switch, Text, View } from "react-native";

import { createStyles } from "./styles";

export const ThemeToggle = () => {
  const { theme, themeMode, setTheme, isDark } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={[styles.section]}>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={[styles.label]}>Dark mode</Text>
          <Text style={[styles.sub]}>
            {themeMode === "dark" ? "Enabled" : "Disabled"}
          </Text>
        </View>
        <Switch
          value={isDark}
          onValueChange={(val) => setTheme(val ? "dark" : "light")}
          trackColor={{ false: theme.background, true: theme.primary[400] }}
          thumbColor={theme.content1.DEFAULT}
        />
      </View>
    </View>
  );
};
