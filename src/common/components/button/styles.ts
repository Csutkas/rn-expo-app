import { Theme } from "@/common/constants/theme";
import { s, vs } from "@/common/utils/scaling";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      borderRadius: s(8),
      alignItems: "center",
      justifyContent: "center",
    },

    // Size variants
    small: {
      paddingHorizontal: s(12),
      paddingVertical: vs(8),
    },

    medium: {
      paddingHorizontal: s(16),
      paddingVertical: vs(12),
    },

    large: {
      paddingHorizontal: s(20),
      paddingVertical: vs(16),
    },

    // Solid variants
    solidDefault: {
      backgroundColor: theme.background,
    },

    solidPrimary: {
      backgroundColor: theme.primary[500],
    },

    solidSecondary: {
      backgroundColor: theme.secondary[500],
    },

    solidSuccess: {
      backgroundColor: theme.success[600],
    },

    solidWarning: {
      backgroundColor: theme.warning[600],
    },

    solidDanger: {
      backgroundColor: theme.danger[600],
    },

    // Bordered variants
    borderedDefault: {
      backgroundColor: "transparent",
      borderWidth: s(1),
      borderColor: theme.border,
    },

    borderedPrimary: {
      backgroundColor: "transparent",
      borderWidth: s(1),
      borderColor: theme.primary[500],
    },

    borderedSecondary: {
      backgroundColor: "transparent",
      borderWidth: s(1),
      borderColor: theme.secondary[500],
    },

    borderedSuccess: {
      backgroundColor: "transparent",
      borderWidth: s(1),
      borderColor: theme.success[600],
    },

    borderedWarning: {
      backgroundColor: "transparent",
      borderWidth: s(1),
      borderColor: theme.warning[600],
    },

    borderedDanger: {
      backgroundColor: "transparent",
      borderWidth: s(1),
      borderColor: theme.danger[600],
    },

    // Light variants
    lightDefault: {
      backgroundColor: theme.background,
    },

    lightPrimary: {
      backgroundColor: theme.primary[50],
    },

    lightSecondary: {
      backgroundColor: theme.secondary[50],
    },

    lightSuccess: {
      backgroundColor: theme.success[50],
    },

    lightWarning: {
      backgroundColor: theme.warning[50],
    },

    lightDanger: {
      backgroundColor: theme.danger[50],
    },

    // Flat variants
    flatDefault: {
      backgroundColor: "transparent",
    },

    flatPrimary: {
      backgroundColor: "transparent",
    },

    flatSecondary: {
      backgroundColor: "transparent",
    },

    flatSuccess: {
      backgroundColor: "transparent",
    },

    flatWarning: {
      backgroundColor: "transparent",
    },

    flatDanger: {
      backgroundColor: "transparent",
    },

    // Disabled variants for solid
    solidDefaultDisabled: {
      backgroundColor: theme.border,
    },

    solidPrimaryDisabled: {
      backgroundColor: theme.border,
    },

    solidSecondaryDisabled: {
      backgroundColor: theme.border,
    },

    solidSuccessDisabled: {
      backgroundColor: theme.border,
    },

    solidWarningDisabled: {
      backgroundColor: theme.border,
    },

    solidDangerDisabled: {
      backgroundColor: theme.border,
    },

    // Disabled variants for bordered
    borderedDefaultDisabled: {
      backgroundColor: "transparent",
      borderWidth: s(1),
      borderColor: theme.border,
    },

    borderedPrimaryDisabled: {
      backgroundColor: "transparent",
      borderWidth: s(1),
      borderColor: theme.border,
    },

    borderedSecondaryDisabled: {
      backgroundColor: "transparent",
      borderWidth: s(1),
      borderColor: theme.border,
    },

    borderedSuccessDisabled: {
      backgroundColor: "transparent",
      borderWidth: s(1),
      borderColor: theme.border,
    },

    borderedWarningDisabled: {
      backgroundColor: "transparent",
      borderWidth: s(1),
      borderColor: theme.border,
    },

    borderedDangerDisabled: {
      backgroundColor: "transparent",
      borderWidth: s(1),
      borderColor: theme.border,
    },

    // Button text styles
    buttonText: {
      color: theme.background,
      fontWeight: "600",
    },

    // Solid text styles
    buttonTextSolidDefault: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextSolidPrimary: {
      color: theme.background,
      fontWeight: "600",
    },

    buttonTextSolidSecondary: {
      color: theme.background,
      fontWeight: "600",
    },

    buttonTextSolidSuccess: {
      color: theme.background,
      fontWeight: "600",
    },

    buttonTextSolidWarning: {
      color: theme.background,
      fontWeight: "600",
    },

    buttonTextSolidDanger: {
      color: theme.background,
      fontWeight: "600",
    },

    // Bordered text styles
    buttonTextBorderedDefault: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextBorderedPrimary: {
      color: theme.primary[500],
      fontWeight: "600",
    },

    buttonTextBorderedSecondary: {
      color: theme.secondary[500],
      fontWeight: "600",
    },

    buttonTextBorderedSuccess: {
      color: theme.success[600],
      fontWeight: "600",
    },

    buttonTextBorderedWarning: {
      color: theme.warning[600],
      fontWeight: "600",
    },

    buttonTextBorderedDanger: {
      color: theme.danger[600],
      fontWeight: "600",
    },

    // Light text styles
    buttonTextLightDefault: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextLightPrimary: {
      color: theme.primary[500],
      fontWeight: "600",
    },

    buttonTextLightSecondary: {
      color: theme.secondary[500],
      fontWeight: "600",
    },

    buttonTextLightSuccess: {
      color: theme.success[600],
      fontWeight: "600",
    },

    buttonTextLightWarning: {
      color: theme.warning[600],
      fontWeight: "600",
    },

    buttonTextLightDanger: {
      color: theme.danger[600],
      fontWeight: "600",
    },

    // Flat text styles
    buttonTextFlatDefault: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextFlatPrimary: {
      color: theme.primary[500],
      fontWeight: "600",
    },

    buttonTextFlatSecondary: {
      color: theme.secondary[500],
      fontWeight: "600",
    },

    buttonTextFlatSuccess: {
      color: theme.success[600],
      fontWeight: "600",
    },

    buttonTextFlatWarning: {
      color: theme.warning[600],
      fontWeight: "600",
    },

    buttonTextFlatDanger: {
      color: theme.danger[600],
      fontWeight: "600",
    },

    // Disabled text styles
    buttonTextSolidDefaultDisabled: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextSolidPrimaryDisabled: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextSolidSecondaryDisabled: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextSolidSuccessDisabled: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextSolidWarningDisabled: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextSolidDangerDisabled: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextBorderedDefaultDisabled: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextBorderedPrimaryDisabled: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextBorderedSecondaryDisabled: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextBorderedSuccessDisabled: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextBorderedWarningDisabled: {
      color: theme.text,
      fontWeight: "600",
    },

    buttonTextBorderedDangerDisabled: {
      color: theme.text,
      fontWeight: "600",
    },
  });
