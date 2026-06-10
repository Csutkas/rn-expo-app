import { Theme } from "@/common/constants/theme";
import { vs } from "@/common/utils/scaling";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: vs(1),
      backgroundColor: theme.border,
      alignSelf: "center",
      width: "90%",
    },
  });
