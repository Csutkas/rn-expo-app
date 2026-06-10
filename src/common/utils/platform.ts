import { Platform } from "react-native";

export const isWeb = Platform.OS === "web";

export const isNative =
  !isWeb && (Platform.OS === "android" || Platform.OS === "ios");

export const isIOS = !isWeb && Platform.OS === "ios";

export const isAndroid = !isWeb && Platform.OS === "android";
