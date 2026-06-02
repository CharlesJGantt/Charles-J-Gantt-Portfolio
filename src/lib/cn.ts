import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Compose Tailwind class names with conflict resolution. Lives in a plain
 * (non-"use client") module so it can be called from both server and client
 * components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
