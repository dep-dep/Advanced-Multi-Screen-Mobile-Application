import { StyleSheet, Text, View } from "react-native";
import { useAppTheme } from "@/theme-context";

export function GroupBio() {
  const { colors } = useAppTheme();

  return (
    <View style={styles.bio}>
      <Text style={[styles.bioTitle, { color: colors.text }]}>OOTD Everyday</Text>
      <Text style={{ color: colors.text }}>Fit check!</Text>
      <Text style={{ color: colors.text }}>You know well hype you up.</Text>
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
