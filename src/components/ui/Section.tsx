export default function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-soft p-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium">{title}</h3>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
      {children}
    </div>
  );
}
