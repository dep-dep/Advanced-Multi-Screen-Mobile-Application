import { LogoGroupStatusBar } from "@/components/group-stats";
import { HeaderHome } from "@/components/header";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HeaderHome />
        <LogoGroupStatusBar />
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
