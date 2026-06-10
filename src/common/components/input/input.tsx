import { useAppTheme } from "@/hooks/use-app-theme";
import { TextInput, TextInputProps } from "react-native";
import { createStyles } from "./styles";

interface InputProps extends TextInputProps {}

export const Input = ({ placeholder, ...props }: InputProps) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <TextInput placeholder={placeholder} style={styles.container} {...props} />
  );
};
