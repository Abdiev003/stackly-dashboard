import { useTheme } from "../../context/theme";
import Button from "../ui/Button";

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-neutral-800 border-b dark:border-neutral-700 flex items-center justify-between px-6">
      <span className="font-medium">Dashboard</span>

      <Button variant="secondary" onClick={toggleTheme}>
        {theme === "dark" ? "Light" : "Dark"}
      </Button>
    </header>
  );
}
