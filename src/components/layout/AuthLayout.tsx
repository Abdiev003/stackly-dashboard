import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900">
      <div className="w-full max-w-md p-8 bg-white dark:bg-neutral-800 rounded-xl shadow-soft">
        <Outlet />
      </div>
    </div>
  );
}
