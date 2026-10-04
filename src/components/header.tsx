import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";

export const Header = () => {
  return <Stack.Screen options={{ headerShown: false }} />;
};

export function HeaderHome() {
  return (
    <View style={styles.profileHeaderHome}>
      <Ionicons
        name="add-outline"
        size={38}
        color="#111"
        style={styles.headerIconHome}
      />

      <View style={styles.profileTitleGroupHome}>
        <Text style={styles.profileTitleHome}>Instagram</Text>
      </View>

      <Ionicons
        name="heart-outline"
        size={36}
        color="#111"
        style={styles.headerIconHome}
      />
    </View>
  );
}

export function HeaderReels() {
  return (
    <View style={styles.reelsRow}>
      <Ionicons name="add" size={35} color="#111"/>
      <Text style={styles.reelText}>Reels</Text>

      <View style={styles.logoHug}>
        <Text style={styles.reelFreindsText}>Friends</Text>
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
        <Ionicons name="menu" size={35} color="#111"/>
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
  profileSubtext: {
    color: "#bcbcbc",
  },
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
    color: "#888888",
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
