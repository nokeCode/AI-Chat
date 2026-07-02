import DashboardLayout from "../layouts/DashboardLayout";
import TopBar from "../components/TopBar";
import { currentUser } from "../data/mock";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <TopBar crumbs={[{ label: "Dashboard" }]} />
      <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
        <h1 className="text-2xl font-bold text-ink">
          Welcome back, {currentUser.firstName} 👋
        </h1>
        <p className="mt-1 text-sm text-ink-muted">
          Here&apos;s what&apos;s happening on your shift today.
        </p>
      </div>
    </DashboardLayout>
  );
}
