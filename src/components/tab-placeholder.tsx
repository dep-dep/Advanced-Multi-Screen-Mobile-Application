import Ionicons from "@expo/vector-icons/Ionicons";
import type { ComponentProps } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppTheme } from "@/theme-context";

type IconName = ComponentProps<typeof Ionicons>["name"];

type TabPlaceholderProps = {
  icon: IconName;
  title: string;
};

export function TabPlaceholder({ icon, title }: TabPlaceholderProps) {
  const { colors } = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Ionicons name={icon} size={42} color={colors.icon} />
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: "#fff",
  },
  title: {
    color: "#111",
    fontSize: 20,
    fontWeight: "600",
  },
});
