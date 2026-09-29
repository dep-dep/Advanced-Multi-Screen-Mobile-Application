import { Image, StyleSheet, View } from "react-native";

const gridImages = [
  require("@/assets/images/grid1.jpg"),
  require("@/assets/images/grid2.jpg"),
  require("@/assets/images/grid3.jpg"),
  require("@/assets/images/grid4.jpg"),
  require("@/assets/images/grid5.jpg"),
  require("@/assets/images/grid6.jpg"),
  require("@/assets/images/grid7.jpg"),
  require("@/assets/images/grid8.jpg"),
  require("@/assets/images/grid9.jpg"),
  require("@/assets/images/grid10.jpg"),
  require("@/assets/images/grid11.jpg"),
  require("@/assets/images/grid12.jpg"),
];

export function PhotoGrid() {
  return (
    <View style={styles.photoGrid}>
      {gridImages.map((imageSource, index) => (
        <View key={index} style={styles.photoGridItem}>
          <Image source={imageSource} style={styles.photo} resizeMode="cover" />
        </View>
      ))}
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
});
