import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { Image, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#111",
        tabBarInactiveTintColor: "#111",
        tabBarShowLabel: false,
        tabBarButton: (props) => {
          const { ref: _ref, ...pressableProps } = props;
          return (
            <Pressable
              {...pressableProps}
              android_ripple={{ color: "transparent" }}
            />
          );
        },
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          backgroundColor: "#fff",
          borderTopWidth: 0,
          paddingTop: 7,
          paddingHorizontal: 20,
          paddingBottom: Math.max(insets.bottom, 10) + 7,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarAccessibilityLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: "Reels",
          tabBarAccessibilityLabel: "Reels",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="play-box-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarAccessibilityLabel: "Messages",
          tabBarIcon: ({ color }) => (
            <Ionicons name="paper-plane-outline" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarAccessibilityLabel: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Profile",
          tabBarAccessibilityLabel: "Profile",
          tabBarIcon: () => (
            <Image
              source={require("@/assets/images/photo1.jpg")}
              style={styles.profileImage}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
