import { useAppTheme } from "@/hooks/use-app-theme";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { createStyles } from "./styles";

export interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  label?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onPress,
  label,
  disabled = false,
  size = "md",
}) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  const getCheckboxSizeStyle = () => {
    switch (size) {
      case "sm":
        return styles.checkboxSm;
      case "lg":
        return styles.checkboxLg;
      default:
        return styles.checkboxMd;
    }
  };

  const getCheckmarkSizeStyle = () => {
    switch (size) {
      case "sm":
        return styles.checkmarkSm;
      case "lg":
        return styles.checkmarkLg;
      default:
        return styles.checkmarkMd;
    }
  };

  const checkboxStyle = [
    styles.checkbox,
    getCheckboxSizeStyle(),
    checked && styles.checkboxChecked,
    disabled && styles.checkboxDisabled,
  ];

  const checkmarkStyle = [
    styles.checkmark,
    getCheckmarkSizeStyle(),
    checked && styles.checkmarkVisible,
  ];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={checkboxStyle}>
        <View style={checkmarkStyle} />
      </View>
      {label && (
        <Text style={[styles.label, disabled && styles.labelDisabled]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};
