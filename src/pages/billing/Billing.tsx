import PricingCard from "../../components/ui/PricingCard";
import { plans, invoices } from "../../data/billing";

export default function Billing() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold">Billing</h2>
        <p className="text-sm text-gray-500">
          Manage your subscription and billing details.
        </p>
      </div>

      {/* Plans */}
      <div>
        <h3 className="text-lg font-medium mb-4">Your Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>

      {/* Invoices */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-soft p-6">
        <h3 className="text-lg font-medium mb-4">Invoices</h3>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-3">Invoice</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-t dark:border-neutral-700">
                <td className="py-3">{inv.id}</td>
                <td className="py-3">{inv.date}</td>
                <td className="py-3">{inv.amount}</td>
                <td className="py-3">
                  <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    {inv.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
