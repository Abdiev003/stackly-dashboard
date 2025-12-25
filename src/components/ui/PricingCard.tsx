type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  current?: boolean;
};

export default function PricingCard({
  name,
  price,
  description,
  features,
  current,
}: PricingCardProps) {
  return (
    <div
      className={`p-6 rounded-xl border bg-white dark:bg-neutral-800 shadow-soft ${
        current ? "border-primary" : "border-gray-200 dark:border-neutral-700"
      }`}
    >
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>

      <p className="mt-4 text-3xl font-bold">
        {price}
        <span className="text-sm font-normal text-gray-500"> /mo</span>
      </p>

      <ul className="mt-6 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-6 w-full py-2 rounded-lg text-sm font-medium ${
          current
            ? "bg-primary text-white"
            : "border border-gray-300 dark:border-neutral-600 hover:bg-gray-100 dark:hover:bg-neutral-700"
        }`}
      >
        {current ? "Current Plan" : "Choose Plan"}
      </button>
    </div>
  );
}
