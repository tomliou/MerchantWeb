import React from "react";
import "./Button.css";

type ButtonVariant = "filled" | "outline" | "ghost" | "text";
type ButtonTone = "system" | "primary";
type ButtonSize = "large" | "medium" | "small";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  tone = "primary",
  size = "medium",
  fullWidth = false,
  loading = false,
  disabled,
  children,
  className = "",
  ...rest
}) => {
  const isDisabled = disabled || loading;

  const classes = [
    "fp-btn",
    `fp-btn--${variant}`,
    `fp-btn--${tone}`,
    `fp-btn--${size}`,
    fullWidth ? "fp-btn--full" : "",
    isDisabled ? "fp-btn--disabled" : "",
    loading ? "fp-btn--loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={isDisabled} {...rest}>
      {loading && <span className="fp-btn-spinner" aria-hidden="true" />}
      <span className="fp-btn-label">{children}</span>
    </button>
  );
};

