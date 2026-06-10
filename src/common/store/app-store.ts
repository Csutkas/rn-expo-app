import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  darkMode: string;
  setDarkMode: (darkMode: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      darkMode: "light",
      setDarkMode: (darkMode) => set({ darkMode }),
    }),
    {
      name: "app-storage",
      storage: {
        getItem: async (name: string) => {
          const value = await AsyncStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name: string, value: unknown) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async (name: string) => {
          await AsyncStorage.removeItem(name);
        },
      },
      // "new parameter" is intentionally excluded from persistence so it always
      // resets to null on app restart, preventing stale override URLs.
      // partialize: (state) => {
      //   const { newParamName: _newParamName, ...persistedState } = state;
      //   return persistedState;
      // },
    },
  ),
);

// Global selectors
export const useAppGlobalState = () => {
  const darkMode = useAppStore((state) => state.darkMode);
  const setDarkMode = useAppStore((state) => state.setDarkMode);
  return { darkMode, setDarkMode };
};
