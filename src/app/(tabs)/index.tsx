import { ScrollView, StyleSheet, View } from "react-native";

import { GroupBio } from "@/components/group-bio";
import { GroupProfileBar } from "@/components/group-profile-bar";
import { GroupStats } from "@/components/group-stats";
import { Header } from "@/components/header";
import { MemberButton } from "@/components/member-button";
import { PhotoGrid } from "@/components/photo-grid";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAppTheme } from "@/theme-context";

export default function Index() {
  const { colors } = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <GroupProfileBar />
        <GroupStats />
        <GroupBio />
        <View style={styles.memberActions}>
          <MemberButton />
          <ThemeToggle />
        </View>
        <PhotoGrid />
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
  memberActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
