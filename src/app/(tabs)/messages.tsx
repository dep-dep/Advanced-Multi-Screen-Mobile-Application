import Ionicons from "@expo/vector-icons/Ionicons";
import type { ImageSourcePropType } from "react-native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { mockConversations } from "@/data/mock-content";

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>pikachu_daily</Text>
        <Ionicons name="create-outline" size={27} color="#111" />
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#666" />
        <Text style={styles.searchPlaceholder}>Search Pikachu friends</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.notesScrollView}
      >
        <View style={styles.notesRow}>
          <NoteItem name="Your note" image={require("@/assets/images/grid5.jpg")} />
          <NoteItem name="Ash" image={require("@/assets/images/grid1.jpg")} />
          <NoteItem name="Misty" image={require("@/assets/images/grid2.jpg")} />
          <NoteItem name="Brock" image={require("@/assets/images/grid3.jpg")} />
        </View>
      </ScrollView>

      <View style={styles.locationRow}>
        <Ionicons name="navigate" size={14} color="#ff4058" />
        <Text style={styles.locationText}>Location off</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Messages</Text>
        <Text style={styles.requests}>Requests</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {mockConversations.map((conversation) => (
          <View key={conversation.id} style={styles.conversationRow}>
            <View style={styles.avatarFrame}>
              {conversation.image ? (
                <Image source={conversation.image} style={styles.avatar} />
              ) : null}
              {conversation.online ? <View style={styles.onlineDot} /> : null}
            </View>
            <View style={styles.conversationInfo}>
              <Text style={styles.name}>{conversation.name}</Text>
              <Text style={styles.preview} numberOfLines={1}>
                {conversation.preview} · {conversation.time}
              </Text>
            </View>
            {conversation.unread ? <View style={styles.unreadDot} /> : null}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

type NoteItemProps = {
  name: string;
  image: ImageSourcePropType;
};

function NoteItem({ name, image }: NoteItemProps) {
  return (
    <View style={styles.noteItem}>
      <Image source={image} style={styles.noteImage} />
      <Text style={styles.noteName} numberOfLines={1}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    height: 60,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    position: "absolute",
    left: 36,
    right: 36,
    color: "#111",
    fontSize: 23,
    fontWeight: "700",
    textAlign: "center",
  },
  searchBar: {
    height: 52,
    borderRadius: 26,
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  searchPlaceholder: {
    color: "#777",
    fontSize: 16,
  },
  notesScrollView: {
    height: 104,
    flexGrow: 0,
  },
  notesRow: {
    flexDirection: "row",
    gap: 16,
    paddingTop: 4,
    paddingBottom: 4,
  },
  noteItem: {
    width: 82,
    alignItems: "center",
    gap: 7,
  },
  noteImage: {
    alignSelf: "center",
    width: 66,
    height: 66,
    borderRadius: 33,
    borderWidth: 1,
    borderColor: "#e7e7e7",
  },
  noteName: {
    color: "#222",
    fontSize: 12,
    maxWidth: 78,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 4,
  },
  locationText: {
    color: "#222",
    fontSize: 12,
    fontWeight: "600",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 6,
  },
  sectionTitle: {
    color: "#111",
    fontWeight: "700",
    fontSize: 19,
  },
  requests: {
    color: "#405de6",
    fontSize: 16,
  },
  conversationRow: {
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  avatarFrame: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#f0f0f0",
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },
  conversationInfo: {
    flex: 1,
    gap: 5,
  },
  name: {
    color: "#111",
    fontSize: 15,
    fontWeight: "700",
  },
  preview: {
    color: "#777",
    fontSize: 14,
  },
  onlineDot: {
    position: "absolute",
    right: -2,
    bottom: -2,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#41d64b",
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#5865ff",
  },
});
