import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <RootContent />
    </SafeAreaProvider>
  );
}

function RootContent() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={[styles.safeArea, { paddingTop: Math.max(insets.top, 10) + 7 }]}
    >
      <StatusBar style="dark" animated={false} />
      <View style={styles.appContent}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#8d8d8e",
  },
  appContent: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
});
