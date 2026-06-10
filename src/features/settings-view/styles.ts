import { Theme } from "@/common/constants/theme";
import { vs } from "@/common/utils/scaling";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.background,
    },
    scrollView: {
      flex: 1,
      width: "100%",
    },
    scrollViewContent: {
      padding: vs(16),
      paddingBottom: vs(32),
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: { fontSize: vs(24), color: theme.text, fontWeight: "bold" },
  });
