import { Stack } from "expo-router";

// In case of deeplinking to an unopened app, make sure that this is always in the stack
// eslint-disable-next-line @typescript-eslint/naming-convention
export const unstable_settings = {
  initialRouteName: "index",
};

export default function HomeLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
