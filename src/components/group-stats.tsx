import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export function GroupStats() {
  return (
    <View style={styles.statsRow}>
      <View style={styles.profileImageFrame}>
        <Image
          source={require("@/assets/images/photo1.jpg")}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.stat}>
        <Text style={styles.statValue}>53</Text>
        <Text>Posts</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statValue}>12</Text>
        <Text>Members</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statValue}>1</Text>
        <Text>Admins</Text>
      </View>
    </View>
  );
}


export function LogoGroupStatusBar() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.storiesRow}
    >
      <View style={styles.story}>
        <View style={[styles.storyFrame, styles.ownStoryFrame]}>
          <Image
            source={require("@/assets/images/photo1.jpg")}
            style={styles.storyImage}
          />
        </View>
        <View style={styles.addStoryBadge}>
          <Ionicons name="add" size={22} color="#fff" />
        </View>
        <Text style={styles.storyName} numberOfLines={1}>
          Pikachu
        </Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storyFrame}>
          <Image
            source={require("@/assets/images/grid1.jpg")}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyName} numberOfLines={1}>
          Pikachu
        </Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storyFrame}>
          <Image
            source={require("@/assets/images/grid2.jpg")}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyName} numberOfLines={1}>
          Pikachu
        </Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storyFrame}>
          <Image
            source={require("@/assets/images/grid4.jpg")}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyName} numberOfLines={1}>
          Pikachu
        </Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storyFrame}>
          <Image
            source={require("@/assets/images/grid5.jpg")}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyName} numberOfLines={1}>
          Pikachu
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  profileImageFrame: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c85e8e",
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontWeight: "bold",
    fontSize: 18,
  },
  storiesRow: {
    flexDirection: "row",
    gap: 12,
    paddingBottom: 16,
  },
  story: {
    alignItems: "center",
    width: 88,
  },
  storyFrame: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: "#d62976",
    alignItems: "center",
    justifyContent: "center",
  },
  ownStoryFrame: {
    borderColor: "#dbdbdb",
  },
  storyImage: {
    width: 76,
    height: 76,
    borderRadius: 38,
  },
  addStoryBadge: {
    position: "absolute",
    top: 54,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#0095f6",
    borderColor: "#fff",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  storyName: {
    color: "#111",
    fontSize: 12,
    marginTop: 5,
    maxWidth: 84,
  },
});
