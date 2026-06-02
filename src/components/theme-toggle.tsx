"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

/** Light/dark toggle for the nav. Guards against hydration mismatch with `mounted`. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-blue-gray-200 hover:text-white hover:bg-white/10 transition-colors"
    >
      {/* Render nothing theme-specific until mounted to avoid SSR/client mismatch. */}
      {mounted ? (
        isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />
      ) : (
        <span className="h-5 w-5" />
      )}
    </button>
  );
}

export default ThemeToggle;
