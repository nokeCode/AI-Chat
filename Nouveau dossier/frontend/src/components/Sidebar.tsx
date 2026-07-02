import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  UtensilsCrossed,
  MessageSquare,
  Receipt,
  Settings,
  Bell,
  LifeBuoy,
  Crown,
} from "lucide-react";
import { currentUser } from "../data/mock";

const mainNav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { to: "/food-drinks", label: "Food & Drinks", icon: UtensilsCrossed },
  { to: "/messages", label: "Messages", icon: MessageSquare },
  { to: "/bills", label: "Bills", icon: Receipt },
  { to: "/profile", label: "Settings", icon: Settings },
];

const otherNav = [
  { to: "/notifications", label: "Notifications", icon: Bell, badge: 5 },
  { to: "/support", label: "Support", icon: LifeBuoy },
];

function NavItem({
  to,
  label,
  icon: Icon,
  badge,
}: {
  to: string;
  label: string;
  icon: typeof LayoutGrid;
  badge?: number;
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
      {badge ? (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-semibold text-brand-darker">
          {badge}
        </span>
      ) : null}
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside className="flex h-full w-[260px] shrink-0 flex-col bg-brand px-5 py-6 text-white">
      <div className="mb-8 flex items-center gap-2 px-1">
        <Crown size={22} className="text-gold" strokeWidth={2.2} />
        <span className="text-lg font-bold tracking-tight">ServePoint</span>
      </div>

      <nav className="flex flex-col gap-1">
        {mainNav.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>

      <div className="mt-7">
        <p className="mb-2 px-3.5 text-xs font-semibold uppercase tracking-wide text-white/40">
          Others
        </p>
        <nav className="flex flex-col gap-1">
          {otherNav.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </nav>
      </div>

      <div className="mt-auto pt-6">
        <div className="rounded-2xl bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <img
              src={currentUser.avatar}
              alt={currentUser.fullName}
              className="h-11 w-11 rounded-full object-cover ring-2 ring-gold/60"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{currentUser.fullName}</p>
              <p className="truncate text-xs text-white/50">
                {currentUser.role} &middot; {currentUser.shift}
              </p>
            </div>
          </div>
          <NavLink
            to="/profile"
            className="mt-3 block w-full rounded-lg bg-white/10 py-1.5 text-center text-xs font-semibold text-white transition-colors hover:bg-white/20"
          >
            Open profile
          </NavLink>
        </div>
        <p className="mt-4 text-center text-[11px] text-white/30">
          @ 2026 SmartPOS Setup
        </p>
      </div>
    </aside>
  );
}
