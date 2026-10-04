import { BackgroundImage } from "@/components/photo-grid";
import { ReelActions } from "@/components/reel-actions";
import { ReelDetails } from "@/components/reel-details";
import { ReelHeader } from "@/components/reel-header";
import { StyleSheet, View } from "react-native";

export default function ReelsScreen() {
  return (
    <View style={styles.container}>
      <BackgroundImage />

      <View style={styles.screenContent}>
        <ReelHeader />
        <ReelDetails />
      </View>
      <ReelActions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    overflow: "hidden",
  },
  screenContent: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 108,
  },
});