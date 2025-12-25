type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Input({ label, ...props }: InputProps) {
  return (
    <label className="block space-y-1">
      <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
      <input
        {...props}
        className="w-full rounded-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </label>
  );
}
