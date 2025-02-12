export function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute left-[-9999px] top-[-9999px]">{children}</span>
  );
} 