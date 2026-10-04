import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, Text, View } from "react-native";

export function ReelHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.headerButton}>
        <Ionicons name="add" size={34} color="#fff" />
      </View>

      <View style={styles.headerModes}>
        <Text style={styles.activeMode}>Reels</Text>
        <Text style={styles.inactiveMode}>Friends</Text>
        <View style={styles.friendImages}>
          <Image
            source={require("@/assets/images/grid1.jpg")}
            style={[styles.friendImage, styles.friendImageFirst]}
          />
          <Image
            source={require("@/assets/images/grid2.jpg")}
            style={[styles.friendImage, styles.friendImageSecond]}
          />
          <Image
            source={require("@/assets/images/grid3.jpg")}
            style={[styles.friendImage, styles.friendImageThird]}
          />
        </View>
      </View>

      <View style={styles.headerButton}>
        <Ionicons name="options-outline" size={30} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },
  headerButton: {
    width: 36,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },
  headerModes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  activeMode: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  inactiveMode: {
    color: "#626262",
    fontSize: 22,
    fontWeight: "700",
  },
  friendImages: {
    flexDirection: "row",
    width: 62,
    height: 34,
  },
  friendImage: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#fff",
    position: "absolute",
  },
  friendImageFirst: {
    left: 0,
    zIndex: 3,
  },
  friendImageSecond: {
    left: 15,
    zIndex: 2,
  },
  friendImageThird: {
    left: 30,
    zIndex: 1,
  },
});