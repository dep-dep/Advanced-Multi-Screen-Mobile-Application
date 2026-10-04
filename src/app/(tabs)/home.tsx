import { ScrollView, StyleSheet, View } from "react-native";
import { LogoGroupStatusBar } from "@/components/group-stats";
import { HeaderHome } from "@/components/header";
import { FeedReelPost } from "@/components/reels";
import { useAppTheme } from "@/theme-context";

export default function Home() {
  const { colors } = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HeaderHome />
        <LogoGroupStatusBar />
        <FeedReelPost />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 110,
  },
});
