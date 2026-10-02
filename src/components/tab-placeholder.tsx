import Ionicons from "@expo/vector-icons/Ionicons";
import type { ComponentProps } from "react";
import { StyleSheet, Text, View } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

type TabPlaceholderProps = {
  icon: IconName;
  title: string;
};

export function TabPlaceholder({ icon, title }: TabPlaceholderProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={42} color="#111" />
      <Text style={styles.title}>{title}</Text>
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
