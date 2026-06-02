"use client";

import React from "react";
import { cn } from "@/lib/cn";

export { cn };

/**
 * Lightweight, dependency-free UI primitives that replace the handful of
 * `@material-tailwind/react` components this site used. They mirror the parts
 * of the Material Tailwind API the codebase relied on (variant/color/size) so
 * the existing markup keeps working on React 19 + Next.js 16, where Material
 * Tailwind is unsupported.
 *
 * Legacy Material Tailwind props such as `placeholder`, `ripple`, `floated`,
 * `shadow`, and the pointer-capture handlers are accepted and ignored so any
 * not-yet-cleaned usages still type-check.
 */

const TEXT_COLOR: Record<string, string> = {
  white: "text-white",
  black: "text-black",
  gray: "text-gray-700",
  "blue-gray": "text-blue-gray-900",
};

/* ------------------------------------------------------------------ Typography */

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "lead"
  | "paragraph"
  | "small";

const VARIANT_TAG: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  lead: "p",
  paragraph: "p",
  small: "small",
};

const VARIANT_CLASS: Record<TypographyVariant, string> = {
  h1: "text-4xl font-semibold leading-tight",
  h2: "text-3xl font-semibold leading-snug",
  h3: "text-2xl font-semibold leading-snug",
  h4: "text-xl font-semibold leading-snug",
  h5: "text-lg font-semibold leading-snug",
  h6: "text-base font-semibold leading-relaxed",
  lead: "text-xl font-normal leading-relaxed",
  paragraph: "text-base font-normal leading-relaxed",
  small: "text-sm font-normal leading-normal",
};

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  color?: string;
  as?: React.ElementType;
  /** Legacy Material Tailwind prop, ignored. */
  placeholder?: string;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant = "paragraph", color, as, className, placeholder: _p, children, ...rest }, ref) => {
    const Tag = (as ?? VARIANT_TAG[variant]) as React.ElementType;
    const colorClass = color ? TEXT_COLOR[color] ?? `text-${color}` : "";
    return (
      <Tag
        ref={ref}
        className={cn("font-sans antialiased text-blue-gray-900 dark:text-blue-gray-50", VARIANT_CLASS[variant], colorClass, className)}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);
Typography.displayName = "Typography";

/* ---------------------------------------------------------------------- Button */

const BTN_COLOR: Record<string, string> = {
  gray: "bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg",
  white: "bg-white text-gray-900 hover:bg-gray-50 shadow-md hover:shadow-lg",
  black: "bg-black text-white hover:bg-gray-900 shadow-md hover:shadow-lg",
  "blue-gray": "bg-blue-gray-500 text-white hover:bg-blue-gray-600 shadow-md hover:shadow-lg",
};

const BTN_SIZE: Record<string, string> = {
  sm: "py-2 px-4 text-xs",
  md: "py-3 px-6 text-xs",
  lg: "py-3.5 px-7 text-sm",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  size?: "sm" | "md" | "lg";
  variant?: string;
  fullWidth?: boolean;
  /** Legacy Material Tailwind props, ignored. */
  ripple?: boolean;
  placeholder?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { color = "gray", size = "md", variant: _v, fullWidth, ripple: _r, placeholder: _p, className, children, type, ...rest },
    ref
  ) => (
    <button
      ref={ref}
      type={type ?? "button"}
      className={cn(
        "inline-flex select-none items-center justify-center rounded-lg text-center align-middle font-bold uppercase transition-all disabled:pointer-events-none disabled:opacity-50",
        BTN_SIZE[size] ?? BTN_SIZE.md,
        BTN_COLOR[color] ?? BTN_COLOR.gray,
        fullWidth && "w-full",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";

interface IconButtonProps extends ButtonProps {}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = "md", ...rest }, ref) => (
    <Button
      ref={ref}
      size={size}
      className={cn("aspect-square !p-0", size === "sm" ? "w-9" : size === "lg" ? "w-12" : "w-10", className)}
      {...rest}
    />
  )
);
IconButton.displayName = "IconButton";

/* ------------------------------------------------------------------------ Card */

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  shadow?: boolean;
  /** Legacy Material Tailwind prop, ignored. */
  placeholder?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ color, shadow = true, className, placeholder: _p, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col rounded-xl bg-clip-border",
        color === "transparent" ? "bg-transparent" : "bg-white text-gray-700 dark:bg-blue-gray-900 dark:text-blue-gray-300",
        shadow && "shadow-md",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Legacy Material Tailwind props, ignored. */
  floated?: boolean;
  color?: string;
  shadow?: boolean;
  placeholder?: string;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, floated: _f, color: _c, shadow: _s, placeholder: _p, children, ...rest }, ref) => (
    <div ref={ref} className={cn("relative overflow-hidden rounded-xl bg-clip-border", className)} {...rest}>
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

export const CardBody = React.forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, floated: _f, color: _c, shadow: _s, placeholder: _p, children, ...rest }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...rest}>
      {children}
    </div>
  )
);
CardBody.displayName = "CardBody";

/* ---------------------------------------------------------------- Form controls */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, id, ...rest }, ref) => (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-1 block text-sm font-medium text-blue-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={cn(
          "w-full rounded-md border border-blue-gray-200 bg-white px-3 py-2 text-sm text-blue-gray-900 outline-none transition-colors placeholder:text-blue-gray-400 focus:border-gray-900",
          className
        )}
        {...rest}
      />
    </div>
  )
);
Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className, id, ...rest }, ref) => (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-1 block text-sm font-medium text-blue-gray-700">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={id}
        className={cn(
          "w-full rounded-md border border-blue-gray-200 bg-white px-3 py-2 text-sm text-blue-gray-900 outline-none transition-colors placeholder:text-blue-gray-400 focus:border-gray-900",
          className
        )}
        {...rest}
      />
    </div>
  )
);
Textarea.displayName = "Textarea";

/* --------------------------------------------------------------- ThemeProvider */

/** Passthrough replacement for Material Tailwind's ThemeProvider. */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
