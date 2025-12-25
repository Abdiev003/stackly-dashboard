import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import DashboardLayout from "../components/layout/DashboardLayout";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import Billing from "../pages/billing/Billing";
import Settings from "../pages/settings/Settings";
import Team from "../pages/team/Team";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
