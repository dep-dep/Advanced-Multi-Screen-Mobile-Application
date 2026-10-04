import Ionicons from "@expo/vector-icons/Ionicons";
import { useVideoPlayer, VideoView } from "expo-video";
import { Image, StyleSheet, Text, View } from "react-native";

function BigReels() {
  const player = useVideoPlayer(
    require("../../assets/video/16752507_2160_3840_60fps.mp4"),
    (videoPlayer) => {
      videoPlayer.loop = true;
      videoPlayer.play();
    }
  );

  return (
    <VideoView
      player={player}
      style={styles.video}
      contentFit="cover"
      nativeControls={false}
    />
  );
}

export function FeedReelPost() {
  return (
    <View style={styles.feedPost}>
      <View style={styles.postHeader}>
        <Image
          source={require("@/assets/images/photo1.jpg")}
          style={styles.accountImage}
        />
        <View style={styles.accountDetails}>
          <View style={styles.accountNameRow}>
            <Text style={styles.accountName}>Pikachu</Text>
            <Ionicons name="checkmark-circle" size={16} color="#3897f0" />
          </View>
          <View style={styles.audioRow}>
            <Ionicons name="musical-notes" size={14} color="#111" />
            <Text style={styles.audioName}>Pikachu · Original audio</Text>
          </View>
        </View>
        <Ionicons name="ellipsis-horizontal" size={24} color="#111" />
      </View>
      <BigReels />
    </View>
  );
}

const styles = StyleSheet.create({
  feedPost: {
    marginHorizontal: -20,
    backgroundColor: "#fff",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
  },
  accountImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  accountDetails: {
    flex: 1,
    gap: 2,
  },
  accountNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  accountName: {
    color: "#111",
    fontSize: 14,
    fontWeight: "700",
  },
  audioRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  audioName: {
    color: "#111",
    fontSize: 12,
  },
  video: {
    width: "100%",
    aspectRatio: 9 / 16,
    backgroundColor: "#111",
  },
});