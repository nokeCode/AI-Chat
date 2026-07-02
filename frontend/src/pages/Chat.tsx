import { useState } from "react";
import { Send, Smile, Paperclip, Mic } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
import TopBar from "../components/TopBar";
import { activeThreadMessages, currentUser, aiAssistant, chatHistory } from "../data/mock";

export default function Chat() {
  const [draft, setDraft] = useState("");
  const [activeConvId, setActiveConvId] = useState(chatHistory[0].id);

  return (
    <DashboardLayout>
      <div className="flex h-full min-h-0 flex-1">
        {/* Chat history sidebar */}
        <section className="flex w-[300px] shrink-0 flex-col border-r border-black/5 bg-cream overflow-hidden">
          <div className="px-6 py-4 border-b border-black/5">
            <h1 className="text-xl font-bold text-ink">Chat History</h1>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
            <div className="flex flex-col gap-2">
              {chatHistory.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setActiveConvId(conv.id)}
                  className={`w-full text-left rounded-lg px-4 py-3 transition-colors text-sm ${
                    activeConvId === conv.id
                      ? "bg-white shadow-card"
                      : "hover:bg-white/50"
                  }`}
                >
                  <p className="font-semibold text-ink truncate">{conv.title}</p>
                  <p className="mt-1 text-xs text-ink-muted truncate">
                    {conv.lastMessage}
                  </p>
                  <p className="mt-1 text-xs text-ink-soft">{conv.time}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Chat thread */}
        <section className="flex min-w-0 flex-1 flex-col bg-white">
          <TopBar crumbs={[{ label: "Chat" }]} />

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
            <div className="mb-5 flex justify-center">
              <span className="rounded-full bg-cream-card px-3 py-1 text-xs text-ink-muted">
                Today
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {activeThreadMessages.map((m) =>
                m.sender === "them" ? (
                  <div key={m.id} className="flex items-end gap-2.5">
                    <img
                      src={aiAssistant.avatar}
                      alt={aiAssistant.name}
                      className="h-7 w-7 rounded-full object-cover"
                    />
                    <div>
                      <p className="mb-1 text-xs font-semibold text-ink-muted">
                        {aiAssistant.name}
                      </p>
                      <div className="max-w-md rounded-2xl rounded-bl-sm bg-cream-card px-4 py-2.5 text-sm text-ink whitespace-pre-wrap break-words">
                        {m.text}
                      </div>
                      <p className="mt-1 text-[11px] text-ink-soft">{m.time}</p>
                    </div>
                  </div>
                ) : (
                  <div key={m.id} className="flex items-end justify-end gap-2.5">
                    <div className="flex flex-col items-end">
                      <p className="mb-1 text-xs font-semibold text-ink-muted">You</p>
                      <div className="max-w-md rounded-2xl rounded-br-sm bg-brand px-4 py-2.5 text-sm text-white break-words">
                        {m.text}
                      </div>
                      <p className="mt-1 text-[11px] text-ink-soft">
                        {m.time}
                        {m.read && (
                          <span className="ml-1 text-emerald-500">Read</span>
                        )}
                      </p>
                    </div>
                    <img
                      src={currentUser.avatar}
                      alt="You"
                      className="h-7 w-7 rounded-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="border-t border-black/5 px-6 py-4">
            <div className="flex items-center gap-3 rounded-2xl bg-cream-card px-4 py-2.5">
              <button className="text-ink-soft hover:text-ink">
                <Paperclip size={18} />
              </button>
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Write a message..."
                className="w-full bg-transparent text-sm text-ink placeholder:text-ink-soft focus:outline-none"
              />
              <button className="text-ink-soft hover:text-ink">
                <Smile size={18} />
              </button>
              <button className="text-ink-soft hover:text-ink">
                <Mic size={18} />
              </button>
              <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-brand-darker hover:bg-gold/90 transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
