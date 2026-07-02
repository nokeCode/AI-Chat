import { ArrowLeft, Bell, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

type Crumb = { label: string; to?: string };

export default function TopBar({
  crumbs,
  backTo,
  notificationCount = 5,
}: {
  crumbs: Crumb[];
  backTo?: string;
  notificationCount?: number;
}) {
  return (
    <header className="flex items-center justify-between border-b border-black/5 bg-cream px-6 py-4">
      <div className="flex items-center gap-3">
        {backTo && (
          <Link
            to={backTo}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink shadow-card transition-transform hover:-translate-x-0.5"
          >
            <ArrowLeft size={18} />
          </Link>
        )}
        <nav className="flex items-center gap-2 text-sm">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-ink-soft">/</span>}
              {c.to ? (
                <Link to={c.to} className="text-ink-muted hover:text-ink">
                  {c.label}
                </Link>
              ) : (
                <span className="font-semibold text-ink">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-card">
          <Bell size={17} className="text-ink" />
          {notificationCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-cream" />
          )}
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-card">
          <MoreVertical size={17} className="text-ink" />
        </button>
      </div>
    </header>
  );
}
