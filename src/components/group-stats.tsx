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
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.friendsRow}>
        <View style={styles.profileImageFrame}>
          <Image
            source={require("@/assets/images/photo1.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileImageFrame}>
          <Image
            source={require("@/assets/images/grid1.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileImageFrame}>
          <Image
            source={require("@/assets/images/grid2.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileImageFrame}>
          <Image
            source={require("@/assets/images/grid4.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileImageFrame}>
          <Image
            source={require("@/assets/images/grid5.jpg")}
            style={styles.profileImage}
          />
        </View>
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
  friendsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
});
