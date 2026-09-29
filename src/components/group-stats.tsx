import { Image, StyleSheet, Text, View } from "react-native";

const stats = [
  { value: "53", label: "Posts" },
  { value: "12", label: "Members" },
  { value: "1", label: "Admins" },
];

export function GroupStats() {
  return (
    <View style={styles.statsRow}>
      <View style={styles.profileImageFrame}>
        <Image
          source={require("@/assets/images/photo1.jpg")}
          style={styles.profileImage}
        />
      </View>

      {stats.map((stat) => (
        <View key={stat.label} style={styles.stat}>
          <Text style={styles.statValue}>{stat.value}</Text>
          <Text>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  profileImageFrame: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c85e8e",
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
