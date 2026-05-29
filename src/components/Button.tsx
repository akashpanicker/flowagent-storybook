import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "neutral"
  | "positive"
  | "warning"
  | "negative";

type ButtonSize = "compact" | "small" | "medium" | "large";

type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-bright-blue text-white hover:bg-brand-bright-blue-hover active:bg-brand-dark-blue",
  secondary:
    "bg-white border-2 border-brand-bright-blue text-brand-bright-blue hover:bg-brand-bright-blue-50 active:bg-brand-bright-blue/20",
  tertiary:
    "text-brand-bright-blue hover:bg-brand-bright-blue-50 active:bg-brand-bright-blue/20",
  neutral:
    "border border-neutral-300 text-neutral-800 hover:bg-neutral-100 active:bg-neutral-200",
  positive:
    "bg-success text-white hover:brightness-110 active:brightness-90",
  warning:
    "bg-warning text-white hover:brightness-110 active:brightness-90",
  negative:
    "bg-error text-white hover:brightness-110 active:brightness-90",
};

const sizeStyles: Record<ButtonSize, string> = {
  compact: "px-3 py-1 text-body-14",
  small: "px-3 py-1.5 text-body-14",
  medium: "px-5 py-1.5 text-body-16",
  large: "px-5 py-2 text-body-16",
};

export function Button({
  label,
  variant = "primary",
  size = "medium",
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright-blue disabled:opacity-[0.38] disabled:pointer-events-none ${sizeStyles[size]} ${variantStyles[variant]}`}
    >
      {iconLeft}
      {label}
      {iconRight}
    </button>
  );
}
