import { Image, StyleSheet, Text, View } from "react-native";
import { useAppTheme } from "@/theme-context";

export function GroupProfileBar() {
  const { colors } = useAppTheme();

  return (
    <View style={styles.profileHeader}>
      <Image
        source={require("@/assets/images/lessthan.png")}
        style={[styles.headerIcon, { tintColor: colors.icon }]}
      />

      <View style={styles.profileTitleGroup}>
        <Text style={[styles.profileTitle, { color: colors.text }]}>Group Profile</Text>
        <Text style={[styles.profileSubtext, { color: colors.secondaryText }]}>ootd_everyday</Text>
      </View>

      <Image
        source={require("@/assets/images/plus.png")}
        style={[styles.headerIcon, { tintColor: colors.icon }]}
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
  profileSubtext: {},
  profileTitleGroup: {
    alignItems: "center",
  },
  headerIcon: {
    width: 25,
    height: 25,
  },
});
