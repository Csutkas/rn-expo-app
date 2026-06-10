import { Colors } from "@/common/constants/theme";
import { useAppGlobalState } from "@/common/store/app-store";
import { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

export type ThemeMode = "light" | "dark";

const ThemeContext = createContext<{
  theme: typeof Colors.light;
  themeMode: ThemeMode;
  setTheme: (mode: ThemeMode) => Promise<void>;
  isDark: boolean;
} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme() ?? "light";
  const [themeMode, setThemeMode] = useState<ThemeMode>(systemScheme);
  const { darkMode, setDarkMode } = useAppGlobalState();

  useEffect(() => {
    if (darkMode === "light" || darkMode === "dark") {
      setThemeMode(darkMode);
    }
  }, [darkMode]);

  const setTheme = async (mode: ThemeMode) => {
    setThemeMode(mode);
    setDarkMode(mode);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: Colors[themeMode],
        themeMode,
        setTheme,
        isDark: themeMode === "dark",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useAppTheme must be used within ThemeProvider");
  return ctx;
}
