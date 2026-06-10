import { Spacer } from "@/common/components/spacer";
import { vs } from "@/common/utils/scaling";
import { useAppTheme } from "@/hooks/use-app-theme";
import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeToggle } from "./components/theme-toggle/theme-toggle";
import { createStyles } from "./styles";

export const SettingsView = () => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.row}>
          <Text style={styles.title}>Settings</Text>
          <Image
            source={require("../../../assets/images/tesco-logo.png")}
            style={{ width: 80, height: 40 }}
            placeholder="blurhash..."
            contentFit="contain"
          />
        </View>
        <Spacer height={vs(12)} />
        <ThemeToggle />

        {/* <Checkbox checked={true} onPress={() => {}} label="Example Checkbox" /> */}
        {/* <Select
          options={[
            { label: "Apple", value: 1 },
            { label: "Banana", value: 2 },
          ]}
          value={undefined}
          onValueChange={() => {}}
          placeholder="Select an option"
        /> */}
        {/* <RadioButton
          selected={true}
          onPress={() => {}}
          label="Example Radio Button"
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};
