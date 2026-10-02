import { ScrollView, StyleSheet, View } from "react-native";

import { GroupBio } from "@/components/group-bio";
import { GroupProfileBar } from "@/components/group-profile-bar";
import { GroupStats } from "@/components/group-stats";
import { Header } from "@/components/header";
import { MemberButton } from "@/components/member-button";
import { PhotoGrid } from "@/components/photo-grid";

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <GroupProfileBar />
        <GroupStats />
        <GroupBio />
        <MemberButton />
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
});
