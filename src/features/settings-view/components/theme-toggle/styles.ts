import { Theme } from "@/common/constants/theme";
import { s, vs } from "@/common/utils/scaling";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    section: {
      backgroundColor: theme.content2.DEFAULT,
      borderRadius: s(12),
      overflow: "hidden",
    },
    row: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
      paddingHorizontal: s(16),
      paddingVertical: vs(14),
    },
    textContainer: {
      gap: vs(2),
    },
    label: { fontSize: vs(14), color: theme.text },
    sub: { fontSize: vs(10), color: theme.default[700] },
  });
