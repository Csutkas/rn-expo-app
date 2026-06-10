import { Theme } from "@/common/constants/theme";
import { vs } from "@/common/utils/scaling";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.background,
    },
    container: {
      flex: 1,
      width: "100%",
      paddingHorizontal: vs(16),
      paddingTop: vs(16),
    },
    flatListContainer: {
      flexGrow: 1,
      paddingBottom: vs(32),
    },
    title: { fontSize: vs(24), color: theme.text, fontWeight: "bold" },
    center: { flex: 1, justifyContent: "center", alignItems: "center" },
    card: {
      padding: vs(16),
      marginVertical: vs(8),
      backgroundColor: theme.content2.DEFAULT,
      borderRadius: vs(8),
      gap: vs(2),
    },
    cardTitle: { fontSize: vs(14), color: theme.text, fontWeight: "bold" },
    cardMeta: { fontSize: vs(12), color: theme.default[700], marginTop: vs(2) },
    link: { fontSize: vs(16), color: theme.primary[500] },
  });
