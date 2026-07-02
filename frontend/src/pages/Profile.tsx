import { useState, type ReactNode } from "react";
import { Camera, ChevronRight, KeyRound, LogOut, User } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
import TopBar from "../components/TopBar";
import { currentUser } from "../data/mock";

function Field({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink-muted">{label}</span>
      <div className="flex items-center justify-between rounded-xl bg-cream-card px-4 py-3">
        <input
          defaultValue={value}
          className="w-full bg-transparent text-sm text-ink"
        />
        {suffix}
      </div>
    </label>
  );
}

export default function Profile() {
  const [gender, setGender] = useState<"Male" | "Female">("Female");

  return (
    <DashboardLayout>
      <TopBar crumbs={[{ label: "Settings", to: "/profile" }, { label: "Profile" }]} backTo="/dashboard" />

      <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
        <h1 className="mb-5 text-2xl font-bold text-ink">Profile</h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          {/* Left summary card */}
          <div className="rounded-2xl bg-cream-card p-6">
            <div className="relative mx-auto w-fit">
              <img
                src={currentUser.avatar}
                alt={currentUser.fullName}
                className="h-28 w-28 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-brand-darker shadow-card">
                <Camera size={14} />
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-base font-semibold text-ink">{currentUser.fullName}</p>
              <p className="text-sm text-ink-muted">On Shift &middot; {currentUser.onShiftFor}</p>
            </div>

            <div className="mt-5 flex items-center justify-center gap-8 border-y border-black/5 py-4">
              <div className="text-center">
                <p className="text-lg font-bold text-ink">{currentUser.monthlySales}</p>
                <p className="text-xs text-ink-muted">Monthly Sales</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-ink">{currentUser.ordersServed}</p>
                <p className="text-xs text-ink-muted">Orders Served</p>
              </div>
            </div>

            <nav className="mt-4 flex flex-col gap-1">
              <button className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 text-sm font-medium text-ink shadow-card">
                <User size={16} />
                <span className="flex-1 text-left">Personal information</span>
                <ChevronRight size={15} className="text-ink-soft" />
              </button>
              <button className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-ink-muted hover:bg-white/60">
                <KeyRound size={16} />
                <span className="flex-1 text-left">Login &amp; Password</span>
                <ChevronRight size={15} className="text-ink-soft" />
              </button>
              <button className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-red-500 hover:bg-white/60">
                <LogOut size={16} />
                <span className="flex-1 text-left">Log out</span>
              </button>
            </nav>
          </div>

          {/* Right form */}
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="mb-5 text-lg font-bold text-ink">Personal information</h2>

            <div className="mb-5 flex items-center gap-6">
              {(["Male", "Female"] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className="flex items-center gap-2 text-sm font-medium text-ink"
                >
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      gender === g ? "border-gold" : "border-black/20"
                    }`}
                  >
                    {gender === g && <span className="h-2 w-2 rounded-full bg-gold" />}
                  </span>
                  {g}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="First Name" value={currentUser.firstName} />
              <Field label="Last Name" value={currentUser.lastName} />

              <div className="sm:col-span-2">
                <Field
                  label="Email"
                  value={currentUser.email}
                  suffix={
                    <span className="flex items-center gap-1 whitespace-nowrap rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
                      Verified
                    </span>
                  }
                />
              </div>

              <Field label="Phone number" value={currentUser.phone} />
              <Field label="Date of Birth" value={currentUser.dob} />
              <Field label="Location" value={currentUser.location} />
              <Field label="Postal Code" value={currentUser.postalCode} />
            </div>

            <button className="mt-6 w-full rounded-xl bg-gold py-3 text-sm font-semibold text-brand-darker transition-colors hover:bg-gold-dark sm:w-auto sm:px-10">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
