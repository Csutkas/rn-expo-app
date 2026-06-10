import { useAppTheme } from "@/hooks/use-app-theme";
import React from "react";
import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { createStyles } from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  variant?: "solid" | "bordered" | "light" | "flat";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export interface ButtonTextProps extends TextProps {
  children?: React.ReactNode;
  variant?: "solid" | "bordered" | "light" | "flat";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  color = "primary",
  size = "md",
  style,
  disabled,
  isLoading = false,
  ...props
}) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  const getSizeStyle = () => {
    switch (size) {
      case "sm":
        return styles.small;
      case "md":
        return styles.medium;
      case "lg":
        return styles.large;
      default:
        return styles.medium;
    }
  };

  const getVariantColorStyle = () => {
    const styleKey = disabled
      ? `${variant}${color.charAt(0).toUpperCase() + color.slice(1)}Disabled`
      : `${variant}${color.charAt(0).toUpperCase() + color.slice(1)}`;
    return (styles as any)[styleKey] || styles.solidPrimary;
  };

  const getActivityIndicatorColor = () => {
    if (variant === "solid") {
      return theme.background;
    }
    // For bordered, light, flat variants, use the color of the button
    switch (color) {
      case "primary":
        return theme.primary[500];
      case "secondary":
        return theme.secondary[500];
      case "success":
        return theme.success[600];
      case "warning":
        return theme.warning[600];
      case "danger":
        return theme.danger[600];
      default:
        return theme.primary[500];
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getSizeStyle(), getVariantColorStyle(), style]}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={getActivityIndicatorColor()} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export const ButtonText: React.FC<ButtonTextProps> = ({
  children,
  variant = "solid",
  color = "primary",
  disabled = false,
  style,
  ...props
}) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  const getTextStyle = () => {
    const styleKey = disabled
      ? `buttonText${variant.charAt(0).toUpperCase() + variant.slice(1)}${
          color.charAt(0).toUpperCase() + color.slice(1)
        }Disabled`
      : `buttonText${variant.charAt(0).toUpperCase() + variant.slice(1)}${
          color.charAt(0).toUpperCase() + color.slice(1)
        }`;
    return (styles as any)[styleKey] || styles.buttonText;
  };

  return (
    <Text style={[styles.buttonText, getTextStyle(), style]} {...props}>
      {children}
    </Text>
  );
};
