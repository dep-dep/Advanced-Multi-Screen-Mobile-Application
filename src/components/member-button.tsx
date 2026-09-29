import { Alert, Pressable, StyleSheet, Text } from "react-native";

export function MemberButton() {
  return (
    <Pressable
      style={styles.memberButton}
      onPress={() => Alert.alert("Message Button pressed")}
    >
      <Text style={styles.memberButtonText}>Member v</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  memberButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#ececec",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  memberButtonText: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
