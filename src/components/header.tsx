import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

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
});
