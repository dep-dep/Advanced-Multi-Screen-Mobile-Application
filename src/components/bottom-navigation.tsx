import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function BottomNavigation() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <View
      style={[
        styles.navBar,
        { paddingBottom: Math.max(insets.bottom, 10) + 7 },
      ]}
    >
      <Pressable onPress={() => router.navigate("/home")}>
        <Image
          source={require("@/assets/images/home.png")}
          style={styles.icon}
        />
      </Pressable>

      <Pressable onPress={() => {}}>
        <Image
          source={require("@/assets/images/play.png")}
          style={styles.icon}
        />
      </Pressable>

      <Pressable onPress={() => {}}>
        <Image
          source={require("@/assets/images/send.png")}
          style={styles.icon}
        />
      </Pressable>

      <Pressable onPress={() => {}}>
        <Image
          source={require("@/assets/images/search.png")}
          style={styles.icon}
        />
      </Pressable>

      <Pressable onPress={() => router.navigate("/")}>
        <Image
          source={require("@/assets/images/photo1.jpg")}
          style={styles.profileImage}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 7,
    backgroundColor: "#fff",
  },
});
