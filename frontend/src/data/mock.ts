export const currentUser = {
  firstName: "Joy",
  lastName: "Ezechukwu",
  fullName: "Joy Ezechukwu",
  role: "Supervisor",
  shift: "08:00 - 16:00",
  avatar: "https://i.pravatar.cc/150?img=47",
  email: "joyeze999@gmail.com",
  phone: "+1 (408) 555-9724",
  dob: "Jun 23, 1995",
  location: "Carlifonia, USA",
  postalCode: "98675",
  monthlySales: "$2,750",
  ordersServed: 128,
  onShiftFor: "6h 42m",
};

export type Conversation = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
  kind: "team" | "personal";
};

export const teamConversations: Conversation[] = [
  {
    id: "front-of-house",
    name: "Front of House",
    avatar: "https://i.pravatar.cc/150?img=32",
    lastMessage: "Sandra James: Table 12 is ready for checkout.",
    time: "2 min ago",
    kind: "team",
  },
  {
    id: "kitchen",
    name: "Kitchen",
    avatar: "https://i.pravatar.cc/150?img=13",
    lastMessage: "Chef Daniel: Two medium steaks for Table 7.",
    time: "Just Now",
    unread: 8,
    kind: "team",
  },
];

export const personalConversations: Conversation[] = [
  {
    id: "maria-gomez",
    name: "Maria Gomez",
    avatar: "https://i.pravatar.cc/150?img=45",
    lastMessage: "Can you approve the void on Order #284?",
    time: "12 min ago",
    kind: "personal",
  },
  {
    id: "daniel-okafor",
    name: "Daniel Okafor",
    avatar: "https://i.pravatar.cc/150?img=14",
    lastMessage: "I'll handle the large party at 6 PM.",
    time: "20 min ago",
    unread: 2,
    kind: "personal",
  },
];

export type ChatMessage = {
  id: string;
  sender: "them" | "me";
  senderName?: string;
  text: string;
  time: string;
  read?: boolean;
};

export const activeThreadMessages: ChatMessage[] = [
  {
    id: "m1",
    sender: "them",
    senderName: "Maria",
    text: "Table 12 is asking for the bill, and also confirm the order please",
    time: "8:14",
  },
  {
    id: "m2",
    sender: "me",
    text: "Send it through POS now.",
    time: "8:15",
    read: true,
  },
  {
    id: "m3",
    sender: "them",
    senderName: "Sandra",
    text: "Split payment or single?",
    time: "8:24",
  },
  {
    id: "m4",
    sender: "them",
    senderName: "Maria",
    text: "How many orders?",
    time: "8:24",
  },
  {
    id: "m5",
    sender: "me",
    text: "Split, 2 cards.",
    time: "8:22",
    read: true,
  },
];
