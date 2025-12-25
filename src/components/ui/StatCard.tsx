type StatCardProps = {
  title: string;
  value: string;
  description?: string;
};

export default function StatCard({ title, value, description }: StatCardProps) {
  return (
    <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-soft">
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
      {description && (
        <p className="mt-1 text-xs text-gray-400">{description}</p>
      )}
    </div>
  );
}
