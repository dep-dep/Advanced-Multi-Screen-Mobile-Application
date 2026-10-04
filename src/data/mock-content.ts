import type { ImageSourcePropType } from "react-native";

export type MockConversation = {
  id: string;
  name: string;
  image?: ImageSourcePropType;
  preview: string;
  time: string;
  online?: boolean;
  unread?: boolean;
};

export const mockConversations: MockConversation[] = [
  {
    id: "pikachu",
    name: "Pikachu",
    image: require("@/assets/images/grid2.jpg"),
    preview: "4 new messages",
    time: "1h",
    online: true,
    unread: true,
  },
  {
    id: "ash",
    name: "Ash Ketchum",
    image: require("@/assets/images/grid1.jpg"),
    preview: "Replied to your message",
    time: "2h",
    unread: true,
  },
  {
    id: "misty",
    name: "Misty",
    image: require("@/assets/images/grid4.jpg"),
    preview: "Replied to your message",
    time: "4h",
    unread: true,
  },
  {
    id: "brock",
    name: "Brock",
    image: require("@/assets/images/grid3.jpg"),
    preview: "Sent",
    time: "3h ago",
  },
  {
    id: "oak",
    name: "Professor Oak",
    image: require("@/assets/images/grid6.jpg"),
    preview: "Seen",
    time: "2h ago",
  },
  {
    id: "team-rocket",
    name: "Team Rocket",
    preview: "Sent",
    time: "3h ago",
  },
];

