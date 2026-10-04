import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { useAppTheme } from "@/theme-context";

export function MemberButton() {
  const { colors } = useAppTheme();

  return (
    <Pressable
      style={[
        styles.memberButton,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
      onPress={() => Alert.alert("Message Button pressed")}
    >
      <Text style={[styles.memberButtonText, { color: colors.text }]}>Member v</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  memberButton: {
    flex: 1,
    height: 46,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  memberButtonText: {
    fontWeight: "bold",
    fontSize: 14,
  },
});