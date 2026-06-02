import React from "react";
import { cn } from "@/lib/cn";

/** Standard section wrapper: vertical rhythm + max-w-7xl container (CLAUDE.md §12). */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-6 sm:py-8", id && "scroll-mt-16", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  action,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
      <div>
        {kicker && (
          <p className="text-xs font-bold uppercase tracking-widest text-blue-gray-400 mb-2">{kicker}</p>
        )}
        <h2 className="text-2xl font-bold text-blue-gray-900 dark:text-blue-gray-50 mb-1">{title}</h2>
        {subtitle && <p className="text-base text-blue-gray-500 dark:text-blue-gray-400 max-w-3xl leading-relaxed">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

/** Soft filter/category pill. */
export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-gray-50 text-blue-gray-700 dark:bg-blue-gray-800 dark:text-blue-gray-200",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Outlined tech-stack badge. */
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-blue-gray-200 text-blue-gray-700 bg-white dark:border-blue-gray-700 dark:text-blue-gray-200 dark:bg-blue-gray-900">
      {children}
    </span>
  );
}
