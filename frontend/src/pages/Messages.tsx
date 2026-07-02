import { useMemo, useState } from "react";
import { ArrowLeft, MoreVertical, Phone, Search, Send, Smile, Paperclip, Mic, Video } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  activeThreadMessages,
  currentUser,
  personalConversations,
  teamConversations,
  type Conversation,
} from "../data/mock";

function ConversationRow({
  conversation,
  active,
  onClick,
}: {
  conversation: Conversation;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition-colors ${
        active ? "bg-cream-card" : "hover:bg-cream-card/60"
      }`}
    >
      <img
        src={conversation.avatar}
        alt={conversation.name}
        className="h-11 w-11 shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-sm font-semibold text-ink">{conversation.name}</p>
          <span className="shrink-0 text-[11px] text-ink-soft">{conversation.time}</span>
        </div>
        <p className="mt-0.5 truncate text-xs text-ink-muted">{conversation.lastMessage}</p>
      </div>
      {conversation.unread ? (
        <span className="mt-1 flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-semibold text-white">
          {conversation.unread}
        </span>
      ) : null}
    </button>
  );
}

export default function Messages() {
  const all = useMemo(
    () => [...teamConversations, ...personalConversations],
    []
  );
  const [activeId, setActiveId] = useState(all[0].id);
  const [draft, setDraft] = useState("");
  const active = all.find((c) => c.id === activeId) ?? all[0];

  return (
    <DashboardLayout>
      <div className="flex h-full min-h-0 flex-1">
        {/* Conversation list */}
        <section className="flex w-[340px] shrink-0 flex-col border-r border-black/5 bg-cream">
          <div className="flex items-center gap-3 px-6 py-4">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink shadow-card">
              <ArrowLeft size={18} />
            </button>
            <nav className="flex items-center gap-2 text-sm">
              <span className="text-ink-muted">Messages</span>
              <span className="text-ink-soft">/</span>
              <span className="font-semibold text-ink">
                {teamConversations.some((c) => c.id === activeId) ? active.name : "Front of House Team"}
              </span>
            </nav>
          </div>

          <div className="px-6 pb-2">
            <h1 className="text-2xl font-bold text-ink">Messages</h1>
          </div>

          <div className="px-6 py-3">
            <div className="flex items-center gap-2 rounded-xl bg-cream-card px-3 py-2.5">
              <Search size={16} className="text-ink-soft" />
              <input
                placeholder="Search..."
                className="w-full bg-transparent text-sm text-ink placeholder:text-ink-soft"
              />
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
            <p className="px-2 py-2 text-sm font-semibold text-ink">Teams</p>
            <div className="flex flex-col gap-1">
              {teamConversations.map((c) => (
                <ConversationRow
                  key={c.id}
                  conversation={c}
                  active={c.id === activeId}
                  onClick={() => setActiveId(c.id)}
                />
              ))}
            </div>

            <p className="mt-4 px-2 py-2 text-sm font-semibold text-ink">Personal</p>
            <div className="flex flex-col gap-1">
              {personalConversations.map((c) => (
                <ConversationRow
                  key={c.id}
                  conversation={c}
                  active={c.id === activeId}
                  onClick={() => setActiveId(c.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Chat thread */}
        <section className="flex min-w-0 flex-1 flex-col bg-white">
          <header className="flex items-center justify-between border-b border-black/5 px-6 py-3.5">
            <div className="flex items-center gap-3">
              <img
                src={active.avatar}
                alt={active.name}
                className="h-9 w-9 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-ink">{active.name}</p>
                <p className="text-xs text-emerald-500">Active now</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-card text-ink">
                <Phone size={16} />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-card text-ink">
                <Video size={16} />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-card text-ink">
                <MoreVertical size={16} />
              </button>
            </div>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
            <div className="mb-5 flex justify-center">
              <span className="rounded-full bg-cream-card px-3 py-1 text-xs text-ink-muted">
                Today, Feb 10
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {activeThreadMessages.map((m) =>
                m.sender === "them" ? (
                  <div key={m.id} className="flex items-end gap-2.5">
                    <img
                      src={active.avatar}
                      alt={m.senderName}
                      className="h-7 w-7 rounded-full object-cover"
                    />
                    <div>
                      {m.senderName && (
                        <p className="mb-1 text-xs font-semibold text-ink-muted">{m.senderName}:</p>
                      )}
                      <div className="max-w-md rounded-2xl rounded-bl-sm bg-cream-card px-4 py-2.5 text-sm text-ink">
                        {m.text}
                      </div>
                      <p className="mt-1 text-[11px] text-ink-soft">{m.time}</p>
                    </div>
                  </div>
                ) : (
                  <div key={m.id} className="flex items-end justify-end gap-2.5">
                    <div className="flex flex-col items-end">
                      <p className="mb-1 text-xs font-semibold text-ink-muted">You</p>
                      <div className="max-w-md rounded-2xl rounded-br-sm bg-brand px-4 py-2.5 text-sm text-white">
                        {m.text}
                      </div>
                      <p className="mt-1 text-[11px] text-ink-soft">
                        {m.time}
                        {m.read && <span className="ml-1 text-emerald-500">Read</span>}
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
              <button className="text-ink-soft">
                <Paperclip size={18} />
              </button>
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Write a message..."
                className="w-full bg-transparent text-sm text-ink placeholder:text-ink-soft"
              />
              <button className="text-ink-soft">
                <Smile size={18} />
              </button>
              <button className="text-ink-soft">
                <Mic size={18} />
              </button>
              <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-brand-darker">
                <Send size={16} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
