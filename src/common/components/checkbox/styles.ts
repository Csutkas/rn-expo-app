import { Theme } from "@/common/constants/theme";
import { s, vs } from "@/common/utils/scaling";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: vs(8),
    },
    checkbox: {
      borderWidth: s(2),
      borderColor: theme.border,
      backgroundColor: theme.background,
      borderRadius: s(4),
      justifyContent: "center",
      alignItems: "center",
    },
    checkboxSm: {
      width: s(16),
      height: s(16),
    },
    checkboxMd: {
      width: s(20),
      height: s(20),
    },
    checkboxLg: {
      width: s(24),
      height: s(24),
    },
    checkboxChecked: {
      backgroundColor: theme.primary[500],
      borderColor: theme.primary[500],
    },
    checkboxDisabled: {
      backgroundColor: theme.background,
      borderColor: theme.border,
      opacity: 0.6,
    },
    checkmark: {
      borderColor: theme.background,
      borderBottomWidth: 2,
      borderRightWidth: 2,
      transform: [{ rotate: "45deg" }],
      opacity: 0,
    },
    checkmarkVisible: {
      opacity: 1,
    },
    checkmarkSm: {
      width: s(4),
      height: s(8),
      marginBottom: s(2),
    },
    checkmarkMd: {
      width: s(5),
      height: s(10),
      marginBottom: s(2),
    },
    checkmarkLg: {
      width: s(6),
      height: s(12),
      marginBottom: s(3),
    },
    label: {
      marginLeft: s(12),
      fontSize: vs(16),
      color: theme.text,
      flexShrink: 1,
    },
    labelDisabled: {
      color: theme.default[200],
      opacity: 0.6,
    },
  });
