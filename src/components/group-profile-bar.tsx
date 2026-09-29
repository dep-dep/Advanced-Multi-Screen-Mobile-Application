import { Image, StyleSheet, Text, View } from "react-native";

export function GroupProfileBar() {
  return (
    <View style={styles.profileHeader}>
      <Image
        source={require("@/assets/images/lessthan.png")}
        style={styles.headerIcon}
      />

      <View style={styles.profileTitleGroup}>
        <Text style={styles.profileTitle}>Group Profile</Text>
        <Text style={styles.profileSubtext}>ootd_everyday</Text>
      </View>

      <Image
        source={require("@/assets/images/plus.png")}
        style={styles.headerIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  profileTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  profileSubtext: {
    color: "#bcbcbc",
  },
  profileTitleGroup: {
    alignItems: "center",
  },
  headerIcon: {
    width: 25,
    height: 25,
  },
});
