import { Colors } from "@/common/constants/theme";
import { ThemeProvider, useAppTheme } from "@/hooks/use-app-theme";
import { act, renderHook } from "@testing-library/react-native";
import React from "react";
import { useColorScheme } from "react-native";

const mockSetDarkMode = jest.fn();

jest.mock("@/common/store/app-store", () => ({
  useAppGlobalState: () => ({
    darkMode: "light",
    setDarkMode: mockSetDarkMode,
  }),
}));

jest.mock("react-native/Libraries/Utilities/useColorScheme", () => ({
  default: jest.fn(() => "light"),
}));

const mockUseColorScheme = useColorScheme as jest.Mock;

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe("useAppTheme", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseColorScheme.mockReturnValue("light");

    jest.requireMock("@/common/store/app-store").useAppGlobalState = () => ({
      darkMode: "light",
      setDarkMode: mockSetDarkMode,
    });
  });

  it("defaults to light theme based on system scheme", async () => {
    mockUseColorScheme.mockReturnValue("light");
    const { result } = await renderHook(() => useAppTheme(), { wrapper });

    expect(result.current.themeMode).toBe("light");
    expect(result.current.isDark).toBe(false);
    expect(result.current.theme).toEqual(Colors.light);
  });

  it("defaults to dark theme when system scheme is dark", async () => {
    mockUseColorScheme.mockReturnValue("dark");
    jest.requireMock("@/common/store/app-store").useAppGlobalState = () => ({
      darkMode: "dark",
      setDarkMode: mockSetDarkMode,
    });
    const { result } = await renderHook(() => useAppTheme(), { wrapper });

    expect(result.current.themeMode).toBe("dark");
    expect(result.current.isDark).toBe(true);
    expect(result.current.theme).toEqual(Colors.dark);
  });

  it("updates theme when setTheme is called", async () => {
    const { result } = await renderHook(() => useAppTheme(), { wrapper });

    expect(result.current.themeMode).toBe("light");

    await act(async () => {
      await result.current.setTheme("dark");
    });

    expect(result.current.themeMode).toBe("dark");
    expect(result.current.isDark).toBe(true);
    expect(result.current.theme).toEqual(Colors.dark);
  });

  it("calls setDarkMode on the store when setTheme is called", async () => {
    const { result } = await renderHook(() => useAppTheme(), { wrapper });

    await act(async () => {
      await result.current.setTheme("dark");
    });

    expect(mockSetDarkMode).toHaveBeenCalledWith("dark");
    expect(mockSetDarkMode).toHaveBeenCalledTimes(1);
  });

  it("syncs theme when darkMode changes in the store", async () => {
    let darkMode = "light";
    jest.requireMock("@/common/store/app-store").useAppGlobalState = () => ({
      darkMode,
      setDarkMode: mockSetDarkMode,
    });

    const { result, rerender } = await renderHook(() => useAppTheme(), {
      wrapper,
    });

    expect(result.current.themeMode).toBe("light");

    darkMode = "dark";
    await act(async () => {
      await rerender({});
    });

    expect(result.current.themeMode).toBe("dark");
  });
});
