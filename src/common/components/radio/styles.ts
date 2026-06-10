import { Theme } from "@/common/constants/theme";
import { s, vs } from "@/common/utils/scaling";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    radio: {
      borderRadius: s(100),
      borderWidth: s(2),
      borderColor: theme.border,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
    },
    radioSm: {
      width: s(16),
      height: s(16),
    },
    radioMd: {
      width: s(20),
      height: s(20),
    },
    radioLg: {
      width: s(24),
      height: s(24),
    },
    radioSelected: {
      borderColor: theme.primary[300],
    },
    radioDisabled: {
      borderColor: theme.border,
      opacity: 0.5,
    },
    radioInner: {
      borderRadius: s(100),
      backgroundColor: theme.primary[500],
    },
    radioInnerSm: {
      width: s(8),
      height: s(8),
    },
    radioInnerMd: {
      width: s(10),
      height: s(10),
    },
    radioInnerLg: {
      width: s(12),
      height: s(12),
    },
    radioInnerVisible: {
      opacity: 1,
    },
    label: {
      marginLeft: s(12),
      fontSize: vs(16),
      color: theme.text,
    },
    labelSelected: {
      color: theme.text,
      fontWeight: "500",
    },
    labelDisabled: {
      opacity: 0.5,
    },
  });
