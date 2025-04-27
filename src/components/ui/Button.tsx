// src/components/ui/Button.tsx
import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
