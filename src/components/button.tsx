import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseButtonProps> & {
    as?: "button";
  };

type ButtonAsLink = BaseButtonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof BaseButtonProps> & {
    as: "link";
    href: string;
  };

type ButtonAsAnchor = BaseButtonProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof BaseButtonProps> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "gradient-purple text-white hover:opacity-90 transition-opacity font-semibold",
  secondary:
    "bg-navy-light text-white hover:bg-opacity-80 transition-all border border-white/10 font-semibold",
  ghost: "text-text-secondary hover:text-text-primary transition-colors font-medium",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-6 py-3 text-base rounded-full",
  lg: "px-8 py-4 text-lg rounded-full",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 transition-all duration-200";
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (props.as === "link") {
    const { as, ...linkProps } = props;
    return (
      <Link {...linkProps} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  if (props.as === "a") {
    const { as, ...anchorProps } = props;
    return (
      <a {...anchorProps} className={combinedClassName}>
        {children}
      </a>
    );
  }

  const { as, ...buttonProps } = props as ButtonAsButton;
  return (
    <button {...buttonProps} className={combinedClassName}>
      {children}
    </button>
  );
}
