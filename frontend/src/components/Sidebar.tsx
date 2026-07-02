import { NavLink } from "react-router-dom";
import { MessageCircle, Settings, LogOut } from "lucide-react";
import { currentUser } from "../data/mock";

const mainNav = [
  { to: "/chat", label: "Chat", icon: MessageCircle },
  { to: "/profile", label: "Settings", icon: Settings },
];

function NavItem({
  to,
  label,
  icon: Icon,
}: {
  to: string;
  label: string;
  icon: typeof MessageCircle;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
          isActive
            ? "bg-gold text-brand-darker shadow-card"
            : "text-white/70 hover:bg-white/5 hover:text-white"
        }`
      }
    >
      <Icon size={18} strokeWidth={2} />
      <span className="flex-1 text-left">{label}</span>
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-white/10 bg-brand p-4">
      <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 backdrop-blur-sm mb-6">
        <img
          src={currentUser.avatar}
          alt={currentUser.fullName}
          className="h-9 w-9 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">
            {currentUser.firstName}
          </p>
          <p className="truncate text-xs text-white/60">{currentUser.email}</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {mainNav.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>

      <button className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-colors">
        <LogOut size={18} strokeWidth={2} />
        <span>Logout</span>
      </button>
    </aside>
  );
}
