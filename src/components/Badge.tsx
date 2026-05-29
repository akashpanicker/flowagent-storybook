type BadgeVariant = "primary" | "neutral" | "positive" | "warning" | "negative";
type BadgeStyle = "subtle" | "bold" | "outline";
type BadgeSize = "small" | "medium";

type BadgeProps = {
  label: string;
  variant?: BadgeVariant;
  style?: BadgeStyle;
  size?: BadgeSize;
};

const styles: Record<BadgeVariant, Record<BadgeStyle, string>> = {
  primary: {
    subtle: "bg-brand-bright-blue/10 text-brand-bright-blue-dark",
    bold: "bg-brand-bright-blue text-white",
    outline: "border border-brand-bright-blue text-brand-bright-blue",
  },
  neutral: {
    subtle: "bg-neutral-100 text-neutral-700",
    bold: "bg-neutral-700 text-white",
    outline: "border border-neutral-700 text-neutral-700",
  },
  positive: {
    subtle: "bg-success-light text-success",
    bold: "bg-success text-white",
    outline: "border border-success text-success",
  },
  warning: {
    subtle: "bg-warning-light text-warning",
    bold: "bg-warning text-white",
    outline: "border border-warning text-warning",
  },
  negative: {
    subtle: "bg-error-light text-error",
    bold: "bg-error text-white",
    outline: "border border-error text-error",
  },
};

const sizes: Record<BadgeSize, string> = {
  small: "px-2 py-0.5 text-caption-12",
  medium: "px-2.5 py-1 text-body-14",
};

export function Badge({
  label,
  variant = "primary",
  style = "subtle",
  size = "medium",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold ${sizes[size]} ${styles[variant][style]}`}
    >
      {label}
    </span>
  );
}
