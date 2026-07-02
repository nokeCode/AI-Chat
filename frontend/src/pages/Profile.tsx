import { useState } from "react";
import { Camera, ChevronRight, LogOut } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
import TopBar from "../components/TopBar";
import { currentUser } from "../data/mock";

export default function Profile() {
  const [displayName, setDisplayName] = useState(currentUser.firstName);

  return (
    <DashboardLayout>
      <TopBar crumbs={[{ label: "Settings" }]} />

      <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
        <h1 className="mb-8 text-2xl font-bold text-ink">Settings</h1>

        <div className="max-w-2xl space-y-8">
          {/* Profile Card */}
          <section className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="mb-6 text-lg font-semibold text-ink">Profile</h2>

            <div className="flex items-start gap-6">
              <div className="relative">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.fullName}
                  className="h-28 w-28 rounded-full object-cover"
                />
                <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-brand-darker shadow-card hover:shadow-lg transition-shadow">
                  <Camera size={14} />
                </button>
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-ink-muted mb-2">
                    Display Name
                  </label>
                  <input
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full rounded-lg border border-black/5 bg-cream-card px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-ink-muted mb-2">
                    Email
                  </label>
                  <p className="text-sm text-ink">{currentUser.email}</p>
                </div>

                <button className="flex items-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-brand-darker hover:bg-gold/90 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </section>

          {/* Account Settings */}
          <section className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="mb-4 text-lg font-semibold text-ink">Account</h2>

            <div className="space-y-3">
              <button className="flex w-full items-center gap-3 rounded-lg bg-cream-card px-4 py-3 text-sm font-medium text-ink hover:bg-cream-card/80 transition-colors">
                <span className="flex-1 text-left">Change Password</span>
                <ChevronRight size={16} className="text-ink-soft" />
              </button>

              <button className="flex w-full items-center gap-3 rounded-lg bg-cream-card px-4 py-3 text-sm font-medium text-ink hover:bg-cream-card/80 transition-colors">
                <span className="flex-1 text-left">Connected Devices</span>
                <ChevronRight size={16} className="text-ink-soft" />
              </button>

              <button className="flex w-full items-center gap-3 rounded-lg bg-cream-card px-4 py-3 text-sm font-medium text-ink hover:bg-cream-card/80 transition-colors">
                <span className="flex-1 text-left">Privacy Settings</span>
                <ChevronRight size={16} className="text-ink-soft" />
              </button>
            </div>
          </section>

          {/* Chat Preferences */}
          <section className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="mb-4 text-lg font-semibold text-ink">Chat Preferences</h2>

            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300" />
                <span className="text-sm text-ink">Save chat history</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300" />
                <span className="text-sm text-ink">Enable notifications</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <span className="text-sm text-ink">Dark mode</span>
              </label>
            </div>
          </section>

          {/* Logout */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-600 transition-colors">
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
