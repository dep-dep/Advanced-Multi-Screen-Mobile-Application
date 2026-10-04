import { StyleSheet, Switch, Text, View } from "react-native";
import { useAppTheme } from "@/theme-context";

export function ThemeToggle() {
  const { isDark, setIsDark, colors } = useAppTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
    >
      <Text style={[styles.label, { color: colors.text }]}>
        {isDark ? "Dark mode" : "Light mode"}
      </Text>
      <Switch
        accessibilityLabel={isDark ? "Dark mode on" : "Dark mode off"}
        value={isDark}
        onValueChange={setIsDark}
        trackColor={{ false: colors.border, true: "#3797f0" }}
        thumbColor={colors.surface}
        ios_backgroundColor={colors.border}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 20,
  },
  label: {
    fontSize: 11,
    fontWeight: "600",
  },
});