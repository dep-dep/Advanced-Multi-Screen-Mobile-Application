import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, Text, View } from "react-native";

export function ReelActions() {
  return (
    <View style={styles.actionRail}>
      <View style={styles.actionButton}>
        <Ionicons name="heart-outline" size={34} color="#fff" />
        <Text style={styles.actionLabel}>Likes</Text>
      </View>

      <View style={styles.actionButton}>
        <Ionicons name="chatbubble-outline" size={32} color="#fff" />
        <Text style={styles.actionLabel}>28</Text>
      </View>

      <View style={styles.actionButton}>
        <Ionicons name="repeat-outline" size={34} color="#fff" />
        <Text style={styles.actionLabel}>2</Text>
      </View>

      <View style={styles.actionButton}>
        <Ionicons name="paper-plane-outline" size={32} color="#fff" />
      </View>

      <View style={styles.actionButton}>
        <Ionicons name="bookmark-outline" size={32} color="#fff" />
        <Text style={styles.actionLabel}>62</Text>
      </View>

      <View style={styles.actionButton}>
        <Ionicons name="menu" size={32} color="#fff" />
      </View>

      <Image
        source={require("@/assets/images/photo1.jpg")}
        style={styles.audioCover}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  actionRail: {
    position: "absolute",
    right: 12,
    bottom: 150,
    alignItems: "center",
    gap: 18,
  },
  actionButton: {
    width: 48,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  actionLabel: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  audioCover: {
    width: 38,
    height: 38,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#fff",
  },
});