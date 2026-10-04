import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, Text, View } from "react-native";

export function ReelDetails() {
  return (
    <View style={styles.bottomContent}>
      <View style={styles.creatorRow}>
        <Image
          source={require("@/assets/images/photo1.jpg")}
          style={styles.creatorImage}
        />
        <Text style={styles.creatorName}>pikachu_daily</Text>
        <View style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </View>
      </View>

      <Text style={styles.caption} numberOfLines={2}>
        Pikachu is ready to battle. Thunderbolt, go!
      </Text>
      <View style={styles.audioRow}>
        <Ionicons name="musical-notes" size={15} color="#fff" />
        <Text style={styles.audioText} numberOfLines={1}>
          Pikachu · Original audio
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContent: {
    paddingHorizontal: 16,
    paddingRight: 76,
    gap: 12,
  },
  creatorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  creatorImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  creatorName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  followButton: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 14,
  },
  followText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  caption: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 21,
  },
  audioRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  audioText: {
    color: "#fff",
    fontSize: 13,
    flexShrink: 1,
  },
});