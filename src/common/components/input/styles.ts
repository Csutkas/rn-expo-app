import { Theme } from "@/common/constants/theme";
import { vs } from "@/common/utils/scaling";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderWidth: vs(1),
      borderColor: theme.border,
      borderRadius: vs(8),
      paddingHorizontal: vs(12),
      paddingVertical: vs(12),
      backgroundColor: theme.content2.DEFAULT,
    },
  });
