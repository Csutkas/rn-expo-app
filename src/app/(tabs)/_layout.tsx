import { Tabs } from "expo-router";
import React from "react";

import { IconSymbol } from "@/common/components/icon";
import { useAppTheme } from "@/hooks/use-app-theme";

export default function TabLayout() {
  const { theme } = useAppTheme();

  return (
    <Tabs
      key={theme.background}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.border,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: theme.tabIconSelected,
        tabBarInactiveTintColor: theme.tabIconDefault,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size="lg" name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <IconSymbol size="lg" name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
