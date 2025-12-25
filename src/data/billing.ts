export const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "For individuals getting started",
    features: ["Up to 3 projects", "Basic analytics", "Email support"],
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing SaaS teams",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Team access",
    ],
    current: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations",
    features: ["Custom limits", "Dedicated support", "SSO", "Audit logs"],
  },
];

export const invoices = [
  { id: "INV-1024", date: "Mar 01, 2025", amount: "$49", status: "Paid" },
  { id: "INV-1023", date: "Feb 01, 2025", amount: "$49", status: "Paid" },
  { id: "INV-1022", date: "Jan 01, 2025", amount: "$49", status: "Paid" },
];
