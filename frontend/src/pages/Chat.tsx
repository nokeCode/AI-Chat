import { useState } from "react";
import { Send, Smile, Paperclip, Mic, Phone, Video, Search, MoreVertical } from "lucide-react";
import { chatHistory, activeThreadMessages } from "../data/mock";

export default function Chat() {
  const [draft, setDraft] = useState("");
  const [activeConvId, setActiveConvId] = useState(chatHistory[0].id);
  const activeConv = chatHistory.find((c) => c.id === activeConvId) || chatHistory[0];

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
      <div className="flex w-full min-h-0 flex-1">
        {/* Sidebar - Conversations List */}
        <div className="flex w-[360px] shrink-0 flex-col bg-white border-r border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Chats</h1>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <MoreVertical size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="px-3 py-2">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
              <Search size={18} className="text-gray-500" />
              <input
                placeholder="Chercher une conversation"
                className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="min-h-0 flex-1 overflow-y-auto">
            {chatHistory.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setActiveConvId(conv.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 transition-colors border-b border-gray-100 hover:bg-gray-50 ${
                  activeConvId === conv.id ? "bg-gray-100" : ""
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  {conv.title.charAt(0)}
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="font-medium text-gray-900 truncate">{conv.title}</p>
                  <p className="text-xs text-gray-500 truncate">{conv.lastMessage}</p>
                </div>
                <span className="text-xs text-gray-500 flex-shrink-0">{conv.time}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-white min-w-0 overflow-hidden">
          {/* Chat Header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                {activeConv.title.charAt(0)}
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">{activeConv.title}</h2>
                <p className="text-xs text-gray-500">En ligne</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <Phone size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <Video size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <MoreVertical size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-4 bg-gray-50 flex flex-col gap-3">
            {activeThreadMessages.map((m) =>
              m.sender === "them" ? (
                <div key={m.id} className="flex items-end gap-2 mb-1">
                  <div className="flex flex-col items-start max-w-xs gap-1">
                    <div className="bg-white rounded-2xl rounded-bl-none px-4 py-2.5 shadow-sm border border-gray-100">
                      <p className="text-sm text-gray-900 break-words whitespace-pre-wrap">
                        {m.text}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 px-3">{m.time}</p>
                  </div>
                </div>
              ) : (
                <div key={m.id} className="flex items-end justify-end gap-2 mb-1">
                  <div className="flex flex-col items-end max-w-xs gap-1">
                    <div className="bg-green-100 rounded-2xl rounded-br-none px-4 py-2.5 shadow-sm">
                      <p className="text-sm text-gray-900 break-words whitespace-pre-wrap">
                        {m.text}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 px-3">
                      {m.time}
                      {m.read && <span className="ml-1">✓✓</span>}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 px-4 py-4 bg-white">
            <div className="flex items-center gap-3 rounded-full bg-gray-100 px-4 py-2.5">
              <button className="text-gray-600 hover:text-gray-900 transition">
                <Paperclip size={20} />
              </button>
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Écrire un message..."
                className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none"
              />
              <button className="text-gray-600 hover:text-gray-900 transition">
                <Smile size={20} />
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition">
                <Mic size={20} />
              </button>
              <button className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600 transition flex-shrink-0">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
