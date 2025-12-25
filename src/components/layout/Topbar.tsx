import { useTheme } from "../../context/theme";

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-neutral-800 border-b dark:border-neutral-700 flex items-center justify-between px-6">
      <span className="font-medium">Dashboard</span>

      <button
        onClick={toggleTheme}
        className="px-3 py-1 text-sm rounded-lg border dark:border-neutral-600"
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </header>
  );
}
