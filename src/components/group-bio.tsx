import { StyleSheet, Text, View } from "react-native";

export function GroupBio() {
  return (
    <View style={styles.bio}>
      <Text style={styles.bioTitle}>OOTD Everyday</Text>
      <Text>Fit check!</Text>
      <Text>You know well hype you up.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bio: {
    marginTop: 15,
    marginBottom: 15,
    gap: 2,
  },
  bioTitle: {
    fontWeight: "bold",
  },
});
