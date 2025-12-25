import { NavLink } from "react-router-dom";

const nav = [
  { to: "/", label: "Dashboard" },
  { to: "/billing", label: "Billing" },
  { to: "/team", label: "Team" },
  { to: "/settings", label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-neutral-800 border-r dark:border-neutral-700 p-4">
      <h1 className="text-xl font-bold mb-8">Stackly</h1>

      <nav className="space-y-2">
        {nav.map((i) => (
          <NavLink
            key={i.to}
            to={i.to}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg text-sm font-medium ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
              }`
            }
          >
            {i.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
