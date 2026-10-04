import { useVideoPlayer, VideoView } from "expo-video";
import { Image, StyleSheet, View } from "react-native";

export function PhotoGrid() {
  return (
    <View style={styles.photoGrid}>
      <View style={styles.photoGridItem}>
        <Image
          source={require("@/assets/images/grid1.jpg")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>
      <View style={styles.photoGridItem}>
        <Image
          source={require("@/assets/images/grid2.jpg")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>
      <View style={styles.photoGridItem}>
        <Image
          source={require("@/assets/images/grid3.jpg")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>
      <View style={styles.photoGridItem}>
        <Image
          source={require("@/assets/images/grid4.jpg")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>
      <View style={styles.photoGridItem}>
        <Image
          source={require("@/assets/images/grid5.jpg")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>
      <View style={styles.photoGridItem}>
        <Image
          source={require("@/assets/images/grid6.jpg")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>
      <View style={styles.photoGridItem}>
        <Image
          source={require("@/assets/images/grid7.jpg")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>
      <View style={styles.photoGridItem}>
        <Image
          source={require("@/assets/images/grid8.jpg")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>
      <View style={styles.photoGridItem}>
        <Image
          source={require("@/assets/images/grid9.jpg")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>
      <View style={styles.photoGridItem}>
        <Image
          source={require("@/assets/images/grid10.jpg")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>
      <View style={styles.photoGridItem}>
        <Image
          source={require("@/assets/images/grid11.jpg")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>
      <View style={styles.photoGridItem}>
        <Image
          source={require("@/assets/images/grid12.jpg")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

export function BackgroundImage() {
  const player = useVideoPlayer(
    require("../../assets/video/16752507_2160_3840_60fps.mp4"),
    (videoPlayer) => {
      videoPlayer.loop = true;
      videoPlayer.muted = true;
      videoPlayer.play();
    }
  );

  return (
    <View
      style={styles.backgroundVideoContainer}
      onLayout={() => player.play()}
    >
      <VideoView
        player={player}
        style={styles.backgroundVideo}
        contentFit="cover"
        nativeControls={false}
        playsInline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 4,
    width: "100%",
  },
  photoGridItem: {
    width: "32.2%",
    aspectRatio: 1,
    backgroundColor: "#e1e1e1",
    overflow: "hidden",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  backgroundVideoContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  backgroundVideo: {
    width: "100%",
    height: "100%",
    backgroundColor: "#111",
  },
});
