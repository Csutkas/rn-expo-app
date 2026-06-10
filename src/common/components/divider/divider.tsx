import { vs } from "@/common/utils/scaling";
import { useAppTheme } from "@/hooks/use-app-theme";
import { View } from "react-native";
import { createStyles } from "./styles";

type DividerProps = {
  customMarginVertical?: number;
};

export const Divider = ({ customMarginVertical }: DividerProps) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);
  return (
    <View
      style={[
        styles.container,
        customMarginVertical !== undefined
          ? { marginVertical: vs(customMarginVertical) }
          : { marginVertical: vs(0) },
      ]}
    />
  );
};
