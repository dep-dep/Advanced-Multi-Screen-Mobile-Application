import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";
import { useAppTheme } from "@/theme-context";

export const Header = () => {
  return <Stack.Screen options={{ headerShown: false }} />;
};

export function HeaderHome() {
  const { colors } = useAppTheme();

  return (
    <View style={styles.profileHeaderHome}>
      <Ionicons
        name="add-outline"
        size={38}
        color={colors.icon}
        style={styles.headerIconHome}
      />

      <View style={styles.profileTitleGroupHome}>
        <Text style={[styles.profileTitleHome, { color: colors.text }]}>Instagram</Text>
      </View>

      <Ionicons
        name="heart-outline"
        size={36}
        color={colors.icon}
        style={styles.headerIconHome}
      />
    </View>
  );
}

export function HeaderReels() {
  const { colors } = useAppTheme();

  return (
    <View style={styles.reelsRow}>
      <Ionicons name="add" size={35} color={colors.icon} />
      <Text style={[styles.reelText, { color: colors.text }]}>Reels</Text>

      <View style={styles.logoHug}>
        <Text style={[styles.reelFreindsText, { color: colors.secondaryText }]}>Friends</Text>
      <Image
        source={require("@/assets/images/grid1.jpg")}
        style={[styles.icon, {zIndex: 3}, {marginLeft: -15}]}
      />
      <Image
          source={require("@/assets/images/grid2.jpg")}
          style={[styles.icon, {zIndex: 2}, {marginLeft: -15}]}
      />
        <Image
          source={require("@/assets/images/grid3.jpg")}
          style={[styles.icon, {zIndex: 1}, {marginLeft: -15}]}
        />
        </View>
        <Ionicons name="menu" size={35} color={colors.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  profileHeaderHome: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  profileTitleHome: {
    fontFamily: "HelveticaNeue-Bold",
    fontWeight: "bold",
    fontSize: 30,
  },
  profileSubtext: {},
  profileTitleGroupHome: {
    alignItems: "center",
  },
  headerIconHome: {
    width: 38,
    height: 38,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    borderColor: "transparent",
    borderWidth: 4,
  },
  reelText: {
    fontFamily: "HelveticaNeue-Bold",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 30,
  },
  reelFreindsText: {
    fontFamily: "HelveticaNeue-Bold",
    fontWeight: "bold",
    fontSize: 20,
    paddingRight: 18,
  },
  reelsRow : {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoHug: {
    flexDirection: "row",
  },
});
