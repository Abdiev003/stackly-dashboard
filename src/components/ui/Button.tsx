type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-primary";

  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary:
      "border border-gray-300 dark:border-neutral-600 hover:bg-gray-100 dark:hover:bg-neutral-700",
    danger: "bg-red-600 text-white hover:opacity-90",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    />
  );
}
