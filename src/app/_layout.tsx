import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ThemeProvider, useAppTheme } from "@/theme-context";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <RootContent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

function RootContent() {
  const insets = useSafeAreaInsets();
  const { isDark, colors } = useAppTheme();

  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={[
        styles.safeArea,
        {
          paddingTop: Math.max(insets.top, 10) + 7,
          backgroundColor: colors.background,
        },
      ]}
    >
      <StatusBar style={isDark ? "light" : "dark"} animated={false} />
      <View style={[styles.appContent, { backgroundColor: colors.background }]}>
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
    backgroundColor: "#fff",
  },
  appContent: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
});
