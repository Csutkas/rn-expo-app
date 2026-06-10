import { Theme } from "@/common/constants/theme";
import { s, vs } from "@/common/utils/scaling";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      position: "relative",
    },

    selectButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: s(16),
      paddingVertical: vs(12),
      backgroundColor: theme.background,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: s(8),
      minHeight: vs(48),
    },

    disabledButton: {
      backgroundColor: theme.background,
      borderColor: theme.border,
    },

    selectButtonText: {
      fontSize: vs(16),
      color: theme.text,
      flex: 1,
    },

    placeholderText: {
      color: theme.default[200],
    },

    disabledText: {
      color: theme.default[400],
    },

    chevron: {
      fontSize: vs(12),
      color: theme.default[200],
      marginLeft: s(8),
    },

    overlay: {
      flex: 1,
      backgroundColor: theme.content1.DEFAULT,
      justifyContent: "center",
      alignItems: "center",
    },

    dropdown: {
      backgroundColor: theme.background,
      borderRadius: s(8),
      borderWidth: 1,
      borderColor: theme.border,
      maxHeight: vs(400),
      width: s(200),
      shadowColor: theme.text,
      shadowOffset: {
        width: 0,
        height: vs(2),
      },
      shadowOpacity: 0.1,
      shadowRadius: s(4),
      elevation: 5,
    },

    optionsList: {
      maxHeight: vs(400),
    },

    option: {
      paddingHorizontal: s(16),
      paddingVertical: vs(12),
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },

    selectedOption: {
      backgroundColor: theme.primary[50],
    },

    optionText: {
      fontSize: vs(16),
      color: theme.text,
    },

    selectedOptionText: {
      color: theme.primary[600],
      fontWeight: "600",
    },
  });
