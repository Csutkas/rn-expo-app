import { ThemeToggle } from "@/features/settings-view/components/theme-toggle/theme-toggle";
import { useAppTheme } from "@/hooks/use-app-theme";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

const mockSetTheme = jest.fn();
const mockTheme = {
  background: "#ffffff",
  primary: { 400: "#6366f1" },
  content1: { DEFAULT: "#000000" },
};

jest.mock("@/hooks/use-app-theme");
jest.mock("@/features/settings-view/components/theme-toggle/styles", () => ({
  createStyles: () => ({
    section: {},
    row: {},
    textContainer: {},
    label: {},
    sub: {},
  }),
}));

const mockUseAppTheme = useAppTheme as jest.Mock;

describe("ThemeToggle", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseAppTheme.mockReturnValue({
      themeMode: "light",
      isDark: false,
      setTheme: mockSetTheme,
      theme: mockTheme,
    });
  });

  it("renders the Dark mode label", async () => {
    const { getByText } = await render(<ThemeToggle />);
    expect(getByText("Dark mode")).toBeTruthy();
  });

  it('shows "Disabled" in light mode', async () => {
    const { getByText } = await render(<ThemeToggle />);
    expect(getByText("Disabled")).toBeTruthy();
  });

  it('shows "Enabled" in dark mode', async () => {
    mockUseAppTheme.mockReturnValue({
      themeMode: "dark",
      isDark: true,
      setTheme: mockSetTheme,
      theme: mockTheme,
    });
    const { getByText } = await render(<ThemeToggle />);
    expect(getByText("Enabled")).toBeTruthy();
  });

  it("calls setTheme('dark') when toggled on", async () => {
    const { getByRole } = await render(<ThemeToggle />);
    fireEvent(getByRole("switch"), "valueChange", true);
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("calls setTheme('light') when toggled off", async () => {
    mockUseAppTheme.mockReturnValue({
      themeMode: "dark",
      isDark: true,
      setTheme: mockSetTheme,
      theme: mockTheme,
    });
    const { getByRole } = await render(<ThemeToggle />);
    fireEvent(getByRole("switch"), "valueChange", false);
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });
});
