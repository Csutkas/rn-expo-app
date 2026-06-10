import { useAppTheme } from "@/hooks/use-app-theme";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { createStyles } from "./styles";

export interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
  label?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  selected,
  onPress,
  label,
  disabled = false,
  size = "md",
}) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  const getRadioSizeStyle = () => {
    switch (size) {
      case "sm":
        return styles.radioSm;
      case "lg":
        return styles.radioLg;
      default:
        return styles.radioMd;
    }
  };

  const getInnerSizeStyle = () => {
    switch (size) {
      case "sm":
        return styles.radioInnerSm;
      case "lg":
        return styles.radioInnerLg;
      default:
        return styles.radioInnerMd;
    }
  };

  const radioStyle = [
    styles.radio,
    getRadioSizeStyle(),
    selected && styles.radioSelected,
    disabled && styles.radioDisabled,
  ];

  const radioInnerStyle = [
    styles.radioInner,
    getInnerSizeStyle(),
    selected && styles.radioInnerVisible,
  ];

  const labelStyle = [
    styles.label,
    selected && styles.labelSelected,
    disabled && styles.labelDisabled,
  ];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={radioStyle}>
        {selected && <View style={radioInnerStyle} />}
      </View>
      {label && <Text style={labelStyle}>{label}</Text>}
    </TouchableOpacity>
  );
};
