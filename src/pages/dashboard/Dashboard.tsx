import StatCard from "../../components/ui/StatCard";
import { dashboardStats } from "../../data/dashboard";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-sm text-gray-500">
          Welcome back, here’s what’s happening with your SaaS today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
          />
        ))}
      </div>

      {/* Placeholder sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-soft">
          <p className="text-sm text-gray-500">Revenue chart</p>
          <div className="mt-4 h-48 rounded-lg bg-gray-100 dark:bg-neutral-700 flex items-center justify-center text-gray-400 text-sm">
            Chart placeholder
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-soft">
          <p className="text-sm text-gray-500">Recent activity</p>
          <div className="mt-4 space-y-3 text-sm text-gray-400">
            <p>• New subscription created</p>
            <p>• Invoice paid</p>
            <p>• User upgraded plan</p>
            <p>• Trial expired</p>
          </div>
        </div>
      </div>
    </div>
  );
}
