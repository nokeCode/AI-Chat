export const currentUser = {
  firstName: "User",
  lastName: "Chat",
  fullName: "User Chat",
  avatar: "https://i.pravatar.cc/150?img=47",
  email: "user@example.com",
  phone: "+1 (408) 555-0000",
};

export const aiAssistant = {
  name: "AI Assistant",
  avatar: "https://i.pravatar.cc/150?img=1",
};

export type Conversation = {
  id: string;
  title: string;
  lastMessage: string;
  time: string;
};

export const chatHistory: Conversation[] = [
  {
    id: "conv-1",
    title: "JavaScript Help",
    lastMessage: "Can you explain async/await?",
    time: "2 hours ago",
  },
  {
    id: "conv-2",
    title: "React Tips",
    lastMessage: "How to optimize re-renders?",
    time: "Yesterday",
  },
  {
    id: "conv-3",
    title: "Python Basics",
    lastMessage: "What's the difference between lists and tuples?",
    time: "2 days ago",
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
    senderName: "AI Assistant",
    text: "Hi! How can I help you today? Ask me anything about programming, writing, or any other topic.",
    time: "10:00",
  },
  {
    id: "m2",
    sender: "me",
    text: "Can you explain how async/await works in JavaScript?",
    time: "10:02",
    read: true,
  },
  {
    id: "m3",
    sender: "them",
    senderName: "AI Assistant",
    text: "Sure! Async/await is syntactic sugar for working with promises. It makes asynchronous code look and behave more like synchronous code.",
    time: "10:03",
  },
  {
    id: "m4",
    sender: "me",
    text: "Can you give me a simple example?",
    time: "10:04",
    read: true,
  },
  {
    id: "m5",
    sender: "them",
    senderName: "AI Assistant",
    text: "Of course! Here's an example of fetching data.",
    time: "10:05",
    read: true,
  },
];
